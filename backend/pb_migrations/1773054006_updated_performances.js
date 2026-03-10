/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3601592109")

  // remove field
  collection.fields.removeById("text213010863")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date213010863",
    "max": "",
    "min": "",
    "name": "date_et_heure",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3601592109")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text213010863",
    "max": 0,
    "min": 0,
    "name": "date_et_heure",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("date213010863")

  return app.save(collection)
})
