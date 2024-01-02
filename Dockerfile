FROM node:16.13.0

WORKDIR /src

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000

CMD npm run server
