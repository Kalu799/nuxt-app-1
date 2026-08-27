import { fruitsState } from "~~/server/utils/state"

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')

  const fruit = fruitsState.find(item => item.id == id)

  if (!fruit) {
    throw createError({
      statusCode: 404,
      statusMessage: `Le fruit avec l'id ${id} n'a pas été trouvé.`
    })
  }

  return fruit;
});