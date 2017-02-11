import DS from 'ember-data';

export default DS.Model.extend({
	id: DS.attr(),
	title: DS.attr(),
	author: DS.attr(),
	dateSubmitted: DS.attr(),
	text: DS.attr()
});
