import DS from "ember-data";

export default DS.Model.extend({
  email: DS.attr(),
  name: DS.attr(),
  surname: DS.attr(),
  created_at: DS.attr(),
  avatar: DS.attr(),
  posts: DS.hasMany("post", {async: true})
});