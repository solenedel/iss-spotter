
const { nextISSTimesForMyLocation } = require('./iss.js');

const printPassTimes = (passTimes) => {

  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
   console.log(`Next pass at ${dateTime} for ${duration} seconds!`) 
  }
};

module.exports = { printPassTimes };


nextISSTimesForMyLocation( (error, passTimes) => {

  if (error) {
    console.log('it didn\'t work!', error);
    return;
  }

  // success
  printPassTimes(passTimes);
});



/*
// CALL: fetchMyIp

fetchMyIP((error, ip) => {

  if (error) {
    console.log('it didn\'t work!', error);
    return;
  }

  console.log('it worked! Returned IP: ', ip);

});


// CALL: fetchCoordsByIP

fetchCoordsByIP('174.1.54.51', (error, data) => {

  if (error) {
    console.log('It didn\'t work! ', error);
    return;
  }
  
  console.log('It worked! Returned coordinates: ', data);
});

// CALL: fetchISSFlyOverTimes

fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-122.7384' }, (error, data) => {

  if (error) {
    console.log('It didn\'t work! ', error);
    return;
  }
  
  console.log('It worked! Flyover times: ', data);
}); */




