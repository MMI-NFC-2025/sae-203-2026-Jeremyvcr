/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3554152471")

  // update collection data
  unmarshal({
    "name": "prix"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3554152471")

  // update collection data
  unmarshal({
    "name": "prices"
  }, collection)

  return app.save(collection)
})
