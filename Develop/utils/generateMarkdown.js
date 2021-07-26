// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ##TITLE
  return
  ##${data.title}

  ##**DESCRIPTION**
  ###${data.description}

  ##**INSTALLATIONS REQUIRED**
  ###${data.installation}

  ##**INSTRUCTIONS**
  ###${data.instructions}

  ##**LICENSES (optional)**
  ###${data.license}

  ##**GitHub Link to Project**
  ###[GitHub Link](http://github.com/${data.githublink})

  ##**Contact Information
  ${data.email}

`;
}

module.exports = generateMarkdown;
