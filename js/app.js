var cars = require('./cars');
var _ = require('underscore');

window.addEventListener('load', function () {
    console.log('the page is loaded');
    
    var info = _.template(document.getElementById('vehicle-template').textContent);
    for (var i = 0; i < cars.length; i++) {
    var html = info({
        name: cars[i].name,
        type: cars[i].type,
        suggestions: cars[i].suggestions,
    });
    var el = document.createElement('div');
    el.innerHTML = html;
    var parent = document.getElementById('results');
    parent.appendChild(el);
    console.log(html);
    }// end for loop
});// end window.addEventListener
    
window.onload = function () {
    var button = document.getElementById('type-sportsCars');
    button.addEventListener('click', show);
    var button1 = document.getElementById('type-sedans');
    button1.addEventListener('click', show);
}
function show(event) {
    document.getElementById('results').classList.toggle('hidden');
}