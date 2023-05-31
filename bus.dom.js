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
var location = ''



// add event listener for dropdown 

selectElem.addEventListener('change', (event) => {
    const { value } = event.target.options[event.target.selectedIndex]
    location = value
    bus.getStation(value)
})

// add event listener for button
btn.addEventListener('click', () => {
    var radioElem = document.querySelector('input[class="choice"]:checked')

    if (radioElem) {

        bus.getPoints(pointsElem.value)
        bus.getStation(location)
       console.log(bus.getPeakSelect(radioElem.value))
        singleTripPrice.innerHTML = bus.pricePerTripSingle()

        numSingleTrips.innerHTML = bus.numSingleTrips()

        singleTripPrice.innerHTML = bus.pricePerTripReturn()

        numSingleTrips.innerHTML = bus.numReturnTrips()
    }
})