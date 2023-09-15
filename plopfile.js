module.exports = function (plop) {
  plop.setGenerator("feature", {
    description: "Generates feature component",
    prompts: [
      {
        type: "input",
        name: "feature",
        message: "feature name, e.g. NatureBanner",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/features/{{pascalCase feature}}/index.vue",
        templateFile: "plop-templates/features/feature.hbs",
      },
      {
        type: "add",
        path: "src/features/{{pascalCase feature}}/index.stories.js",
        templateFile: "plop-templates/features/feature.stories.hbs",
      },
      {
        type: "add",
        path: "src/features/{{pascalCase feature}}/presentation/index.vue",
        templateFile: "plop-templates/features/presentation/feature.hbs",
      },
    ],
  });
};
