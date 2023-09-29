import setupKnex, { Knex } from 'knex'

import { env } from './env'

export const KNEX_CONFIG: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(KNEX_CONFIG)
