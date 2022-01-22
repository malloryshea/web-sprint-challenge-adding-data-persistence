// build your `Resource` model here
const db = require('./../../data/dbConfig.js');


async function getResources(){
    let records = await db('resources')
    return records
}

async function createResource(resource){
    let [ id ] = await db('resources').insert(resource)
    const newResource = await db('resources')
    .where('resource_id', id)

    return newResource[0]
}

module.exports = {
    getResources,
    createResource
}