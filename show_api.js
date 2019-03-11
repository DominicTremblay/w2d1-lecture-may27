var request = require('request');

var requestUrl = function(showId, option) {
  var options = {
    cast: '/cast',
    episodes: '/episodes',
    seasons: '/seasons',
  };

  var url = 'http://api.tvmaze.com/shows/' + showId;

  if (option) {
    url += options[option];
  }

  return url;
};

var sendRequest = function(url, callback) {
  request(url, function(error, response, body) {
    if (!error && response && response.statusCode === 200) {
      var data = JSON.parse(body);
      callback(data);
    } else {
      console.log('Error:', error);
    }
  });
};

var getShowInfo = function(showId, callback) {
  var url = requestUrl(showId);

  sendRequest(url, function(showInfo) {
    callback(showInfo);
  });
};

var getCastList = function(showId, callback) {
  var url = requestUrl(showId, 'cast');

  sendRequest(url, function(castInfo) {
    callback(castInfo);
  });
};

module.exports = {
  getShowInfo,
  getCastList,
};
