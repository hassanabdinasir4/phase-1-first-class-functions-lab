// Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers= function (twoDrivers){
    let drivers = [...twoDrivers.slice (0 , 2)]
     return drivers;
}
const returnLastTwoDrivers=function(twoDrivers){
    let drivers =[...twoDrivers.slice(twoDrivers.length -2)]
    return drivers;
}



    
const  selectingDrivers=[returnFirstTwoDrivers , returnLastTwoDrivers]
function createFareMultiplier (num){
    return function (fare=5){
    return fare * num }
}


const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}
//the (2) because the fare is double

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}


function selectDifferentDrivers(twoDrivers, fn) {
    return fn (twoDrivers);
}


 