exports.seed = function(knex, Promise) {
    return knex('projects').insert([   
      { project_name: "JavaScript", project_description: "HOFs and Callbacks", project_completed: true},
      { project_name: "React/Redux", project_completed: false},
      { project_name: "Website", project_description: "build a website", project_completed: false}
    ]);
  };