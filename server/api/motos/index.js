export default defineEventHandler(async (e) => {
  try {
    const [rows] = await db.query('SELECT * FROM motos')
    return rows
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Erreur MySQL : ${error.message}`
    })
  }
})