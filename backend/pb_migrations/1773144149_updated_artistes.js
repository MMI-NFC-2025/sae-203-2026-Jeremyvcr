/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4185980916")

  // remove field
  collection.fields.removeById("text1160874894")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file2658997648",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "galerie",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4185980916")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1160874894",
    "max": 0,
    "min": 0,
    "name": "galerie_photo",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("file2658997648")

  return app.save(collection)
})
