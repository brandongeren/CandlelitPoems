import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	author: DS.attr(),
	submitted: DS.attr(),
	text: DS.attr()
});
