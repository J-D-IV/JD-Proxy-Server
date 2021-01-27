FROM node:8.10-alpine

WORKDIR /public

COPY . /public

RUN npm install

EXPOSE 3005

CMD [ "npm", "run", "start" ]