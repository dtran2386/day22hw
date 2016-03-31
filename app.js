var cars = require('./cars');

// cars = array of objects
// category = sports cars or sedans
function filterCars(cars, category) {
    for (var i = 0; i < cars.length; i++) {
        // Show it.
        if (cars[i].type === category) {
            // get the element
            // remove the hidden class from it
            var hit = document.getElementById('car-' + cars[i].id);
            hit.classList.remove('hidden');
            // Hide it.
        } else {
            var miss = document.getElementById('car-' + cars[i].id);
            miss.classList.add('hidden');
        }
    }
}// end filterCars

window.addEventListener('load', function () {
    
    document.getElementById('search-box').addEventListener('keyup', myFunction);
    function myFunction() {
        var x = document.getElementById('search-box');
        x.value = x.value.toUpperCase();
}// end myFunction
    
    document.getElementById('search-box').addEventListener('keyup', function () {
        console.log('you like to type huh');
        filterCars(cars, 'Sedan'); // can't think of how to write this properly
    });// end keyup function
     
var info = _.template(document.getElementById('vehicle-template').textContent);
    for (var i = 0; i < cars.length; i++) {
    var html = info({
        name: cars[i].name,
        type: cars[i].type,
        suggestions: cars[i].suggestions,
    });
    var el = document.createElement('div');
        el.classList.add('car');
        el.setAttribute('id', 'car-' + cars[i].id);
        el.innerHTML = html;
    var parent = document.getElementById('results');
        parent.appendChild(el);
    console.log(html);
    }// end for loop
    
    // make sedans buttons do something.
    var sed = document.getElementById('type-sedans');
    sed.addEventListener('click', function () {
        //
        for (var i = 0; i < cars.length; i++) {
            // show it.
            if (cars[i].type === 'Sedan') {
                // get the element
                // remove the hidden class from it
                var sedanEl = document.getElementById('car-' + cars[i].id);
                sedanEl.classList.remove('hidden');
                // hide it.
            } else {
                var sportyEl = document.getElementById('car-' + cars[i].id);
                sportyEl.classList.add('hidden');
            }
        }// end for loop
        console.log('sedans huh');
    })// end type-sedans func
    
    // make sports cars buttons do something.
    var sport = document.getElementById('type-sportsCars');
    sport.addEventListener('click', function () {
        //
        for (var i = 0; i < cars.length; i++) {
            // show it.
            if (cars[i].type === 'Sports Car') {
                // get the element
                // remove the hidden class from it
                var sportEl = document.getElementById('car-' + cars[i].id);
                sportEl.classList.remove('hidden');
                // hide it.
            } else {
                var sedanyEl = document.getElementById('car-' + cars[i].id);
                sedanyEl.classList.add('hidden');
            }
        }// end for loop
        console.log('sports cars huh');
    })// end type-sedans func
    
    
    // this is if i use the function at the top of page. 
    // Make radio buttons do something.
    var veg = document.getElementById('type-vegetables');
    veg.addEventListener('click', function () {
        filterFoods(foods, 'Vegetable');
    });

    var meat = document.getElementById('type-meats');
    meat.addEventListener('click', function () {
        filterFoods(foods, 'Meat');
    });
    
});// end window.addEventListener
    

// This method below successfully hides EVERY div, which is not what i want
//window.onload = function () {
//    var button = document.getElementById('type-sportsCars');
//        button.addEventListener('click', show);
//    var button1 = document.getElementById('type-sedans');
//        button1.addEventListener('click', show);
//}
//    function show(event) {
//        document.getElementById('results').classList.toggle('hidden');
//}

        // Make radio buttons do something.
    var sport = document.getElementById('type-sportsCars');
    sport.addEventListener('click', function () {
        filterCars(cars, 'Sports Car');
    });

    var sedan = document.getElementById('type-sedans');
    sedan.addEventListener('click', function () {
        filterCars(cars, 'Sedan');
    });
});// end window.addEventListener
