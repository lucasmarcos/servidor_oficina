FROM alpine:edge AS buildEnv
RUN apk upgrade
RUN apk add nodejs-current npm

FROM buildEnv AS build
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install

FROM build
WORKDIR /usr/src/app
COPY src src
CMD [ "node", "src/server.js" ]
