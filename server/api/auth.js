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

    const [rows] = await db.query('SELECT * FROM users WHERE login= ? AND pass= ?', [login, pass])

    if (rows.length > 0) {
      const tokenValue = rows[0].id + rows[0].login
      setCookie(event, 'api_token', tokenValue, {
        maxAge: 60 * 60 * 24 * 7, // Valide 7 jours
        httpOnly: true,
        path: '/'
      })
      return {succes: true, message: 'Connexion réussie', token: tokenValue}
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