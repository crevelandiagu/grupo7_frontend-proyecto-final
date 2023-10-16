FROM node:18-alpine as BUILD_IMAGE
WORKDIR /Jobs-App

COPY package.json .

RUN npm install

COPY . . 

RUN  npm run build


FROM node:18-alpine as PROD_IMAGE
WORKDIR /Jobs-App

COPY --from=BUILD_IMAGE /Jobs-App/dist/ /Jobs-App/dist/
EXPOSE 8080


COPY package.json .
COPY vite.config.js .

RUN npm install typescript
EXPOSE 8080
CMD [ "npm", "run", "preview" ]