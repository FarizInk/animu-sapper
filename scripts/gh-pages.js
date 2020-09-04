const ghpages = require('gh-pages');
const dotenv = require('dotenv')

const conf = dotenv.config().parsed

ghpages.publish(
    '__sapper__/export/animu',
    {
        branch: conf.GITHUB_BRANCH,
        repo: `https://github.com/${conf.GITHUB_USERNAME}/${conf.GITHUB_REPO}.git`,
        user: {
            name: conf.GITHUB_NAME,
            email: conf.GITHUB_EMAIL
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
