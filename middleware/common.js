/**
 * Load a dependency from an object repository
 * @param objectRepository object repository
 * @param propertyName dependency name
 * @returns {*}
 */
function requireOption(objectRepository, propertyName) {
    if (objectRepository && objectRepository[propertyName]) {  //checking for nulls
        return objectRepository[propertyName];
    }
    throw new TypeError(propertyName + ' required');
}

module.exports.requireOption = requireOption;