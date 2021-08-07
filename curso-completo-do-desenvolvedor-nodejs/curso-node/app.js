let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/tecnologia', (req, res) => {
    // res.send('<html><body>Portal Tec</body></html>');
    res.render('secao/tecnologia');
});

app.get('/', (req, res) => {
    // res.send('<html><body>Portal News</body></html>');
    res.render('home/index');
});

app.get('/formulario-inclusao-noticia', (req, res) => {
    res.render('admin/form_add_noticia');
});

app.get('/noticias', (req, res) => {
    res.render('noticias/noticias');
});

app.listen(4100, () => {
    console.log('server running with express');
});