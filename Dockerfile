	FROM node:18.12.1-alpine3.16

WORKDIR /app

COPY package.json yarn.lock ./
COPY .pnp* ./
COPY postcss.config.js tailwind.config.js ./

# COPY prisma  ./prisma/


RUN yarn install
# RUN npx prisma generate

COPY next.config.js ./next.config.js

COPY src ./src
COPY public ./public
CMD [ "yarn","dev" ]
