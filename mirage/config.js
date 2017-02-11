export default function() {
  this.namespace = '/api';

  this.get('/poems', function() {
    return {
      data: [{
        type: 'poems',
        id: 1,
        attributes: {
          title: 'Overthoughts',
          author: 'Brandon Geren',
          submitted: '', // automatically stored when poem submitted
          text: 'Am I using it too much?'
        }
      }, {
        type: 'poems',        
        id: 2,
        attributes: {
          title: 'Laundry baskets',
          author: 'Brandon Geren',
          submitted: '', // stored programmatically into the database upon submission
          text: 'Why do laundry baskets have holes in the sides?\nTo let the heat out,\nto prevent mold,\nto let things breathe,\nto get rid of the stink,\nto let all the funny little edges have somewhere to go.\nI think more things than just laundry baskets should have holes in them.'        
        }
      }]
    };
  });



}
