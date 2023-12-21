function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  // Accessing elements of selectingDrivers array
  const firstFunction = selectingDrivers[0];
  const secondFunction = selectingDrivers[1];
  function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  } 
  function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }
  
  // Function that doubles fares using createFareMultiplier
  function fareDoubler(fare) {
    const fareMultiplier = createFareMultiplier(2); // Creating a multiplier of 2
    return fareMultiplier(fare);
  }
  function createFareMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }
  
  // Function that triples fares using createFareMultiplier
  function fareTripler(fare) {
    const fareMultiplier = createFareMultiplier(3); // Creating a multiplier of 3 for tripling
    return fareMultiplier(fare);
  }function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }// Code your solution in this file!
