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


module.exports = { fetchMyIP, fetchCoordsByIP };
