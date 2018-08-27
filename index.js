// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
    return drivers.filter(function(e){
        return e.revenue >= amount
    })
}

function driverNamesWithRevenueOver(drivers, amount) {
    return driversWithRevenueOver(drivers, amount).map(function(e){
        return e.name
    })
}

function exactMatch(drivers, obj) {
    return drivers.filter(function(e){
        return e.name === obj.name || e.revenue === obj.revenue
    })
}

function exactMatchToList(drivers, obj){
    return exactMatch(drivers, obj).map(function(e){
        return e.name
    })
}