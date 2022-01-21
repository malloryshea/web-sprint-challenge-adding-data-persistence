// build your `Project` model here
const db = require('./../../data/dbConfig.js');


async function getProjects(){
    let records = await db('projects')
    const convertedRecords = records.map(rec => {
        if(rec.project_completed === 0){
            return {...rec, project_completed: false}
        } else {
            return {...rec, project_completed: true}
        }
    })

    return convertedRecords
}

module.exports = {
    getProjects
} 