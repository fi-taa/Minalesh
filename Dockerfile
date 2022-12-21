FROM node:18.12.1-alpine3.16
WORKDIR /usr/src/app
COPY package.json yarn* /usr/src/app/

COPY prisma  ./prisma/


RUN yarn

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD [ "yarn","dev" ]
