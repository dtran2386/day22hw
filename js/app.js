var cars = require('./cars');

window.addEventListener('load', function () {
    console.log('the page is loaded');
    cars();
    document.getElementById('type-sportsCars').addEventListener('click', send());
    document.getElementById('type-sedans').addEventListener('click', send());
});