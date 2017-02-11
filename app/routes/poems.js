import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
    	id: 1,
    	title: 'Overthoughts',
    	author: 'Brandon Geren',
    	dateSubmitted: '', // automatically stored when poem submitted
    	text: 'Am I using it too much? ...'
    }, {
    	id: 2,
    	title: 'Laundry baskets',
    	author: 'Brandon Geren',
    	dateSubmitted: '', // stored programmatically into the database upon submission
    	text: 'Why do laundry baskets have holes in the sides? ...'
    }];
  }
});
