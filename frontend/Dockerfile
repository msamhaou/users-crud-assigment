FROM node:20

WORKDIR /app/

RUN mkdir my-next-app

COPY ./my-next-app/package*.json ./my-next-app/

WORKDIR /app/my-next-app

RUN npm install


CMD [ "npm", "run", "dev" ]