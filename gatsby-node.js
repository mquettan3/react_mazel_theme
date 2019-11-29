/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


// Note:  Used for development ONLY - Remove for production!
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  }

exports.onCreateWebpackConfig = ({ stage, rules, loaders, actions }) => {
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
            }
          ]
        }
      });
      break;
    case 'develop':
      actions.setWebpackConfig({
        devtool: `cheap-module-source-map`,
      })
      break;
  }
};