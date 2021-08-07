module.exports = () => {
    this.getNoticias = (connection, callback) => {
        connection.query('SELECT * FROM noticias', callback);
    }

    this.getNoticia = (connection, callback) => {
        connection.query('SELECT * FROM noticias WHERE id = 2', callback);
    }

    return this;
}