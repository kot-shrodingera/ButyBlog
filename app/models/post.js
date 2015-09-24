import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr(),
  text: DS.attr(),
  image: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  user: DS.belongsTo("user", {async: true}),
  comments: DS.hasMany("comment", {async: true}),
  tags: DS.hasMany("tag", {async: true}),
  preview: function() {
    if (this.get("text").length > 150) {
      return this.get("text").substring(0,150) + "...";
    } else {
      return this.get("text");
    }
  }.property("text")
});