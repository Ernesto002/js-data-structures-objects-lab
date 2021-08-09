// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
    let newObject = Object.assign({}, driver)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromDriverByKey(obj, key, value,) {
    delete obj[key];
    return obj
}