const express = require("express");

function serverBootstraping() {
    const app = express();
    const server = app.listen(config.server.port)

    server.on("listening", function() {
        console.info(
            `The server for Wellnes Test App is running on port: http://localhost:${config.server.port}`
        );
        loader(app);
    });
}

serverBootstraping();