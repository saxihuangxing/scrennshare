FROM node:8-slim

ADD . app

WORKDIR app


ENV NODE_ENV production

RUN npm install \
 && npm cache clear --force

EXPOSE 8889
EXPOSE 6379

CMD ["node", "server.js"]
