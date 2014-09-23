Template.registerHelper 'Favorites', (collection) ->
	if typeof window['Favorites'] != 'undefined'
		Favorites = []
		favorites = window['Favorites'].find({owner: Meteor.userId()},{sort: {createdAt: -1}}).fetch()
		collection = window[collection]

		_.each favorites, (favorite)->
			Favorites.push(collection.findOne({_id:favorite.doc})) if collection.findOne({_id:favorite.doc})
		Favorites

Template.registerHelper 'favoriteCount', (_id)->
	if typeof window['Favorites'] != 'undefined'
		Favorites.find({doc:_id}).fetch().length