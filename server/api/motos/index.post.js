export default defineEventHandler(async (e) => {
  const body = await readBody(e)

  try {
    const [result] = await db.query(
      'INSERT INTO motos (marque, modele, couleur) VALUES (?, ?, ?)',
      [body.marque, body.model, body.couleur]
    )
    return {
      id: result.insertId,
      modele: body.model,
      marque: body.marque,
      couleur: body.couleur
    }
  } catch(error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Erreur MySQL : ${error.message}`
    })
  }
})