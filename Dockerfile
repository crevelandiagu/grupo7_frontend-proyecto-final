FROM node:18-alpine as BUILD_IMAGE
WORKDIR /usr/src/app

ARG VITE_HOLA=hola
ARG VITE_API_CANDIDATE=http://servicio-app-candidate/candidate
ARG VITE_API_COMPANY=http://servicio-app-company/company
ARG VITE_API_PROJECTS=http://servicio-app-projects/projects

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "preview" ]

# FROM node:18-alpine as PROD_IMAGE
# WORKDIR /Jobs-App

# COPY --from=BUILD_IMAGE /Jobs-App/dist/ /Jobs-App/dist/
# EXPOSE 8080


# COPY package.json .
# COPY vite.config.js .

# # RUN npm install typescript
# RUN npm install vite
# EXPOSE 8080
# CMD [ "npm", "run", "preview" ]