routerAdd("GET", "/channel/:name", (c) => {
    let name = c.pathParam("name")

    const data = {
        "name": name,
    }

    const tpl = $template.loadFiles(
        `${__hooks}/views/layout.html`,
        `${__hooks}/views/channel.html`,
    )

    const html = tpl.render(data)

    return c.html(200, html)
})

routerAdd("GET", "/channel/:name/rss", (c) => {
    let name = c.pathParam("name")

    const data = {
        "name": name,
    }

    const tpl = $template.loadFiles(
        `${__hooks}/views/layout.rss`,
        `${__hooks}/views/channel.rss`,
    )

    const rss = tpl.render(data)

    return c.blob(200, "text/xml", rss)
})