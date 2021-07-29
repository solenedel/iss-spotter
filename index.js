const { fetchMyIP } = require('./iss.js');
const { fetchCoordsByIP  } = require('./iss.js');


// CALL: fetchMyIp

fetchMyIP((error, ip) => {

  if (error) {
    console.log('it didn\'t work!', error);
    return;
  }

  console.log('it worked! Returned IP: ', ip);

});


// CALL: fetchCoordsByIP

fetchCoordsByIP('0000', (error, data) => {

  if (error) {
    console.log('It didn\'t work! ', error);
    return;
  }
  
  console.log(data);
});


