const path = require("path");


module.exports = {
    entry: path.resolve("./app.js"),
    target: "web",
    mode: "development",
    output: {
        filename: "app.js",
        path: path.resolve("./dist/")
    }
}