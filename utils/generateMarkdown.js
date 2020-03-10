function generateMarkdown(data) {
  return `
# ${data.title}
${data.description}
### Table of contents
${data.tableOfContents}
### Installation
${data.install}
### Usage
${data.usage}
### License
${data.license}
`;
}

module.exports = generateMarkdown;


