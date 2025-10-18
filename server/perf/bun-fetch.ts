const server = Bun.serve({
  port: 3005,
  hostname: '192.168.0.3',
  async fetch(req) {
    return Response.json({ m: 'Bun fetch API!' });
  },
});
console.log(`Listening on http://192.168.0.3:${server.port}`);
