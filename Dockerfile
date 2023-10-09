# pull official base image
FROM node:17-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./

RUN npm install


# add app
COPY . ./

# start app
CMD ["npm", "start"]

#FROM nginx:1.19.0
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY --from=builder /app/build .
#ENTRYPOINT ["nginx", "-g", "daemon off;"]