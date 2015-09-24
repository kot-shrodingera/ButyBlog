import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  posts: DS.hasMany("post", {async: true})
});