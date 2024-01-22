FROM node:18-alpine

ENV NODE_ENV production

WORKDIR /app

COPY . .

RUN npm install -g nodemon ts-node
RUN npm install

EXPOSE 8080

CMD npm start
