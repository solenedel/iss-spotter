const { fetchMyIP, fetchCoordsByIP  } = require('./iss.js');


// CALL: fetchMyIp

fetchMyIP((error, ip) => {

  if (error) {
    console.log('it didn\'t work!', error);
    return;
  }

  console.log('it worked! Returned IP: ', ip);

});


// CALL: fetchCoordsByIP

fetchCoordsByIP('--', (error, data) => {

  if (error) console.log(error);

  console.log(data);
});


