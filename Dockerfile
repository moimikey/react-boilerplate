FROM mhart/alpine-node:6

RUN apk add --no-cache git

RUN mkdir -p /src
WORKDIR /src

COPY package.json /src
RUN npm install

EXPOSE 3000

CMD npm run build
CMD npm run server

HEALTHCHECK --interval=5s --timeout=2s CMD npm run health
