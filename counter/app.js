const redis = require("redis");
const client = redis.createClient(
  process.env["REDIS_PORT"] || 6379,
  process.env["REDIS_HOST"] || "localhost"
);

// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

const COUNT_REDIS_KEY = "count";

// Declare a route
fastify.get("/", function (_request, reply) {
  client.incr(COUNT_REDIS_KEY, (_err, value) => {
    reply.send(`${value}\n`);
  });
});

// Run the server!
fastify.listen(3000, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
