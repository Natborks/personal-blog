import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:8000',
    namespace: 'api'
});
