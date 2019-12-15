/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.onCreateWebpackConfig = ({ stage, rules, loaders, actions, plugins  }) => {
  switch (stage) {
    case 'build-html':
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /wowjs/,
              use: [loaders.null()]
            },
            {
              test: /bootstrap/,
              use: [loaders.null()]
            },
            {
              test: /owl.carousel/,
              use: [loaders.null()]
            }
          ]
        }
      });
      break;
    // Note:  Used for development ONLY - Remove for production!
    case 'develop':
      actions.setWebpackConfig({
        devtool: `cheap-module-source-map`,
      })
      break;
  }
  
  actions.setWebpackConfig({
    plugins: 
      [
        plugins.define({
          $: 'jQuery',
        }),
        plugins.define({
          jQuery: 'jQuery',
        }),
        plugins.define({
          'window.jQuery': 'jQuery',
        })
      ]
  });
};