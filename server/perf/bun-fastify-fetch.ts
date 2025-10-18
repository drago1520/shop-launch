import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ m: 'fastify Bun fetch' });
});

// Run the server!
fastify.listen({ port: 3006, host: '192.168.0.3' }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
