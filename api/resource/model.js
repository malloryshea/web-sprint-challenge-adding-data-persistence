// build your `Resource` model here
const db = require('./../../data/dbConfig.js');


async function getResources(){
    let records = await db('resources')
    return records
}

module.exports = {
    getResources
} 