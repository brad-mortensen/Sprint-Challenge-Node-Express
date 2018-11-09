const server = require('./server')

const port = 9000;

server.listen(port, () => console.log(`\nThe Server is Alive on ${port}!\n`));