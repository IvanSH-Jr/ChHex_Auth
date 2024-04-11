FROM node:20.11.1
ARG APP_DIR=/usr/src/app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000 8080
