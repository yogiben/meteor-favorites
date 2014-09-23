Template.registerHelper 'Favorites', (collection) ->
	if typeof window['Favorites'] != 'undefined'

		Favorites = []
		favorites = window['Favorites'].find({owner: Meteor.userId()},{sort: {createdAt: -1}}).fetch()
		collection = window[collection]

		_.each favorites, (favorite)->
			console.log favorite
			Favorites.push(collection.findOne({_id:favorite.doc})) if collection.findOne({_id:favorite.doc})
		Favorites