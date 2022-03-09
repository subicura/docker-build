const os = require("os");
const yaml = require("js-yaml");

// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

// Declare a route
fastify.get("/", function (request, reply) {
  reply.send(
    yaml.dump({
      version: "v1",
      hostname: os.hostname(),
      headers: request.headers,
      query: request.query,
    })
  );
});

// Run the server!
fastify.listen(3000, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
