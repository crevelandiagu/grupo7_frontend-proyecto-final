FROM node:18-alpine as BUILD_IMAGE
WORKDIR /usr/src/app

ARG VITE_HOLA=holadesdedocker
ARG VITE_API_CANDIDATE=http://34.149.255.183/candidate
ARG VITE_API_COMPANY=http://34.149.255.183/company
ARG VITE_API_COMPANY_EMPLOYEES=http://34.149.255.183/company-employees
ARG VITE_API_PROJECTS=http://34.149.255.183/projects
ARG VITE_API_SEARCH=http://34.149.255.183/search-tool
ARG VITE_API_SELECTION_PROCESS=http://34.149.255.183/interviews

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