import Controller from '@ember/controller';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
    value : "<h1></h1>",

    actions : {
        myOnChangedAction : function(value) {
            // Do something with the value.
            // At least the text should be updated:
            this.set('text', value)
          },

          savePost : function () {
            console.log(this.get('pasred'))
          }
    }
});
