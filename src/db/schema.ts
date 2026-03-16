import { sql } from 'drizzle-orm'
import {
  check,
  index,
  integer,
  pgSchema,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
  id: serial().primaryKey(),
  title: text().notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

const authSchema = pgSchema('auth')

const users = authSchema.table('users', {
  id: uuid('id').primaryKey(),
})

export const games = pgTable(
  'games',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    levelId: text('level_id').notNull(),
    seed: integer('seed').notNull(),
    status: text('status').notNull().default('active'),
    fullTurnsCompleted: integer('full_turns_completed').notNull().default(0),
    remainingSpawnBudget: integer('remaining_spawn_budget')
      .notNull()
      .default(0),
    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .default(sql`timezone('utc', now())`),
    result: text('result'),
  },
  (table) => [
    check(
      'games_result_check',
      sql`${table.result} = any(array['won'::text, 'lost'::text]) or ${table.result} is null`,
    ),
    check(
      'games_status_check',
      sql`${table.status} = any(array['active'::text, 'ended'::text])`,
    ),
    index('games_user_id_idx').on(table.userId),
    index('games_created_at_idx').on(table.createdAt.desc()),
    index('games_user_id_level_id_idx').on(table.userId, table.levelId),
  ],
)
