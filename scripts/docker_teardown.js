const
    shelljs = require("shelljs"),
    config = require("../config.js")
;

shelljs.exec(`
    docker image rm ${config.docker.image.name}:${config.docker.image.version}
    
    echo "${config.docker.image.name}:${config.docker.image.version} : deleted "
`)