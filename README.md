Favouriting made easy
================
This is my fork of yogibens:meteor-favorites. Updated version numbers and changed the button template to simply the "Star" icon.

`meteor add patrickbolle:meteor-favorites`

[See a demo](http://yogiben-favorites.meteor.com/dashboard)

### Usage ###
1) Install the package

2) Set up the subscriptions on the routes you want to use

`Meteor.subscribe('favorites')`

e.g.
```
Router.route('/viewlistings',{
  waitOn: function () {
    Meteor.subscribe('favorites');
  },
  action: function () {
    this.render('viewlistings');
  }
});
```
3) Add the `favoriteButton` template to your templates, passing the `_id` of the doc as the parameter
```
{{> favoriteButton _id=_id}}
```
e.g.
```
<template name="posts">
	{{#each Posts}}
		<div class="panel panel-default">
			  <div class="panel-heading">
					<h3 class="panel-title">{{title}}</h3>
			  </div>
			  <div class="panel-body">
					{{content}}
			  </div>
			  <div class="panel-footer">
			  	{{> favoriteButton _id=_id}}
			  </div>
		</div>
	{{/each}}
</template>
```
### Helpers ###

#### Favorited docs from a colletion####
`{{Favorites collection}}`

You can easily list a user's favorites with the global helper `{{Favorites 'Posts'}}` for the `Posts` collection, for example.

You can use it inside of a loop like this:

```
<template name="favorites">
	{{#if Favorites 'Posts'}}
	<div class="panel panel-default">
		<div class="panel-heading">
				<h3 class="panel-title">Favorites</h3>
		</div>
		<div class="panel-body">
			<ul>
			{{#each Favorites 'Posts'}}
				<li>
					<a>{{title}}</a>
				</li>
			{{/each}}
			</ul>
		</div>
	</div>
	{{/if}}
</template>
```

#### Favorite count####
`{{favoriteCount _id}}`

This will return the number of times the doc has been favorited.

#### Order by favorites ####
`{{orderByFavorites docs}}` where `docs` is an array of mongo docs.

This will return the docs ordered by the number of times that they have been favorited.

```
<template name="posts">
	{{#each orderByFavorites Posts}}
		<div class="panel panel-default">
			  <div class="panel-heading">
					<h3 class="panel-title">{{title}}</h3>
			  </div>
			  <div class="panel-body">
					{{content}}
			  </div>
			  <div class="panel-footer">
			  	{{> favoriteButton _id=_id}}
			  </div>
		</div>
	{{/each}}
</template>
```
