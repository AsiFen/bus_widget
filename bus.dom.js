//reference the html
var pointsElem = document.querySelector('.points')
var selectElem = document.querySelector('select')
var btn = document.querySelector('.calculate')
var returnSelect = document.querySelector('.return')

var singleTripPrice = document.querySelector('.singleTrip')
var numSingleTrips = document.querySelector('.singleNum')
var returnPrice = document.querySelector('.returnPrice')
var numReturn = document.querySelector('.numReturn')

// instantiate the factory function
var bus = BusFunction()

// global variable
var location_dep = ''



// add event listener for dropdown 

selectElem.addEventListener('change', (event) => {
    const { value } = event.target.options[event.target.selectedIndex]
    location_dep = value
    bus.getStation(value)
})

// add event listener for button
btn.addEventListener('click', () => {
    var radioElem = document.querySelector('input[name="peak"]:checked')

    bus.getPoints(pointsElem.value)
    bus.getStation(location_dep)

    console.log(radioElem);
    console.log(returnSelect);


    if (radioElem) {

        bus.getPeakSelect(radioElem.value)
        if (returnSelect.checked) {
            returnPrice.innerHTML = bus.pricePerTripReturn()
            numReturn.innerHTML = bus.numReturnTrips()
        }

        singleTripPrice.innerHTML = bus.pricePerTripSingle()
        numSingleTrips.innerHTML = bus.numSingleTrips()

    }
})