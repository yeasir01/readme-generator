function generateMarkdown(data) {
  return `
# ${data.title}
${data.description}
## Table of contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Tests](#tests)
## Installation
${data.install}
## Usage
${data.usage}
## License
This project is licensed under [${data.license}](https://choosealicense.com/licenses/).
## Contributors
[![forthebadge](https://forthebadge.com/images/badges/built-by-hipsters.svg)](https://forthebadge.com)
***

_This file was generated using a [Readme Generator](https://github.com/yeasir01/readme-generator) developed by Yeasir H._
`;
}

module.exports = generateMarkdown;


