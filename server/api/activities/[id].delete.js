import Database from 'better-sqlite3'

const db = new Database('database.db')

export default defineEventHandler(async (e) => {

  const id = getRouterParam(e, 'id')

  if (id == -1) {
    throw createError({
      statusCode: 404,
      statusMessage: `L'activité avec l'id ${id} n'a pas été trouvé.`
    })
  }

  const rq = db.prepare('DELETE FROM activities WHERE id = ?')
  const info = rq.run(id)

  return ('ok');
})