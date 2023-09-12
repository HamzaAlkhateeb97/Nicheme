/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const fs = require("fs");
const path = require("path");

exports.createPages = async ({ actions,graphql }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const result = await graphql(`
    query {
      en:allWpPost {
        nodes {
          title
          english{
            mainTitle: enMainTitle
            field1: enField1
            field2: enField2
            field3: enField3
            field4: enField4
            field5: enField5
            field6: enField6
            field7: enField7
            field8: enField8
            field9: enField9
            field10: enField10
            field11: enField11
            field12: enField12
            field13: enField13
            field14: enField14
            field15: enField15
            field16: enField16
          }
        }
      }
      ar:allWpPost {
        nodes {
          title
          arabic{
            mainTitle: arMainTitle
            field1: arField1
            field2: arField2
            field3: arField3
            field4: arField4
            field5: arField5
            field6: arField6
            field7: arField7
            field8: arField8
            field9: arField9
            field10: arField10
            field11: arField11
            field12: arField12
            field13: arField13
            field14: arField14
            field15: arField15
            field16: arField16
          }
        }
      }
    }
  `)

  if (result.data && result.data.en && result.data.ar) {
  const EnPost =result.data.en.nodes
  const EnTransformedData = {};
  EnPost.forEach((node) => {
    EnTransformedData[node.title] = node.english;
  });
  const jsonDataEn = JSON.stringify(EnTransformedData, null, 2);
  const filePathEn = path.join(__dirname, "locales/en/translation.json");
  // Check if the old data is the same as the new data
  const oldDataEn = fs.existsSync(filePathEn) ? fs.readFileSync(filePathEn, 'utf8') : '';
  if (oldDataEn !== jsonDataEn) {
    fs.writeFileSync(filePathEn, jsonDataEn);
  }


  const ArPost =result.data.ar.nodes
  const ArTransformedData = {};
  ArPost.forEach((node) => {
    ArTransformedData[node.title] = node.arabic;
  });
  const jsonDataAr = JSON.stringify(ArTransformedData, null, 2);
  const filePathAr = path.join(__dirname, "locales/ar/translation.json");
  // Check if the old data is the same as the new data
  const oldDataAr = fs.existsSync(filePathAr) ? fs.readFileSync(filePathAr, 'utf8') : '';
  if (oldDataAr !== jsonDataAr) {
    fs.writeFileSync(filePathAr, jsonDataAr);
  }
}

}
