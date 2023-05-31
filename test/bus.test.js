// test for peak and off peak
//test for when return trip selected
// test for points are enough 
//test for when station selected
//test for when points not enough, station not selected and both

describe('Bus Widget Function', () => {
    describe('Function that helps calculate how many trips one can make for an amount of points entered and selected destination and travel times (peak vs off-peak)', () => {

        it('should get points entered', () => {
            var bus = BusFunction()
            assert.equal(500, bus.getPoints(500))

        })
        it('should get station selected', () => {
            var bus = BusFunction()
            assert.equal('Khayelitsha', bus.getStation('Khayelitsha'))
            assert.equal('Dunoon', bus.getStation('Dunoon'))

        })

        describe('Off peak prices', () => {

            it('should return single trip price for location', () => {
                var bus = BusFunction()
                bus.getPoints('150')
                bus.getStation('Khayelitsha')
                assert.equal('40', bus.pricePerTripSingle())
            })

            it('should return how many single trips they can make with R500 rand worth off points', () => {
                var bus = BusFunction()
                bus.getPoints('500')
                bus.getStation('Dunoon')
                assert.equal('20', bus.numSingleTrips())
            })

            it('should return the return trip price for locations', () => {
                var bus = BusFunction()
                bus.getPoints('300')
                bus.getStation('Mitchells Plain')
                assert.equal('60', bus.pricePerTripReturn())
            })

            it('should return how many return trips they can make with 300 rand worth off points', () => {
                var bus = BusFunction()
                bus.getPoints('300')
                bus.getStation('Mitchells Plain')
                assert.equal('5', bus.numReturnTrips())
            })

        });

        describe('Peak hour increase applied', () => {


            it('should return single trip price for location during peak', () => {
                var bus = BusFunction()
                bus.getPoints('100')
                bus.getStation('Khayelitsha')
                bus.getPeakSelect('peak')
                assert.equal('50', bus.pricePerTripSingle())
            })

            it('should return how many single trips they can make with R500 rand worth off points with peak increase', () => {
                var bus = BusFunction()
                bus.getPoints('500')
                bus.getStation('Dunoon')
                bus.getPeakSelect('peak')
                assert.equal('16', bus.numSingleTrips())
            })

            it('should return the return trip price for location during peak ', () => {
                var bus = BusFunction()
                bus.getPoints('150')
                bus.getStation('Mitchells Plain')
                bus.getPeakSelect('peak')
                assert.equal('74', bus.pricePerTripReturn())
            })

            it('should return how many return trips they can make with 450 rand worth off points with peak increase', () => {
                var bus = BusFunction()
                bus.getPoints('440')
                bus.getStation('Khayelitsha')
                bus.getPeakSelect('peak')
                assert.equal('4', bus.numReturnTrips())
            })
    
        });
    });
});