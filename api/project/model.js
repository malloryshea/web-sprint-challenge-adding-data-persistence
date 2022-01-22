// build your `Project` model here
const db = require("./../../data/dbConfig.js");

async function getProjects() {
  let records = await db("projects");

  records.forEach((rec) => {
    if (rec.project_completed === 0) {
      rec.project_completed = false;
    } else {
      rec.project_completed = true;
    }
  });

  return records;
}

async function createProject(project) {
  let [id] = await db("projects").insert(project);
  const newProject = await db("projects").where("project_id", id);

  newProject[0].project_completed =
    newProject[0].project_completed === 0 ? false : true;

  return newProject[0];
}

module.exports = {
  getProjects,
  createProject,
};