const getAge = require('get-age');

const getAgePlugin = (date) => {
    if ( ! date ) return null;
    return getAge(date);
}

module.exports = { getAge: getAgePlugin }