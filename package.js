Package.describe({
  summary: "Adds favoriting/liking functionality",
  version: "0.0.1",
  git: "http://github.com/yogiben/meteor-favorites.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.addFiles('yogiben:favorites.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yogiben:favorites');
  api.addFiles('yogiben:favorites-tests.js');
});
