exports.seed = function(knex, Promise) {
    return knex('resources').insert([   
      { task_description: "learn how to use a callback", task_notes: "by tomorrow", task_completed: false , project_id: 1},
      { task_description: "learn what an HOF means", task_completed: true, project_id: 1},
      { task_description: "Implement Redux in a project", task_notes: "Redux is for state management", task_completed: false, project_id: 2},
    ]);
  }; 