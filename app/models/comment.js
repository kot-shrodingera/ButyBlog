import DS from "ember-data";

export default DS.Model.extend({
  message: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  user: DS.belongsTo("user", {async: true}),
  post: DS.belongsTo("post", {async: true})
});