FROM node:16.13.0
WORKDIR /app

COPY package*.json ./
RUN npm install -g gatsby-cli
RUN gatsby --version

COPY ./server ./app

CMD ["npm", "start"]