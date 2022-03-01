const path = require("path");

const preview = (env) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5433),
        database: env("DATABASE_NAME", "bus_booking"),
        user: env("DATABASE_USERNAME", "bus_booking_application"),
        password: env("DATABASE_PASSWORD", "bus_booking_00_11"),
        schema: env("DATABASE_SCHEMA", "public"), // Not required
      },
      debug: false,
    },
  };
};

const local = (env) => {
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
};

const dev = (env) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5433),
        database: env("DATABASE_NAME", "bus_booking"),
        user: env("DATABASE_USERNAME", "bus_booking_application"),
        password: env("DATABASE_PASSWORD", "bus_booking_00_11"),
        schema: env("DATABASE_SCHEMA", "public"), // Not required
      },
      debug: false,
    },
  };
};

module.exports = ({ env }) => {
  return env("ENV") === "local"
    ? local(env)
    : env("ENV") === "preview"
    ? preview(env)
    : dev(env);
};
