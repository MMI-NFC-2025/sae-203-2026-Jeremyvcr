/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3601592109")

  // remove field
  collection.fields.removeById("text2617718095")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3601592109")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2617718095",
    "max": 0,
    "min": 0,
    "name": "artiste",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
