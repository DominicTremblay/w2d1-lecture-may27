var tvMazeApi = require('./show_api');

tvMazeApi.getShowInfo(3022, function(showInfo) {
  console.log(showInfo);
});

tvMazeApi.getCastList(3022, function(castInfo) {
  console.log(castInfo);
});
