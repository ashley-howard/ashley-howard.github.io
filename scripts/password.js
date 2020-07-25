var devPass = localStorage.getItem('dev') ? localStorage.getItem('dev') : 'no';

if (localStorage.getItem('dev') == 'yes') {
    document.getElementById('password').style.display = "none"
    document.body.style.overflow = 'auto'
}

function passwordSubmit() {
    if (document.getElementById('password-text').value == "dev-only" && !localStorage.getItem('dev')) {
        document.getElementById('password').style.display = "none"
        document.body.style.overflow = 'auto'
        localStorage.setItem('dev', 'yes');
    }
}