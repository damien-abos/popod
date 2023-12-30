package main

import (
	"log"
	"os"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/forms"
	"github.com/pocketbase/pocketbase/models"
	"github.com/pocketbase/pocketbase/models/schema"
	"github.com/pocketbase/pocketbase/tools/types"
)

func main() {
	app := pocketbase.New()

	collection := &models.Collection{}

	form := forms.NewCollectionUpsert(app, collection)
	form.Name = "example"
	form.Type = models.CollectionTypeBase
	form.ListRule = nil
	form.ViewRule = types.Pointer("@request.auth.id != ''")
	form.CreateRule = types.Pointer("")
	form.UpdateRule = types.Pointer("@request.auth.id != ''")
	form.DeleteRule = nil
	form.Schema.AddField(&schema.SchemaField{
		Name:     "title",
		Type:     schema.FieldTypeText,
		Required: true,
		Options: &schema.TextOptions{
			Max: types.Pointer(10),
		},
	})
	form.Schema.AddField(&schema.SchemaField{
		Name:     "user",
		Type:     schema.FieldTypeRelation,
		Required: true,
		Options: &schema.RelationOptions{
			MaxSelect:     types.Pointer(1),
			CollectionId:  "ae40239d2bc4477",
			CascadeDelete: true,
		},
	})

	// validate and submit (internally it calls app.Dao().SaveCollection(collection) in a transaction)
	if err := form.Submit(); err != nil {
		return err
	}

	// serves static files from the provided public dir (if exists)
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("./pb_public"), false))
		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
