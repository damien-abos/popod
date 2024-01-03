/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-12-31 11:34:20.694Z",
      "updated": "2023-12-31 11:34:20.695Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null,
            "maxSelect": 1,
            "maxSize": 5242880,
            "protected": false
          }
        }
      ],
      "indexes": [],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "onlyVerified": false,
        "requireEmail": false
      }
    },
    {
      "id": "lgcs52oqhovsycz",
      "created": "2023-12-31 11:36:17.749Z",
      "updated": "2023-12-31 12:23:14.762Z",
      "name": "channels",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "g7ynp4k2",
          "name": "name",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "2ye6eypl",
          "name": "description",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ftbdsd6p",
          "name": "author",
          "type": "relation",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "qqcys6sc",
          "name": "image",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": [],
            "maxSelect": 1,
            "maxSize": 10485760,
            "protected": false
          }
        },
        {
          "system": false,
          "id": "nelzlqkc",
          "name": "link",
          "type": "url",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "exceptDomains": null,
            "onlyDomains": null
          }
        },
        {
          "system": false,
          "id": "erhhl86s",
          "name": "language",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": 2,
            "max": 2,
            "pattern": ""
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `idx_F2gi9Nd` ON `channels` (`name`)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "kmq7xs1tvb3byt1",
      "created": "2023-12-31 11:40:19.719Z",
      "updated": "2023-12-31 12:24:20.209Z",
      "name": "episodes",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "hqdumylu",
          "name": "name",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "5bwlfisq",
          "name": "description",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "gek7khr4",
          "name": "pubdate",
          "type": "date",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "ls7kiwq2",
          "name": "channel",
          "type": "relation",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "lgcs52oqhovsycz",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "ogvyp8a4",
          "name": "image",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": [],
            "maxSelect": 1,
            "maxSize": 5242880,
            "protected": false
          }
        },
        {
          "system": false,
          "id": "0am5eskp",
          "name": "media",
          "type": "file",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [
              "audio/ogg",
              "audio/mpeg",
              "audio/aac",
              "audio/x-m4a",
              "application/ogg"
            ],
            "thumbs": [],
            "maxSelect": 1,
            "maxSize": 52428800,
            "protected": false
          }
        },
        {
          "system": false,
          "id": "ou7unqao",
          "name": "visible",
          "type": "bool",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [
        "CREATE INDEX `idx_dI95GJu` ON `episodes` (\n  `channel`,\n  `pubdate`,\n  `name`\n)"
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
