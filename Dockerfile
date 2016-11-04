FROM mhart/alpine-node:6

RUN apk add --no-cache git

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install

EXPOSE 3001

CMD npm run build
CMD npm run server

HEALTHCHECK --interval=5s --timeout=2s CMD npm run health
