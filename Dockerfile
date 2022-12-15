FROM alpine:edge AS buildenv
RUN apk upgrade
RUN apk add nodejs-current npm

FROM buildenv AS install
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

FROM install AS build
WORKDIR /usr/src/app
COPY src src
COPY tsconfig.json .
RUN npm run build

FROM build
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist dist
CMD [ "node", "dist/main.js" ]
