let srv = require('./config/server');

srv.listen(4100, () => {
    console.log('server running...');
});