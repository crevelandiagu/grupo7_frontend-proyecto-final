FROM node:18-alpine as BUILD_IMAGE
WORKDIR /usr/src/app

ARG VITE_HOLA=holadesdedocker
ARG VITE_API_CANDIDATE=http://localhost:3000/candidate
ARG VITE_API_COMPANY=http://localhost:3001/company
ARG VITE_API_COMPANY_EMPLOYEES=http://localhost:3002/company-employees
ARG VITE_API_PROJECTS=http://localhost:3007/projects
ARG VITE_API_SEARCH_TOOL=http://localhost:3008/search-tool
ARG VITE_API_SELECTION_PROCESS=http://localhost:3010/interviews
ARG VITE_API_PERFORMANCE=http://localhost:3006/performance

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