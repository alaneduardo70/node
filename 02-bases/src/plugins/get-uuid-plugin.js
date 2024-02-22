const { v4: uuidv4 } = require('uuid');

module.exports = {
    getUUID: () => uuidv4(),
}