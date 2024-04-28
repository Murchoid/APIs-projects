const inputLand = document.getElementById("searchInput");
const search = document.getElementById("searchButton");
const container = document.getElementById("content");
const searchedItem = document.getElementById("searchedItem");
const temp = document.getElementById("temp");
const weatherDesc = document.getElementById("weatherDesc");
const Humidity = document.getElementById("Humidity");
const windSpeed = document.getElementById("windSpeed");

try {
    require('dotenv').config();
    const APIKEY = process.env.API_KEY;
    
} catch (error) {
    console.error('Error loading environment variables:', error.message);
}

getWeather();
async function getWeather() {
    try {
        // Validate input
        let city = inputLand.value.trim();
        if (!city) {
            city = searchedItem.innerText;
            return;
        }
        
        loading.style.display = "block";
        container.style.display = "none";

        // Fetch weather data
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
        
        // Check for successful response
        if (!response.ok) {
            throw new Error('Unable to fetch weather data');
        }

        // Parse JSON response
        const data = await response.json();

        loading.style.display = "none";
        container.style.display = "block";

        searchedItem.innerText = inputLand.value;
        temp.innerText = Math.ceil(data.main.temp-273);
        weatherDesc.innerText = data.weather[0].description;
        Humidity.innerText = data.main.humidity;
        windSpeed.innerText = data.wind.speed;

        inputLand.value = "";

    } catch (error) {
        console.error('Error fetching weather data:', error);
        container.innerText = "Error fetching weather data";
        container.style.display = "block";
        loading.style.display = "none";
        inputLand.value = "";
    }
}


search.addEventListener("click", getWeather);
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") getWeather();
});