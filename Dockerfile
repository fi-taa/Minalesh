FROM node:18.12.1-alpine3.16

WORKDIR /usr/src/nextapp

COPY package.json yarn* .pnp* postcss.config.js tailwind.config.js /usr/src/nextapp/

# COPY prisma  ./prisma/


RUN yarn install
# RUN npx prisma generate

COPY next.config.js ./next.config.js

COPY src ./src
COPY public ./public
CMD [ "yarn","dev" ]
