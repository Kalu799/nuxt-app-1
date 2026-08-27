export default defineEventHandler(async (e) => {
  const body = await readBody(e)

  if(!body || !body.marque || !body.model || !body.couleur) {
    throw createError({
      statusCode: 400,
      statusMessage: `Les champs title et duration sont requis.`
    })
  }

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