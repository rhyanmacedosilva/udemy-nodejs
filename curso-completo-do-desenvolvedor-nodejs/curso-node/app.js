let app = require('./config/server');

let rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

let rotaHome = require('./app/routes/home');
rotaHome(app);

let rotaFormInclusaoNoticia = require('./app/routes/formulario-inclusao-noticia');
rotaFormInclusaoNoticia(app);

app.listen(4100, () => {
    console.log('server running');
});