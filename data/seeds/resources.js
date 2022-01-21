exports.seed = function(knex, Promise) {
    return knex('resources').insert([   
      { resource_name: "Callbacks", resource_description: "all about callbacks"},
      { resource_name: "Higher Order Functions", resource_description: "all about HOFs"},
      { resource_name: "React", resource_description: "Learning to code in React"},
      { resource_name: "JSX", resource_description: "learn JSX syntax"},
      { resource_name: "Reducers", resource_description: "learn about reducer functions"},
    ]);
  };