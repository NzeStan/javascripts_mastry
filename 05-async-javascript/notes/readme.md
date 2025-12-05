# Project 05: Weather App ☁️

## What You'll Build

A fully functional weather application that:
- ✅ Fetches real weather data from OpenWeatherMap API
- ✅ Shows current weather conditions
- ✅ Displays 5-day forecast
- ✅ Search by city name
- ✅ Shows temperature, humidity, wind speed, weather icon
- ✅ Beautiful, responsive design
- ✅ Error handling for invalid cities
- ✅ Loading indicators
- ✅ Temperature unit toggle (°C / °F)

---

## What You'll Learn

This project uses EVERYTHING from Module 05:
- ✅ **Fetch API** - Get data from OpenWeatherMap
- ✅ **Async/Await** - Handle async operations cleanly
- ✅ **Promises** - Chain multiple API calls
- ✅ **Error Handling** - try/catch for fetch errors
- ✅ **JSON Parsing** - Work with API response data
- ✅ **DOM Manipulation** - Display weather dynamically

---

## Getting Started

### Step 1: Get Free API Key

1. Go to https://openweathermap.org/
2. Sign up for a free account
3. Go to "API Keys" section
4. Copy your API key
5. Paste it in `script.js` (line 5)

```javascript
const API_KEY = "your_api_key_here";  // Replace with your key
```

**Note:** Free tier includes:
- 1,000 API calls per day
- Current weather data
- 5-day forecast
- No credit card required!

---

## How It Works

### User Flow:
1. Enter city name in search box
2. Click search or press Enter
3. App shows loading indicator
4. Fetches current weather from API
5. Fetches 5-day forecast from API
6. Displays weather data with icon
7. Shows error if city not found

### Data Flow:
```
User Input → Fetch Current Weather → Display
          ↓
          Fetch 5-Day Forecast → Display
```

---

## API Endpoints Used

### 1. Current Weather

```
GET https://api.openweathermap.org/data/2.5/weather
```

**Parameters:**
- `q`: City name (e.g., "London")
- `appid`: Your API key
- `units`: "metric" or "imperial"

**Response:**
```json
{
  "name": "London",
  "main": {
    "temp": 15.5,
    "feels_like": 14.2,
    "humidity": 72
  },
  "weather": [
    {
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "wind": {
    "speed": 5.2
  }
}
```

### 2. 5-Day Forecast

```
GET https://api.openweathermap.org/data/2.5/forecast
```

**Parameters:**
- `q`: City name
- `appid`: Your API key
- `units`: "metric" or "imperial"

**Response:**
```json
{
  "list": [
    {
      "dt": 1638360000,
      "main": { "temp": 12.5 },
      "weather": [{ "icon": "10d" }],
      "dt_txt": "2024-12-01 12:00:00"
    }
    // ... more forecast items
  ]
}
```

---

## File Structure

```
project-weather-app/
├── index.html      ← App structure
├── style.css       ← Beautiful styling
├── script.js       ← Weather fetching logic
└── README.md       ← This file!
```

---

## Features Breakdown

### Feature 1: Search Functionality
- Input field for city name
- Search button
- Enter key support
- Input validation (not empty)

### Feature 2: Current Weather Display
- City name and country
- Current temperature (large, prominent)
- Weather description ("Partly Cloudy")
- Weather icon from API
- Feels like temperature
- Humidity percentage
- Wind speed

### Feature 3: 5-Day Forecast
- Shows next 5 days
- Date for each day
- High/Low temperature
- Weather icon
- Scrollable horizontally on mobile

### Feature 4: Loading State
- Shows spinner while fetching
- Hides weather during load
- Prevents multiple simultaneous requests

### Feature 5: Error Handling
- City not found message
- Network error handling
- API key error handling
- User-friendly error messages

### Feature 6: Temperature Units
- Toggle between °C and °F
- Remembers preference
- Converts existing data

### Feature 7: Responsive Design
- Works on desktop, tablet, mobile
- Touch-friendly buttons
- Readable on all screen sizes

---

## Code Breakdown

### Key Functions

```javascript
// Fetch current weather
async function fetchWeather(city)

// Fetch 5-day forecast
async function fetchForecast(city)

// Display current weather
function displayWeather(data)

// Display forecast
function displayForecast(data)

// Handle errors
function showError(message)

// Toggle temperature units
function toggleUnits()
```

### API Call Pattern

```javascript
async function fetchWeather(city) {
    try {
        // Show loading
        showLoading();
        
        // Build URL
        const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        
        // Fetch data
        const response = await fetch(url);
        
        // Check for errors
        if (!response.ok) {
            throw new Error("City not found");
        }
        
        // Parse JSON
        const data = await response.json();
        
        // Hide loading
        hideLoading();
        
        // Display data
        displayWeather(data);
        
    } catch (error) {
        hideLoading();
        showError(error.message);
    }
}
```

---

## Testing Your Weather App

### Test 1: Basic Search
- Enter "London"
- Click Search
- Should show London weather ✅

### Test 2: Multiple Cities
- Search "Paris"
- Search "Tokyo"
- Search "New York"
- Each should work correctly ✅

### Test 3: Invalid City
- Search "XYZ123InvalidCity"
- Should show "City not found" error ✅

### Test 4: Empty Input
- Leave input empty
- Click Search
- Should show validation message ✅

