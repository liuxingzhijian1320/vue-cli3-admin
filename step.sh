#!/bin/bash

image=docker-cli3-admin-2344
port=2344
container=$image-container

docker stop $container

# docker ps |grep $container |awk '{print $1}'|xargs docker stop

docker rm $container

docker rmi $image -f

docker build -t  $image .

docker run -p $port:80 --name $container  -d $image

