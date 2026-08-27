import Database from 'better-sqlite3'

const db = new Database('database.db')

export default defineEventHandler((e) => {
  const rq = db.prepare('SELECT * FROM activities')
  return rq.all()
})