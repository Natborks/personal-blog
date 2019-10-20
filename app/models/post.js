import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr('string'),
    slug: DS.attr('string'),
    body: DS.attr('string'),
    created_at: DS.attr('date'),
});
