FROM node:18.12.1-alpine3.16

WORKDIR /usr/src/app

COPY package.json yarn* /usr/src/app/

COPY prisma  ./prisma/


RUN yarn install
RUN npx prisma generate

COPY next.config.js ./next.config.js

COPY pages ./src/pages
COPY public ./public
COPY styles ./src/styles

CMD [ "yarn","dev" ]
