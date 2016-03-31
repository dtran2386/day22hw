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

        // Make radio buttons do something.
    var sport = document.getElementById('type-sportsCars');
    sport.addEventListener('click', function () {
        filterCars(cars, 'Sports Car');
    });

    var sedan = document.getElementById('type-sedans');
    sedan.addEventListener('click', function () {
        filterCars(cars, 'Sedan');
    });
    
$(function() {
    $( ".car" ).draggable({
        cursor: "move", cursorAt: { top: 56, left: 56 },
        appendTo: "body",
        helper: "clone"
    });
    $( "#cart ol" ).droppable({
        drop: function( event, ui ) {
            $( this ).find( ".placeholder" ).remove();
            $( "<li></li>" ).text( ui.draggable.text() ).appendTo( this );
    }
    });
    $( "#cart2" ).droppable({
        drop: function( event, ui ) {
            $( this ).html( "Removed!" );
      }
    });
}); //end $function
});// end window.addEventListener
