
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'crypto_exchange',
      user:     'postgres',
      password: '12345678'
    },
    seeds: {
      directory: './db/seeds'
    },
    migrations: {
      directory: './db/migrations'
    }
  }

};
