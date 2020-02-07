function drinkCoffee() {
    document.getElementById("coffee-note").classList.add("strike");
}

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 8000);
}

// weather
const appKey = "6a42348f3f2db5f744296408f0807ef2";
var weatherUnit = "&units=metric"; // or "imperial" for fahrenheit - if doesn't update, it's because localstorage needs clearing
let weatherLocation = 'London'; // getting location from HTML
const temperature = document.getElementById("weather-temp");
const weatherSlide = document.getElementById("weather-slide");
const weatherCond = document.getElementById("weather-cond");

var api = "https://api.openweathermap.org/data/2.5/weather?q=" + weatherLocation + "&appid=" + appKey + weatherUnit;

var userTime = new Date().getTime();
let getUserTime = localStorage.getItem('userTime');

// if userTime is not set, set it now and load weather details OR if userTime is more than 1 hour (3600000 ms) do this
if (!getUserTime || userTime > (Number(getUserTime) + 3600000)) {
    userTime = new Date().getTime();
    localStorage.setItem('userTime', userTime);
    findWeatherDetails();
    setTimeout(function () {
        localStorage.setItem('weatherBg', weatherSlide.style.background); // set weather bg
        localStorage.setItem('weatherCond', weatherCond.innerText); // set weather condition
        localStorage.setItem('weatherTemp', temperature.innerText); // set temperature
    }, 3000);
}

// don't reload weather, only retrieve info
else {
    weatherCond.innerText = localStorage.getItem('weatherCond'); // retrieve icon 
    weatherSlide.style.background = localStorage.getItem('weatherBg'); // retrieve icon 
    temperature.innerText = localStorage.getItem('weatherTemp'); // retrieve temp

    console.log(Math.trunc((3600000 - (userTime - Number(getUserTime))) / 60000) + " minute(s) until next weather update.")
}

function findWeatherDetails() {
    httpRequestAsync(api, theResponse);
}

function theResponse(response) {
    let jsonObject = JSON.parse(response);
    temperature.innerHTML = parseInt(jsonObject.main.temp) + "°";
    weatherCond.innerHTML = jsonObject.weather[0].main;

    if (200 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 232) {
        weatherSlide.style.background = 'radial-gradient(at 153px 13px, rgb(242, 242, 242) 0%, rgb(162, 115, 0) 100%)'
    }
    else if (300 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 531) {
        weatherSlide.style.background = 'radial-gradient(at 153px 13px, rgb(2, 46, 71) 0%, rgb(122, 122, 122) 100%)'
    }
    else if (600 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 622) {
        weatherSlide.style.background = 'radial-gradient(at 153px 13px, rgb(255, 255, 255) 0%, rgb(122, 122, 122) 100%)'
    }
    else if (701 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 781) {
        weatherSlide.style.background = 'radial-gradient(at 153px 13px, rgb(143, 143, 143) 0%, rgb(65, 65, 65) 100%)'
    }
    else if (jsonObject.weather[0].id && jsonObject.weather[0].id === 800) {
        weatherSlide.style.background = 'radial-gradient(farthest-corner at 153px 13px, #fff 0%, #338fee 100%)'
    }
    else if (801 <= jsonObject.weather[0].id && jsonObject.weather[0].id <= 804) {
        weatherSlide.style.background = 'radial-gradient(at 153px 13px, rgb(255, 255, 255) 0%, rgb(63, 63, 63) 100%)'
    }
    else {
        console.log("Error");
    }
}

function httpRequestAsync(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

// date
const date = new Date;
const day = date.getDate();
const hubBg = document.getElementById('hub-bg')
var hour = date.getHours();
var welcomeText = document.getElementById('welcome-text');

document.getElementById('day').innerHTML = day;

if (hour >= 5 && hour <= 11) {
    welcomeText.innerHTML = "Good morning";
}
else if (hour >= 12 && hour <= 17) {
    welcomeText.innerHTML = "Good afternoon";
}
else if (hour >= 18 && hour <= 20) {
    welcomeText.innerHTML = "Good evening";
}
else {
    welcomeText.innerHTML = "Good night";
}

if (hour >= 5 && hour <= 17) {
    hubBg.src = './img/hub-day.png'
}

else {
    hubBg.src = './img/hub-night.png'
}

// large screen
const largeScreen = document.getElementById('large-screen');
const prependTyped = document.getElementById('prepend-typed');
const backButton = document.getElementById('back-button');
const extendables = document.getElementsByClassName('extendable');

var screenCache, typed, typedString, typedStartDelay, timeout;

if (window.matchMedia("(max-width: 991px)").matches || window.matchMedia("(orientation: portrait)").matches) {
    prependTyped.innerHTML = `https://ashley.how`;
}

function openScreen(screen) {
    extend()
    document.getElementById('folders').style.display = "none";

    if (screen === 'projects') {
        timeout = 3900;
    }

    else if (screen === 'main') {
        timeout = 0;
    }

    else if (screen === 'about') {
        timeout = 3700;
    }

    else if (screen === 'skills') {
        timeout = 3800;
    }

    else if (screen === 'contact') {
        timeout = 3900;
    }

    if (screen === 'main') {
        prependTyped.innerHTML = `https://ashley.how`;
    }

    else if (screenCache === 'main' && screen !== 'main' || ((window.matchMedia("(max-width: 991px)").matches || window.matchMedia("(orientation: portrait)").matches))) {
        timeout = timeout - 3100;
        typedString = `/${screen}`
        typedStartDelay = 0

        var typed = new Typed('#typed', {
            strings: [typedString],
            typeSpeed: 50,
            showCursor: false,
            startDelay: typedStartDelay
        });
    }

    else {
        typedString = `https://ashley.how/${screen}`;

        if (window.matchMedia("(max-width: 991px)").matches) {
            typedStartDelay = 0;
        } else {
            typedStartDelay = 2000
        }

        var typed = new Typed('#typed', {
            strings: [typedString],
            typeSpeed: 50,
            showCursor: false,
            startDelay: typedStartDelay
        });
    }

    setTimeout(function () {
        if (screen === 'main') {
            screenCache.style.display = "none";
            document.getElementById('folders').style.display = "flex";
            prependTyped.innerHTML = 'https://ashley.how';
            backButton.style.display = "none";
            screenCache = 'main';
        }

        else {
            typed.destroy()
            document.getElementById('folders').style.display = "none";
            document.getElementById(`screen-${screen}`).style.display = "block";
            prependTyped.innerHTML = `https://ashley.how/${screen}`;
            screenCache = document.getElementById(`screen-${screen}`);
            backButton.style.display = "flex";
        }
    }, timeout);
}

function minimise() {
    shrink()
    document.getElementById('minimised').style.display = "flex";
    document.getElementById(screenCache.id).style.display = "none";
}

function maximise() {
    extend()
    document.getElementById('minimised').style.display = "none";
    document.getElementById(screenCache.id).style.display = "block";
}

function closeScreen() {
    shrink()
    document.getElementById(screenCache.id).style.display = "none";
    document.getElementById('folders').style.display = "flex";
    prependTyped.innerHTML = '';
}

function extend() {
    if (!window.matchMedia("(max-width: 992px)").matches && window.matchMedia("(orientation: landscape)").matches) {
        var i;
        for (i = 0; i < extendables.length; i++) {
            extendables[i].classList.add("extended");
        }
    }
}

function shrink() {
    var i;
    for (i = 0; i < extendables.length; i++) {
        extendables[i].classList.remove("extended");
    }
}