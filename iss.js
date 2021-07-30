const request = require('request');

const fetchMyIP = function(callback) {

  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

//module.exports = { fetchMyIP };




// FUNCTION: fetch coordinates by ip

const fetchCoordsByIP = function(ip, callback) {
  
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {

    // error: request failed
    if (error) return callback(error, null);

    // non-200: assume server error
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching coordinates: ${body}`), null);
      return;
    }
    
    const { latitude, longitude } = JSON.parse(body);
    callback(null, { latitude, longitude });
  });
};

// FUNCTION: fetchISSFlyOverTimes

const fetchISSFlyOverTimes = function(coords, callback) {

  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {

    // error: request failed
    if (error) return callback(error, null);

    // non-200: assume server error
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching data: ${body}`), null);
      return;
    }

    const passes = JSON.parse(body).response;
    callback(null, passes);
  });

};

// FUNCTION: nextISSTimesForMyLocation

const nextISSTimesForMyLocation = function(callback) {
  
  // 1. call fetchMyIP
  fetchMyIP((error, ip) => {

    if (error) {
      return callback(error, null);
    }

    // 2. 

    fetchCoordsByIP('174.1.54.51', (error, location) => {

      if (error) {
        return callback(error, null);
      }

      //3. 

      fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-122.7384' }, (error, nextPasses) => {

        if (error) {
          return callback(error, null);
        }

        callback(null, nextPasses);
      });
    });
  });
};



module.exports = { nextISSTimesForMyLocation };
