FROM node:18

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm i

EXPOSE 9000

CMD ["npm", "run", "start"]
