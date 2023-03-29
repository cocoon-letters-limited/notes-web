FROM node:alpine 

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm run build

COPY .  /app

CMD ["npm", "run", "start"]