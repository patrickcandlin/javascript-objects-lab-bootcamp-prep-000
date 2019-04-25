function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object,{[key]: value});
} 
var recipes = {meal: "ingredients"};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({}, object);
  var newObj = Object.assign({}, obj);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete objecg[key];
  return object;
}