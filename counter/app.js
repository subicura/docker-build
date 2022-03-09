const redis = require("redis");

const client = redis.createClient({
  url: `redis://${process.env["REDIS_HOST"] || "localhost"}:${process.env["REDIS_PORT"] || 6379}`
});
client.on('error', (err) => console.log('Redis Client Error', err));

// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

const COUNT_REDIS_KEY = "count";

// Declare a route
fastify.get("/", async (_request, reply) => {
  const value = await client.incr(COUNT_REDIS_KEY);
  reply.send(`${value}\n`);
});

// Run the server!
fastify.listen(3000, "0.0.0.0", async (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  await client.connect();

  fastify.log.info(`server listening on ${address}`);
});
