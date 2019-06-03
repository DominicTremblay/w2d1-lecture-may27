var tvShowApi = require('./tvshow_api');

var displayDescription = function(showData) {
  var showData = JSON.parse(showData);

  console.log(
    'Show name:',
    showData.name,
    'official site:',
    showData.officialSite
  );
};

tvShowApi.getShowInfo(82, function(data) {
  displayDescription(data);
});
