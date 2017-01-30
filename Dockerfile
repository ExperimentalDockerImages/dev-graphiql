FROM node:7.4.0

RUN npm install yarn -g

ADD ../* /var/www/graphiql

WORKDIR /var/www/graphiql

RUN cd /var/www/graphiql
RUN yarn install && npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
