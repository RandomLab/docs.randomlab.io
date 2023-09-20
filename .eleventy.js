const Image = require("@11ty/eleventy-img")
const path = require('path')

function imageShortcode(src, alt, sizes="(min-width: 1024px) 100vw, 50vw") {

    console.log(`Generating image(s) from:  ${src}`)

    let imageSrc = `${path.dirname(this.page.inputPath)}/${src}`

    let options = {
        widths: [600, 900, 1500],
        formats: ["webp", "jpeg"],
        outputDir: path.dirname(this.page.outputPath),
        urlPath: this.page.url,
        filenameFormat: function (id, src, width, format, options) {
            const extension = path.extname(src)
            const name = path.basename(imageSrc, extension)
            return `${name}-${width}w.${format}`
        }
    }

    // generate images
    Image(imageSrc, options)

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    }
    // get metadata
    metadata = Image.statsSync(imageSrc, options)
    return Image.generateHTML(metadata, imageAttributes)

}

module.exports = function (eleventyConfig) {

    eleventyConfig.addShortcode("image", imageShortcode)

    eleventyConfig.addLayoutAlias('index', 'layouts/index')
    eleventyConfig.addLayoutAlias('projet', 'layouts/projet')

    return {
        templateFormats: [ "md", "njk", "html", "jpg", "webp"],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
        }
    }

}