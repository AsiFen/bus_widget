function BusFunction() {
    var peak = 0
    var chosen_station = ''
    var get_points = 0
    var pricePerTrip = 0

    function getPoints(travel_points) {
        get_points = travel_points
        return get_points
    }

    function getStation(choose_station) {
        chosen_station = choose_station
        return chosen_station
    }

    function getPeakSelect(peak_choice) {
        if (peak_choice == 'peak') {
            peak = true
        }
        else {
            peak = false
        }
    }

    function numSingleTrips() {
        if (chosen_station == 'Khayelitsha') {
            return Math.floor(get_points / pricePerTripSingle())
        }

        if (chosen_station == 'Mitchells Plain') {
            return Math.floor(get_points / pricePerTripSingle())
        }

        if (chosen_station == 'Dunoon') {
            return Math.floor(get_points / pricePerTripSingle())
        }
    }


    function pricePerTripSingle() {

        if (chosen_station == 'Khayelitsha') {
            pricePerTrip = 40
        }
        if (chosen_station == 'Mitchells Plain') {
            pricePerTrip = 30
        }
        if (chosen_station == 'Dunoon') {
            pricePerTrip = 25
        }
        if (peak == true) {
            pricePerTrip *= 1.25
        }
        return Math.floor(pricePerTrip)

    }

    function numReturnTrips() {
        return Math.floor(numSingleTrips() / 2)
    }

    function pricePerTripReturn() {
        return Math.floor(pricePerTripSingle() * 2)
    }


    return {
        getPoints,
        getStation,
        getPeakSelect,
        numSingleTrips,
        numReturnTrips,
        pricePerTripSingle,
        pricePerTripReturn,
    }
}