import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
    	id: 1,
    	title: 'Overthoughts',
    	author: 'Brandon Geren',
    	dateSubmitted: '', // automatically stored when poem submitted
    	body: 'Am I using it too much? ...'
    }, {
    	id: 2,
    	title: 'Laundry baskets',
    	author: 'Brandon Geren',
    	dateSubmitted: '', // stored programmatically into the database upon submission
    	body: 'Why do laundry baskets have holes in the sides? ...'
    }];
  }
});
