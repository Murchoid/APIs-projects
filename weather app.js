const inputLand = document.getElementById("searchInput");
const search = document.getElementById("searchButton");
const searchedItem = document.getElementById("searchedItem");
const temp = document.getElementById("temp");
const weatherDesc = document.getElementById("weatherDesc");
const Humidity = document.getElementById("Humidity");
const windSpeed = document.getElementById("windSpeed");
const API_key = "6cdd9eb4e9d11c28deb2efc9e9ad7357";

getWeather();
async function getWeather() {
    try {
        // Validate input
        let city = inputLand.value.trim();
        if (!city) {
            city = searchedItem.innerText;
            return;
        }

        // Fetch weather data
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        
        // Check for successful response
        if (!response.ok) {
            throw new Error('Unable to fetch weather data');
        }

        // Parse JSON response
        const data = await response.json();
        console.log("City: " + data.name);
        console.log("weather: " + data.weather[0].description);
        console.log("wind: " + data.wind.speed);
        console.log("temp: " + data.main.temp-273);
        console.log("humidity: " + data.main.humidity);
        console.log(data);

        searchedItem.innerText = inputLand.value;
        temp.innerText = Math.ceil(data.main.temp-273);
        weatherDesc.innerText = data.weather[0].description;
        Humidity.innerText = data.main.humidity;
        windSpeed.innerText = data.wind.speed;

        inputLand.value = "";

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


search.addEventListener("click", getWeather);
