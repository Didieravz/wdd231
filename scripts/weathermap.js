const currentTemp = document.querySelector('#current-temp');
const currentCity = document.querySelector('#current-city');
//const currentCountry = document.querySelector('#current-country');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//constantes para las porperties de la url
const lat = 49.75;
const lon = 6.64;
const myKey = '36453d0a523b3dfe14433919c1ab3915';

//Url para la api
//const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=36453d0a523b3dfe14433919c1ab3915";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;


//funcion asincrona
async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log('results', data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }        
    } catch (error) {
        console.error(error);
    }
}

//Metodo para mostrar el (clima) weather
function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    currentCity.innerHTML = data.name;
    //currentCountry.innerHTML = data.sys.country;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;

}

apiFetch();