FROM node:16-alpine

USER root

WORKDIR /usr/api-filmes/app

COPY . .

EXPOSE 3000