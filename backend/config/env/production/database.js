// Ficheiro: backend/config/env/production/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: 'localhost', // Ou o Host do Banco de Dados que a Hostinger forneceu
      port: 3306, // A porta padrão do MySQL
      database: 'u999938953_chbi_db',
      user: 'u999938953_chbidb_user',
      password: '007236Chbi@',
      ssl: false, // Geralmente 'false' para conexões internas na Hostinger
    },
    debug: false,
  },
});
