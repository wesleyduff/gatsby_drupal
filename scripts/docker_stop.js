const
    shelljs = require("shelljs"),
    config = require("../config.js")
;

shelljs.exec(`
    echo "stopping docker container -- may not work .. else read readme in this folder"
    docker container stop --name ${config.docker.image.name} ${config.docker.image.name}:${config.docker.image.version}
`)