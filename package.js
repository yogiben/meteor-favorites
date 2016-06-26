Package.describe({
  summary: "Adds favoriting/liking functionality to any collection",
  version: "0.0.4",
  git: "http://github.com/yogiben/meteor-favorites.git"
});

both = ['client','server']

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2.1');

  api.use(
  	[
  		'coffeescript',
  		'less',
      'templating',
	    'aldeed:autoform@5.8.1'

  	],
  	both);

  api.addFiles(
  	[
  		'lib/both/schemas.coffee',
  		'lib/both/collections.coffee'
  	],
  	both)

   api.addFiles(
  	[
  		'lib/client/templates.html',
      'lib/client/templates.coffee',
  		'lib/client/helpers.coffee'
  	],
  	'client')

   api.addFiles(
  	[
  		'lib/server/allow.coffee',
  		'lib/server/publish.coffee'
  	],
  	'server')



});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yogiben:favorites');
  api.addFiles('yogiben:favorites-tests.js');
});
