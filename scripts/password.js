var devPass = localStorage.getItem('has_access') ? localStorage.getItem('has_access') : 'no';

if (localStorage.getItem('has_access') == 'yes') {
    document.getElementById('password').style.display = "none"
    document.body.style.overflow = 'auto'
}

function passwordSubmit() {
    if (document.getElementById('password-text').value == "dev-only" && !localStorage.getItem('has_access')) {
        document.getElementById('password').style.display = "none"
        document.body.style.overflow = 'auto'
        localStorage.setItem('has_access', 'yes');
    }
}