### Test 5: Loading State
- Search for a city
- Loading spinner should appear ✅
- Weather should appear after load ✅

### Test 6: Forecast
- After searching
- Should show 5-day forecast ✅
- Each day should have date and temp ✅

### Test 7: Units Toggle
- Toggle between °C and °F
- Temperatures should convert ✅
- Unit label should change ✅

### Test 8: Responsive
- Resize browser window
- App should look good at all sizes ✅
- Forecast should scroll on mobile ✅

---

## Customization Ideas

Once it's working, try:

1. **Add More Data**
   - Sunrise/sunset times
   - UV index
   - Air quality
   - Precipitation chance

2. **Geolocation**
   - "Use My Location" button
   - Auto-fetch weather for user's location

3. **Recent Searches**
   - Store last 5 cities searched
   - Quick access buttons
   - Local storage persistence

4. **Weather Alerts**
   - Severe weather warnings
   - Temperature alerts
   - Storm notifications

5. **Visual Enhancements**
   - Background changes with weather
   - Animated weather icons
   - Charts for temperature trends
   - Map integration

6. **Multiple Locations**
   - Save favorite cities
   - Compare multiple cities
   - Weather for multiple locations

---

## Common Issues & Fixes

### Issue 1: API Key Not Working
**Check:** Did you add your actual API key?
**Fix:** Replace `"your_api_key_here"` with your real key from OpenWeatherMap

### Issue 2: CORS Error
**Reason:** OpenWeatherMap API allows CORS
**Fix:** Make sure you're using the correct URL format

### Issue 3: City Not Found
**Check:** Is the city name spelled correctly?
**Try:** Use common English city names

### Issue 4: Too Many Requests (429 Error)
**Reason:** Exceeded 1,000 calls per day
**Fix:** Wait for next day or upgrade plan

### Issue 5: Weather Icon Not Showing
**Check:** Is the image URL correct?
**Fix:** Verify icon code from API response

---

## API Response Examples

### Successful Response
```json
{
  "name": "Lagos",
  "main": {
    "temp": 28.5,
    "feels_like": 30.2,
    "humidity": 85
  },
  "weather": [
    {
      "main": "Rain",
      "description": "light rain",
      "icon": "10d"
    }
  ],
  "wind": {
    "speed": 3.5
  },
  "sys": {
    "country": "NG"
  }
}
```

### Error Response (404)
```json
{
  "cod": "404",
  "message": "city not found"
}
```

---

## Weather Icons

OpenWeatherMap provides icon codes:
- `01d` - Clear sky (day)
- `01n` - Clear sky (night)
- `02d` - Few clouds
- `03d` - Scattered clouds
- `04d` - Broken clouds
- `09d` - Shower rain
- `10d` - Rain
- `11d` - Thunderstorm
- `13d` - Snow
- `50d` - Mist

**Icon URL format:**
```
https://openweathermap.org/img/wn/[icon]@2x.png
```

---

## Module 05 Concepts Used

### Async/Await:
```javascript
async function fetchWeather(city) {
    const response = await fetch(url);
    const data = await response.json();
}
```

### Error Handling:
```javascript
try {
    // Fetch weather
} catch (error) {
    // Handle errors
}
```

### Promise.all() for Parallel Requests:
```javascript
const [weather, forecast] = await Promise.all([
    fetchWeather(city),
    fetchForecast(city)
]);
```

### Fetch API:
```javascript
const response = await fetch(url);
if (!response.ok) throw new Error();
const data = await response.json();
```

---

## Bonus Challenges

### Challenge 1: Hour-by-Hour Forecast
- Show temperature for each hour
- Next 24 hours
- Scrollable timeline

### Challenge 2: Weather Comparison
- Compare 2-3 cities side by side
- Which is warmer?
- Visual comparison

### Challenge 3: Weather History
- Show past week's weather
- Temperature trends
- Graph visualization

### Challenge 4: Multi-Language
- Support multiple languages
- Translate weather descriptions
- Language selector

---

## What You Learned

By building this weather app, you practiced:
- ✅ **Fetch API** - Real HTTP requests
- ✅ **Async/Await** - Clean async code
- ✅ **Error Handling** - try/catch blocks
- ✅ **JSON** - Parse API responses
- ✅ **Promises** - Handle async operations
- ✅ **DOM Updates** - Dynamic content
- ✅ **User Input** - Form handling
- ✅ **API Integration** - Work with external APIs

---

## Next Steps

After completing this weather app:
1. ✅ Test with different cities worldwide
2. ✅ Try the customization ideas
3. ✅ Add it to your portfolio!
4. ✅ Move to Module 06: Object-Oriented JavaScript

---

## Congratulations! 🎉

You built a real app that connects to a live API!

This is **professional-level** work. You can now:
- Fetch data from any API
- Handle async operations confidently
- Build real-world applications
- Integrate third-party services

**You're a JavaScript developer!** 💪

---

## Important Notes

⚠️ **API Key Security:**
- Don't commit API keys to GitHub
- Use environment variables in production
- This is for learning purposes

⚠️ **Rate Limits:**
- Free tier: 1,000 calls/day
- Don't make too many requests
- Consider caching results

⚠️ **Attribution:**
- OpenWeatherMap requires attribution
- Add "Powered by OpenWeatherMap" to your app

---

**Ready to Build?** Open `index.html` and let's start coding! 🌤️