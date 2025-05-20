import { date, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const urlTable = mysqlTable('urls_table', {
  id: varchar({ length: 255 }).primaryKey().unique(),
  original_url: varchar({ length: 255 }).notNull().unique(),
  short_url: varchar({ length: 255 }).notNull().unique(),
  created_at: date().default(new Date()).notNull(),
  expire_at: date().notNull(),
  access_count: varchar({ length: 255 }).default('0').notNull(),
});
