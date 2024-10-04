const currentTemp = document.querySelector('#current-temp');
const currentCity = document.querySelector('#current-city');
const weatherDescription = document.querySelector('#description');
const weatherIcon = document.querySelector('#weather-icon');
//const captionDesc = document.querySelector('figcaption');
//manipulacion del Dom para forecast weather
const todayTemp = document.querySelector('#today-temp');
const saturdayTemp = document.querySelector('#saturday-temp');
const sundayTemp = document.querySelector('#sunday-temp');
const forecastIcon = document.querySelector('#forecast-icon');


//constantes para las porperties de la url
const lat = 5.53;
const lon = -74.103;
const myKey = '36453d0a523b3dfe14433919c1ab3915';

//Url para para el llamado a la API
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;
//URL api forecast weather
const forecastUrl = `https://pro.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;
//Ruta para la data JSON
const dataJSON = 'data/members.json';

//llamado asincrono a la api weather
async function apiWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log('results', data);
            displayWeather(data);
        }else{
            throw Error(await response.text());
        }          
    } catch (error) {
        console.error(error);
    }    
} 
//Funcion para mostrar el clima
function displayWeather(data) {
    currentCity.innerHTML = data.name;
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    //const iconsrc = "images/weatherFavicon.ico";
    let desc = data.weather[0].description;
    weatherDescription.innerHTML = desc;
    //weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    //captionDesc.textContent = `${desc}`;
    
}

//llamado asincrono a la api weather
async function apiForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log('results 2', data);
            displayForecast(data);
        }else{
            throw Error(await response.text());
        }          
    } catch (error) {
        console.error(error);
    }    
} 

//Funcion para mostrar el forecast weather
function displayForecast(data) {
    todayTemp.innerHTML = `${data.list[0].main.temp}&deg;C`;
    saturdayTemp.innerHTML = `${data.list[11].main.temp}&deg;C`;
    sundayTemp.innerHTML = `${data.list[9].main.temp}&deg;C`;
    //const iconForsrc = "images/faviconForecast.ico";
    let desc = data.list[0].weather.description;
    //forecastIcon.setAttribute('src', iconForsrc);
    forecastIcon.setAttribute('alt', desc);
    //captionDesc.textContent = `${desc}`;
   
}

apiWeather();
apiForecast();

// Función para cargar los datos JSON
async function loadMemberData() {
    try {
        const response = await fetch(dataJSON);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading member data:', error);
        return [];
    }
}

// Función para seleccionar aleatoriamente miembros Gold y Silver
function selectRandomMembers(members, count) {
    const goldSilverMembers = members.filter(member => member.membershipLevel >= 2);
    const shuffled = goldSilverMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Función para crear un elemento spotlight
function createSpotlight(member) {
    const spotlight = document.createElement('div');
    spotlight.classList.add('spotlight');
    
    spotlight.innerHTML = `
        <img src="${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <p class="membership-level">Membership: ${member.membershipLevel === 3 ? 'Gold' : 'Silver'}</p>
    `;
    
    return spotlight;
}

// Función principal para mostrar los spotlights
async function displaySpotlights() {
    const memberData = await loadMemberData();
    const selectedMembers = selectRandomMembers(memberData, 3);
    const spotlightContainer = document.getElementById('spotlight-container');
    
    selectedMembers.forEach(member => {
        const spotlight = createSpotlight(member);
        spotlightContainer.appendChild(spotlight);
    });
}

// Ejecutar la función cuando se carga la página
window.addEventListener('load', displaySpotlights);