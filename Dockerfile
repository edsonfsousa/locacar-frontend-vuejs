# build stage
FROM node:14-alpine AS build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . ./
RUN yarn run build

# production stage
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /usr/src/app/dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
