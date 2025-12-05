// ===================================
// WEATHER APP - MODULE 05 PROJECT
// Demonstrates: Fetch API, Async/Await, Promises, Error Handling
// ===================================

// API Configuration
const API_KEY = "your_api_key_here";  // Replace with your OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// State
let currentUnit = "metric";  // metric = Celsius, imperial = Fahrenheit
let currentCity = "";
let weatherData = null;
let forecastData = null;

// DOM Elements
const elements = {
    cityInput: document.getElementById("cityInput"),
    searchBtn: document.getElementById("searchBtn"),
    loading: document.getElementById("loading"),
    error: document.getElementById("error"),
    errorMessage: document.getElementById("errorMessage"),
    currentWeather: document.getElementById("currentWeather"),
    forecast: document.getElementById("forecast"),
    
    // Current weather elements
    cityName: document.getElementById("cityName"),
    currentDate: document.getElementById("currentDate"),
    weatherIcon: document.getElementById("weatherIcon"),
    temperature: document.getElementById("temperature"),
    unit: document.getElementById("unit"),
    weatherDescription: document.getElementById("weatherDescription"),
    feelsLike: document.getElementById("feelsLike"),
    humidity: document.getElementById("humidity"),
    windSpeed: document.getElementById("windSpeed"),
    pressure: document.getElementById("pressure"),
    
    // Forecast
    forecastContainer: document.getElementById("forecastContainer"),
    
    // Unit toggle
    celsiusBtn: document.getElementById("celsiusBtn"),
    fahrenheitBtn: document.getElementById("fahrenheitBtn")
};

// ===================================
// ASYNC FUNCTIONS - FETCH WEATHER DATA
// ===================================

/**
 * Fetch current weather for a city
 * Demonstrates: async/await, fetch API, error handling
 */
async function fetchWeather(city) {
    try {
        const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${currentUnit}`;
        
        console.log("Fetching weather for:", city);
        
        const response = await fetch(url);
        
        // Check for HTTP errors
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found. Please check the spelling and try again.");
            } else if (response.status === 401) {
                throw new Error("Invalid API key. Please check your API key.");
            } else {
                throw new Error(`HTTP Error: ${response.status}`);
            }
        }
        
        const data = await response.json();
        console.log("Weather data:", data);
        
        return data;
    } catch (error) {
        console.error("Fetch weather error:", error);
        throw error;
    }
}

/**
 * Fetch 5-day forecast for a city
 * Demonstrates: async/await, promise chaining
 */
async function fetchForecast(city) {
    try {
        const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=${currentUnit}`;
        
        console.log("Fetching forecast for:", city);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Forecast fetch failed: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Forecast data:", data);
        
        return data;
    } catch (error) {
        console.error("Fetch forecast error:", error);
        throw error;
    }
}

/**
 * Fetch both weather and forecast in parallel
 * Demonstrates: Promise.all() for concurrent requests
 */
async function fetchWeatherData(city) {
    try {
        showLoading();
        hideError();
        
        // Fetch both in parallel for better performance
        const [weather, forecast] = await Promise.all([
            fetchWeather(city),
            fetchForecast(city)
        ]);
        
        weatherData = weather;
        forecastData = forecast;
        currentCity = city;
        
        hideLoading();
        displayWeather(weather);
        displayForecast(forecast);
        
    } catch (error) {
        hideLoading();
        showError(error.message);
    }
}

// ===================================
// DISPLAY FUNCTIONS
// ===================================

/**
 * Display current weather
 */
function displayWeather(data) {
    // City name and country
    elements.cityName.textContent = `${data.name}, ${data.sys.country}`;
    
    // Current date
    const date = new Date();
    elements.currentDate.textContent = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Weather icon
    const iconCode = data.weather[0].icon;
    elements.weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    elements.weatherIcon.alt = data.weather[0].description;
    
    // Temperature
    elements.temperature.textContent = Math.round(data.main.temp);
    elements.unit.textContent = currentUnit === "metric" ? "°C" : "°F";
    
    // Description
    elements.weatherDescription.textContent = data.weather[0].description;
    
    // Details
    const unitSymbol = currentUnit === "metric" ? "°C" : "°F";
    elements.feelsLike.textContent = `${Math.round(data.main.feels_like)}${unitSymbol}`;
    elements.humidity.textContent = `${data.main.humidity}%`;
    
    const windUnit = currentUnit === "metric" ? "km/h" : "mph";
    const windSpeed = currentUnit === "metric" 
        ? (data.wind.speed * 3.6).toFixed(1)  // m/s to km/h
        : data.wind.speed;
    elements.windSpeed.textContent = `${windSpeed} ${windUnit}`;
    
    elements.pressure.textContent = `${data.main.pressure} hPa`;
    
    // Show weather section
    elements.currentWeather.classList.remove("hidden");
}

/**
 * Display 5-day forecast
 * Process forecast data to show one forecast per day at noon
 */
