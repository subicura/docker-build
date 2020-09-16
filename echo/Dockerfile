FROM   node:12-slim

# Build
COPY    ./package* /app/
WORKDIR /app
RUN     npm install

COPY    . /app

# Using Tiny process
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

# Run
EXPOSE  3000
CMD     ["node", "app.js"]
