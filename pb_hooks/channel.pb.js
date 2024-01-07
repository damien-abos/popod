
/// <reference path="../pb_data/types.d.ts" />

function demo() {
    return {
        "name": "demo",
        "description": "A short </description>",
        "link": "https://example.com",
        "ttl": 123456,
        "language": "fr",
        "categories": [ "cat1", "cat2" ],
        "episodes": [
            {
                "name": "S01E01",
                "description": "test"
            }
        ]
    }
}

routerAdd("GET", "/channel/:name", (c) => {
    let name = c.pathParam("name")

    const data = {
        "name": "demo",
        "description": "A short </description>",
        "link": "https://example.com",
        "ttl": 123456,
        "language": "fr",
        "categories": [ "cat1", "cat2" ],
        "episodes": [
            {
                "name": "S01E01",
                "description": "test"
            }
        ]
    }
    data.name = name

    const tpl = $template.loadFiles(
        `${__hooks}/views/layout.html`,
        `${__hooks}/views/channel.html`,
    )

    const html = tpl.render(data)

    return c.html(200, html)
})

routerAdd("GET", "/channel/:name/rss", (c) => {
    let name = c.pathParam("name")
    const channel = $app.dao()
        .findFirstRecordByData("channels", "name", name)
    const episodes = $app.dao()
        .findRecordsByFilter(
            "episodes",
            "channel = {:channel}",
            "-pubdate",
            50,
            0,
            { channel: channel.id},
        )
    $app.logger().info(episodes)
    const data = channel.publicExport()
    data.episodes = episodes.map(e => {
        const r = e.publicExport()
        r.media = c.scheme() + "://" +c.request().host + "/api/files/kmq7xs1tvb3byt1/" + e.id + "/" + r.media
        return r
    })

    const rsstpl = $template.loadFiles(
        `${__hooks}/views/layout.rss`,
        `${__hooks}/views/channel.rss`,
        `${__hooks}/views/episode.rss`,
    )

    const rss = rsstpl.render(data)
    //$app.logger().info(rss)

    return c.blob(200, "text/xml", rss)
})