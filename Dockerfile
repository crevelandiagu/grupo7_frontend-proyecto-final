FROM node:18-alpine as BUILD_IMAGE
WORKDIR /jobs_app

ENV VITE_API_CANDIDATE default
ENV VITE_API_CANDIDATE default
ENV VITE_API_COMPANY default
ENV VITE_API_PROJECTS default

COPY package.json .

RUN npm install

COPY . . 

RUN  npm run build

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