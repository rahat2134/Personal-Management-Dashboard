// Adding task functionality
document.getElementById('add-task-btn').addEventListener('click', function() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  if (taskInput.value.trim() !== "") {
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
});

// Adding note functionality
document.getElementById('save-note-btn').addEventListener('click', function() {
  const noteInput = document.getElementById('note-input');
  const noteList = document.getElementById('note-list');
  if (noteInput.value.trim() !== "") {
    const newNote = document.createElement('li');
    newNote.textContent = noteInput.value;
    noteList.appendChild(newNote);
    noteInput.value = '';
  }
});

// Adding goal functionality
document.getElementById('add-goal-btn').addEventListener('click', function() {
  const goalInput = document.getElementById('goal-input');
  const goalList = document.getElementById('goal-list');
  if (goalInput.value.trim() !== "") {
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput.value;
    goalList.appendChild(newGoal);
    goalInput.value = '';
  }
});

// Fetching weather details using OpenWeatherMap API
const weatherAPIKey = '0d08c5df99f8ce477cbcc076a8b10974'; // Replace with your actual API key
const city = 'Bangalore';
const state = 'Karnataka';
const countryCode = 'IN';

// Construct the API URL
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${countryCode}&units=metric&appid=${weatherAPIKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();

    // Check if the response contains valid weather data
    if (data.cod === 200) {
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      // Display the weather data in the HTML
      document.getElementById('weather-info').innerHTML = `
        <h3>Weather in ${city}, ${state}</h3>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Condition:</strong> ${weatherDescription}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
      `;
    } else {
      // Handle case where weather data is not found
      document.getElementById('weather-info').innerHTML = `<p>Sorry, we couldn't fetch the weather data. Please try again later.</p>`;
    }
  } catch (error) {
    // Handle network or other errors
    console.error("Error fetching weather data:", error);
    document.getElementById('weather-info').innerHTML = `<p>Sorry, we couldn't fetch the weather data. Please check the console for more details.</p>`;
  }
}

// Call the function to fetch weather data
fetchWeather();
