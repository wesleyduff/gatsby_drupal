const
    shelljs = require("shelljs"),
    config = require("../config.js")
;

shelljs.exec(`
    echo " running docker image for local testing before k8s deploy "
    docker run -p 80:8080 -d --name ${config.docker.image.name} ${config.docker.image.name}:${config.docker.image.version}
`)