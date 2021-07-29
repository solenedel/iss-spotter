const { fetchMyIP } = require('./iss.js');
const { fetchCoordsByIP  } = require('./iss.js');
const { fetchISSFlyOverTimes  } = require('./iss.js');


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
  
  console.log('It worked: ', data);
});


