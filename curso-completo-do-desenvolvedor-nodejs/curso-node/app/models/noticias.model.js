module.exports = () => {
    this.getNoticias = (connection, callback) => {
        connection.query('SELECT * FROM noticias', callback);
    }

    this.getNoticia = (connection, callback) => {
        connection.query('SELECT * FROM noticias WHERE id = 2', callback);
    }

    this.salvarNoticia = (noticia, connection, callback) => {
        connection.query('INSERT INTO noticias SET ?', noticia, callback);
    }

    return this;
}