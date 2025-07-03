FROM node:20

WORKDIR /app/

RUN mkdir my-next-app

COPY ./my-next-app/package*.json ./my-next-app/
COPY ./my-next-app/script.sh /app/my-next-app/script.sh

WORKDIR /app/my-next-app

ENTRYPOINT ["sh", "./script.sh"]