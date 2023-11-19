FROM node:18-alpine

WORKDIR /Frontend/

COPY public/ /Frontend/public
COPY src/ /Frontend/src
COPY package.json /Frontend/

RUN npm install

RUN npm run build

CMD ["npm", "start"]

