/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_414258986")

  // update collection data
  unmarshal({
    "name": "scene"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_414258986")

  // update collection data
  unmarshal({
    "name": "stages"
  }, collection)

  return app.save(collection)
})
