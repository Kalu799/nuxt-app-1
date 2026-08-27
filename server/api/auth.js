export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const login = body.login?.trim()
  const pass = body.pass?.trim()

  if(!login || !pass) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Erreur de login/pass'
    })
  }

  try {

    const [rows] = await db.query('SELECT * FROM users WHERE login= ? AND pass= ?', [body.login, body.pass])

    if (rows.length > 0) {
      const token = useCookie('api_token', {
        maxAge: 60 * 60 * 24 * 7 // Valide 7 jours
      })
      token.value = rows[0].id + rows[0].login
    }
    else {
      return {message : 'pas ok'}
    }
  }
  catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Erreur MySQL: ${error.message}`
    })
  }
})