const dotenv = require('dotenv')
const env = dotenv.config().parsed;

const PORT = env.PORT ?? 8080;

module.exports = {
    PORT
}