import { parse } from 'pg-connection-string';

export default ({ env }) => {
  // Render gives us one long connection string. This parses it into the pieces Strapi needs.
  const config = parse(env('DATABASE_URL', ''));

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false, // Required for Render's internal connections
        },
      },
      debug: false,
    },
  };
};