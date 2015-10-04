import DS from "ember-data";

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,
  normalizeResponse: function(store, typeClass, hash){
    this._super();
    console.log(123);
  }
});