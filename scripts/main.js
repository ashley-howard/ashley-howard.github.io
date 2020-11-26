const darkMode = document.getElementById('dark-mode');
var isDark = localStorage.getItem('isDark') ? localStorage.getItem('isDark') : 'no';

if (localStorage.getItem('isDark') == 'yes') {
    darkMode.removeAttribute("class", "light")
    darkMode.setAttribute("class", "dark")
    document.body.setAttribute("class", "dark")
}

function toggleDarkMode() {
    if (darkMode.classList.contains('light')) {
        darkMode.removeAttribute("class", "light")
        darkMode.setAttribute("class", "dark")

        document.body.setAttribute("class", "dark")
        localStorage.setItem('isDark', 'yes');
    } else {
        darkMode.removeAttribute("class", "dark")
        darkMode.setAttribute("class", "light")

        document.body.removeAttribute("class", "dark")
        localStorage.setItem('isDark', 'no');
    }
}

const cookieWarning = document.getElementById('cookie-warning');
var acceptCookies = localStorage.getItem('acceptCookies') ? localStorage.getItem('acceptCookies') : 'no';

if (acceptCookies == 'yes') {
    cookieWarning.style.display = 'none';
}

function acceptCookieWarning() {
    localStorage.setItem('acceptCookies', 'yes');
    cookieWarning.style.display = 'none';
}