/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.onCreateWebpackConfig = ({ stage, rules, loaders, actions, plugins  }) => {
  switch (stage) {
    // Note:  Used for development ONLY - Remove for production!
    case 'develop':
      actions.setWebpackConfig({
        devtool: `cheap-module-source-map`,
      })
      break;
  }
};