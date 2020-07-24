var devPass = localStorage.getItem('dev') ? localStorage.getItem('dev') : 'no';

if (localStorage.getItem('dev') == 'yes') {
    document.getElementById('password').style.display = "none"
}

function passwordSubmit() {
    if (document.getElementById('password-text').value == "dev-only" && !localStorage.getItem('dev')) {
        document.getElementById('password').style.display = "none"
        localStorage.setItem('dev', 'yes');
    }
}