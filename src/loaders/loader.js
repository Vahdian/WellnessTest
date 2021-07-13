const expressLoader = require("./expressLoader")

async function loader(app){
    expressLoader(app);
    console.info("Express is Ready!")
}

module.exports = loader;