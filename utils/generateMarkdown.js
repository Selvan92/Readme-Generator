
// generateReadme function populating the README.md
function generateMarkdown(answers) {
  return `
<h1 align="center">${answers.title} 👋</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
🔍 ${answers.description}
## Table of Contents
- [Description](#description)
- [Instruction](#instructions)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Instruction
💾 ${answers.instructions}
## Usage
💻 ${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contribution
👪 ${answers.contributions}
## Tests
✏️ ${answers.tests}
## Questions
✋ ${answers.questions}<br />
<br />
:octocat: Find me on GitHub: [${answers.github}](https://github.com/${answers.github})<br />
<br />
✉️ Email me with any questions: ${answers.emailid}<br /><br />

  `;
}
module.exports = generateMarkdown;