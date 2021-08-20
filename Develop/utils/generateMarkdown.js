// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    if (license === "MIT") {
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    }
    if (license === "GPL 3.0") {
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    }
    if (license === "Apache 2.0") {
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    }
    if (license === "BSD 3") {
      return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    }
    
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    if (license === "MIT") {
      return `[License: ${license}](https://opensource.org/licenses/MIT)`;
    }
    if (license === "GPL 3.0") {
      return `[License: ${license}](https://www.gnu.org/licenses/gpl-3.0)`;
    }
    if (license === "Apache 2.0") {
      return `[License: ${license}](https://opensource.org/licenses/Apache-2.0)`;
    }
    if (license === "BSD 3") {
      return `[License: ${license}](https://opensource.org/licenses/BSD-3-Clause)`;
    }
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This project is licensed with ${license}.
    `;
  }
  return "";
  //creating my markdown with template strings
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.nameProject}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)

  *[Usage](#usage)

  *[License](#license)

  *[Contributing](#contributing)

  *[Tests](#tests)

  *[Questions](#questions)

  ## Installation
  ${data.installations}
  

  ## Usage
  ${data.about}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributor}

  ## Tests
  ${data.test}

  ## Questions
  "If you have any questions about the repo, open an issue or contact me directly at 
  ${data.email}. You can also find more of my work at ${data.github}.
  

  ## License Links
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;

// [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
