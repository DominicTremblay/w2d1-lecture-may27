var request = require('request');

// Creting the full url with any option
var getUrl = function(showId, option) {
  var url = 'http://api.tvmaze.com/shows/';

  // Adding the showId to the url
  url += showId;

  const options = {
    cast: '/cast',
    episodes: '/episodes',
    seasons: '/seasons',
  };

  // Add any option to the url

  if (option) {
    url += options[option];
  }

  return url;
};

// Create the send request using the request package with a callback
// To make it more reusable

var sendRequest = function(url, callback) {
  request(url, function(error, response, body) {
    if (!error && response && response.statusCode === 200) {
      callback(body);
    } else {
      console.log('Error:', error);
    }
  });
};

var getShowInfo = function(showId, callback) {
  sendRequest(getUrl(showId), callback);
};

var getCastInfo = function(showId, callback) {
  sendRequest(getUrl(showId, 'cast'), callback);
};

var getEpisodesInfo = function(showId, callback) {
  sendRequest(getUrl(showId, 'episodes'), callback);
};

var getSeasonsInfo = function(showId, callback) {
  sendRequest(getUrl(showId, 'seasons'), callback);
};

module.exports = {
  getShowInfo,
  getCastInfo,
  getEpisodesInfo,
  getSeasonsInfo,
};
