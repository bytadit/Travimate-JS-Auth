module.exports = {
  development: {
    HOST: "143.198.213.140",
    USER: "travimate",
    PORT:"6432",
    PASSWORD: "travi1m!",
    DB: "travimatedb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  test: {
    HOST: "143.198.213.140",
    USER: "travimate",
    PASSWORD: "travi1m!",
    PORT:"6432",
    DB: "travimatedb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    HOST: "143.198.213.140",
    USER: "travimate",
    PASSWORD: "travi1m!",
    PORT:"6432",
    DB: "travimatedb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};

