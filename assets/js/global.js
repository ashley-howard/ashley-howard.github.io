const body = document.body;
const sections = document.querySelectorAll('section')
const btnMenu = document.querySelector("#menu-btn");
const menuLineLeft = document.querySelector("#menu-btn-left");
const menuLineRight = document.querySelector("#menu-btn-right");
const wrapper = document.querySelector('.wrapper');
const nav = document.querySelector('#mobile-nav');
const socials = document.querySelector('.socials');

btnMenu.onclick = function () { menuOpen() };

function menuOpen() {
    // DEFER MISBEHAVING TRANSITIONS HERE
    nav.style.transition = 'transform 0.5s 1s'
    socials.style.transition = 'transform 1s, opacity 1s'
    // ----------------------------------

    if (!nav.classList.contains('open')) {
        menuLineLeft.style.animation = 'menu-line-left-open 0.9s ease forwards';
        menuLineRight.style.animation = 'menu-line-right-open 0.9s ease forwards';
        document.body.style.overflowY = "hidden";
        wrapper.classList.add("open");
        socials.classList.add("open")
        nav.classList.add("open")

    } else {
        menuLineLeft.style.animation = 'menu-line-left-close 0.9s ease forwards';
        menuLineRight.style.animation = 'menu-line-right-close 0.9s ease forwards';
        document.body.style.overflowY = "scroll";
        wrapper.classList.remove("open")
        socials.classList.remove("open")
        nav.classList.remove("open")
    }
}

const bgBlue = document.querySelectorAll(".bg-blue")

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

var sectionMargin;

if (vw >= 768) {
    sectionMargin = "-30%";
}
else {
    sectionMargin = "0%";
}

const sectionOptions = {
    rootMargin: sectionMargin
};

var wrapperTransitionOnLoad = 'border-radius 1s, transform 1s'
var wrapperTransitionAfter = 'border-radius 1s, transform 1s, background 1.5s, color 0.7s'

wrapper.style.transition = wrapperTransitionOnLoad;

const sectionObserver = new IntersectionObserver(function (
    entries, sectionObserver
) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            wrapper.classList.add('to-blue')
        } else {
            wrapper.classList.remove('to-blue')
            wrapper.style.transition = wrapperTransitionAfter;
        }
    })
},
    sectionOptions);

bgBlue.forEach(section => {
    sectionObserver.observe(section)
})
// -------------------------------------------------

// -------- Settings menu ------------
localStorage.getItem('colour-scheme') ? localStorage.getItem('colour-scheme') : localStorage.setItem('colour-scheme', 'system');
// localStorage.getItem('left-handed-mode') ? localStorage.getItem('left-handed-mode') : localStorage.setItem('left-handed-mode', 'off');

const settingsMenu = document.getElementById('settings-menu')
const settingsBtn = document.getElementById('settings-btn')
const settingsFooterBtn = document.getElementById('settings-footer-btn')
const settingsBtnSave = document.getElementById('settings-btn-save')

settingsBtn.onclick = function () { openSettingsMenu() };
settingsFooterBtn.onclick = function () { openSettingsMenu() };
settingsBtnSave.onclick = function () { saveSettingsMenu() };

const colourSchemeSystem = document.getElementById('colour-scheme-system');
const colourSchemeLight = document.getElementById('colour-scheme-light');
const colourSchemeDark = document.getElementById('colour-scheme-dark');

if (localStorage.getItem("colour-scheme") === 'system') {
    colourSchemeSystem.checked = 'true'
}
else if (localStorage.getItem("colour-scheme") === 'light') {
    colourSchemeLight.checked = 'true'
}
else if (localStorage.getItem("colour-scheme") === 'dark') {
    colourSchemeDark.checked = 'true'
}

// const leftHandedModeOff = document.getElementById('left-handed-mode-off');
// const leftHandedModeOn = document.getElementById('left-handed-mode-on');

// if (localStorage.getItem("left-handed-mode") === 'off') {
//     leftHandedModeOff.checked = 'true'
// }
// else if (localStorage.getItem("left-handed-mode") === 'on') {
//     leftHandedModeOn.checked = 'true'
// }

function openSettingsMenu() {
    settingsMenu.style.display = "block";
}

function saveSettingsMenu() {
    settingsMenu.style.display = "none";

    localStorage.setItem('colour-scheme', document.querySelector('input[name="colour-scheme"]:checked').value);
    // localStorage.setItem('left-handed-mode', document.querySelector('input[name="left-handed-mode"]:checked').value);

    if (document.querySelector('input[name="colour-scheme"]:checked').value === 'light') {
        body.classList.add('light')
        body.classList.remove("dark")
    }
    else if (document.querySelector('input[name="colour-scheme"]:checked').value === 'dark') {
        body.classList.add('dark')
        body.classList.remove("light")
    }
    else if (document.querySelector('input[name="colour-scheme"]:checked').value === 'system') {
        body.classList.remove("light", "dark")
    }
}

saveSettingsMenu();
// -------------------------------------------------

// -------- ACCORDION ---------------------
var acc = document.getElementsByClassName("accordion__btn");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        for (let j = 0; j < acc.length; j++) {
            acc[j].classList.remove("active");
            if (j != i) {
                acc[j].nextElementSibling.style.maxHeight = null;
                acc[j].nextElementSibling.style.marginBottom = "0";
            }
        }
        this.classList.add("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.marginBottom = '0';
            this.classList.remove("active");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.marginBottom = '1em';
        }
    });
} // --------------------------------------

// -------- Scroll to top ---------------------
scrollTop = document.getElementById("scrollTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTop.style.transition = "opacity 1s";
        scrollTop.style.opacity = "1";
    } else {
        scrollTop.style.opacity = "0";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// --------------------------------------

// -------- Cookies banner ---------------------
const cookieNotice = document.getElementById('cookie-notice')

localStorage.getItem('cookies-accepted') ? localStorage.getItem('cookies-accepted') : localStorage.setItem('cookies-accepted', 'no');

if (localStorage.getItem('cookies-accepted') === "true") {
    cookieNotice.style.display = "none";
} else {
    cookieNotice.style.display = "block";
}

function acceptCookies() {
    localStorage.setItem('cookies-accepted', "true");
    cookieNotice.style.display = "none";
}
// --------------------------------------