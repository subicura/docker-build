FROM   node:12-alpine

COPY    ./package* /app/
WORKDIR /app
RUN     npm install

COPY    . /app
EXPOSE  3000
CMD     node app.js
