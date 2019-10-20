import Controller from '@ember/controller';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
    value : "<h1></h1>",

    post : Ember.A(),
    actions : {
        myOnChangedAction : function(value) {
            // Do something with the value.
            // At least the text should be updated:
            this.set('text', value)
          },

          savePost : function () {
            let self = this;

                let post = this.store.createRecord('post', {
                    title: 'sdfsdf',//this.get('title'),
                    slug: this.get('slug'),
                    body: this.get('value'),
                    created_at: new Date()
                })

                console.log(this.get('slug'))
                post.save();

                this.setProperties({
                    title: '',
                    slug: ''
                })
                
                alert('post created');

               // self.transitionToRoute('posts')

          }
    }
});
