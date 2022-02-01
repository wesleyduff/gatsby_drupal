const
    shelljs = require('shelljs'),
    config = require('../config.js')
;

shelljs.exec(`

    
        docker build --build-arg NODE_ENV=local --file ${config.docker.docker_file_path} -t ${config.docker.image.name}:${config.docker.image.version} .
        
        echo "
        ============= BUILDING IMAGE :  ${config.docker.image.name}:${config.docker.image.version}====================IMAGE NAME===============
        /******
        NOTE: 
        The docker image will be built on your local system under minikube docker-env
        
        ****/
        "
        
        
`)