function displayForecast(data) {
    elements.forecastContainer.innerHTML = "";
    
    // Filter to get one forecast per day (around noon)
    const dailyForecasts = data.list.filter(item => {
        return item.dt_txt.includes("12:00:00");
    }).slice(0, 5);  // Get first 5 days
    
    dailyForecasts.forEach(item => {
        const card = createForecastCard(item);
        elements.forecastContainer.appendChild(card);
    });
    
    // Show forecast section
    elements.forecast.classList.remove("hidden");
}

/**
 * Create forecast card element
 */
function createForecastCard(data) {
    const date = new Date(data.dt * 1000);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    
    const card = document.createElement("div");
    card.className = "forecast-card";
    
    const iconCode = data.weather[0].icon;
    const temp = Math.round(data.main.temp);
    const unitSymbol = currentUnit === "metric" ? "°C" : "°F";
    
    card.innerHTML = `
        <div class="forecast-day">${dayName}</div>
        <div class="forecast-date">${monthDay}</div>
        <div class="forecast-icon">
            <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" 
                 alt="${data.weather[0].description}">
        </div>
        <div class="forecast-temp">${temp}${unitSymbol}</div>
        <div class="forecast-desc">${data.weather[0].description}</div>
    `;
    
    return card;
}

// ===================================
// UI HELPER FUNCTIONS
// ===================================

function showLoading() {
    elements.loading.classList.remove("hidden");
    elements.currentWeather.classList.add("hidden");
    elements.forecast.classList.add("hidden");
}

function hideLoading() {
    elements.loading.classList.add("hidden");
}

function showError(message) {
    elements.errorMessage.textContent = message;
    elements.error.classList.remove("hidden");
    elements.currentWeather.classList.add("hidden");
    elements.forecast.classList.add("hidden");
}

function hideError() {
    elements.error.classList.add("hidden");
}

// ===================================
// EVENT HANDLERS
// ===================================

/**
 * Handle search button click
 */
function handleSearch() {
    const city = elements.cityInput.value.trim();
    
    if (!city) {
        showError("Please enter a city name");
        return;
    }
    
    fetchWeatherData(city);
}

/**
 * Handle unit toggle
 */
function toggleUnit(newUnit) {
    if (newUnit === currentUnit) return;
    
    currentUnit = newUnit;
    
    // Update button states
    if (newUnit === "metric") {
        elements.celsiusBtn.classList.add("active");
        elements.fahrenheitBtn.classList.remove("active");
    } else {
        elements.fahrenheitBtn.classList.add("active");
        elements.celsiusBtn.classList.remove("active");
    }
    
    // Refetch weather if city is already loaded
    if (currentCity) {
        fetchWeatherData(currentCity);
    }
}

// ===================================
// EVENT LISTENERS
// ===================================

// Search button
elements.searchBtn.addEventListener("click", handleSearch);

// Enter key in input
elements.cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleSearch();
    }
});

// Unit toggle buttons
elements.celsiusBtn.addEventListener("click", () => toggleUnit("metric"));
elements.fahrenheitBtn.addEventListener("click", () => toggleUnit("imperial"));

// ===================================
// INITIALIZATION
// ===================================

// Load default city on page load
function init() {
    console.log("🌤️ Weather App Loaded!");
    console.log("===================================");
    console.log("Module 05 Concepts Demonstrated:");
    console.log("  ✓ Fetch API - HTTP requests to OpenWeatherMap");
    console.log("  ✓ Async/Await - Clean async code");
    console.log("  ✓ Promises - Promise.all() for parallel requests");
    console.log("  ✓ Error Handling - try/catch for fetch errors");
    console.log("  ✓ JSON Parsing - response.json()");
    console.log("===================================");
    console.log("⚠️ Don't forget to add your API key!");
    
    // Check if API key is set
    if (API_KEY === "your_api_key_here") {
        showError("Please add your OpenWeatherMap API key in script.js (line 7)");
        return;
    }
    
    // Load a default city (optional)
    // fetchWeatherData("Lagos");
    
    // Focus on input
    elements.cityInput.focus();
}

// Start the app
init();

// ===================================
// MODULE 05 CONCEPTS IN ACTION
// ===================================

/*
FETCH API:
- fetch(url) - Make HTTP request
- response.ok - Check if successful
- response.json() - Parse JSON response
- Error checking for 404, 401, etc.

ASYNC/AWAIT:
- async function - Declares async function
- await fetch() - Wait for promise to resolve
- Clean, readable async code
- No .then() chains needed

PROMISES:
- Promise.all() - Wait for multiple promises
- Parallel requests for better performance
- Both weather and forecast fetched together

ERROR HANDLING:
- try/catch blocks around async code
- Specific error messages for different scenarios
- User-friendly error display

JSON PARSING:
- await response.json() - Parse API response
- Access nested data (data.main.temp)
- Transform data for display

This weather app is a complete demonstration of
everything learned in Module 05: Async JavaScript!
*/