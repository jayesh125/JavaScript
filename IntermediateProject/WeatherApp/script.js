document.addEventListener('DOMContentLoaded', () => {
    let input = document.querySelector('input');
    let btn = document.getElementById('btn');
    let icon = document.querySelector('.icon');
    let weather = document.querySelector('.weather');
    let temperature = document.querySelector('.temperature'); // Corrected class name
    let description = document.querySelector('.description');

    btn.addEventListener('click', () => {
        let city = input.value;
        getWeather(city);
    });

    function getWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41b94415d5ae1b5e1cc6737165420968`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(data.weather[0].icon);

            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
            icon.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;

            const weatherCity = data.name;
            const weatherCountry = data.sys.country;
            weather.innerHTML = `${weatherCity} ${weatherCountry}`;

            let weatherTemp = data.main.temp - 273.15; // Convert temperature to Celsius
            const temp = weatherTemp.toFixed(2);
            temperature.innerHTML = `${temp}°C`;

            const weatherDescription = data.weather[0].description;
            description.innerHTML = `${weatherDescription}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // Optionally display an error message to the user
        });
    }
});
