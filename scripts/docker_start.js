const
    shelljs = require("shelljs"),
    config = require("../config.js")
;

shelljs.exec(`
    echo " starting up gatsby"
    cd server && npm run develop
`)