import { fruitsState } from "~~/server/utils/state"

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')

  const index = fruitsState.findIndex(item => item.id == id)

  if (index == -1) {
    throw createError({
      statusCode: 404,
      statusMessage: `Le fruit avec l'id ${id} n'a pas été trouvé.`
    })
  }

  fruitsState.splice(index, 1)

  setHeader(event, 'Content-Type', 'application/json')
  setResponseStatus(event, 200)

  return fruitsState;

});