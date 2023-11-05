FROM node:12.18.2 as build-stage

RUN mkdir /usr/app
COPY . /usr/app

WORKDIR /usr/app

RUN npm install

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -f ./*

COPY --from=build-stage /usr/app/build .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
