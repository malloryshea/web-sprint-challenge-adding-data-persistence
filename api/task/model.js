const db = require("./../../data/dbConfig.js");

async function getTasks() {
  let records = await db("tasks as t")
    .select("t.*", "p.project_name", "p.project_description")
    .join("projects as p", "t.project_id", "p.project_id");

  records.forEach((rec) => {
    if (rec.task_completed === 0) {
      rec.task_completed = false;
    } else {
      rec.task_completed = true;
    }
  });

  return records;
  
}

async function createTask(task) {
  const [id] = await db("tasks").insert(task);
  const newTask = await db("tasks").where("task_id", id);

  newTask[0].task_completed = newTask[0].task_completed === 0 ? false : true;

  return newTask[0];
}

module.exports = {
  getTasks,
  createTask,
};