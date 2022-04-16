const sanityClient = require('@sanity/client')
const Schema = require('@sanity/schema').default
const blockTools = require('@sanity/block-tools')
const blockContent = require('./blockContent')

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-04-16',
    token: process.env.SANITY_API_TOKEN,
    useCdn: true
})



// const defaultSchema = Schema.compile({
//     name: 'allEpisodes',
//     types: [
//         {
//             name: 'podcastEpisode',
//             type: 'object',
//             fields: [
//                 {
//                     title: 'Title',
//                     name: 'title',
//                     type: 'string',
//                 },
//                 {
//                     title: 'Episode Number',
//                     name: 'episodeNumber',
//                     type: 'number',
//                 },
//                 {
//                     title: 'Date',
//                     name: 'date',
//                     type: 'datetime',
//                 },
//                 {
//                     title: 'RSS Link',
//                     name: 'rssLink',
//                     type: 'string',
//                 },
//                 {
//                     title: 'Video Link',
//                     name: 'videoUrl',
//                     type: 'url',
//                 },
//                 {
//                     title: 'Audio Link',
//                     name: 'audioUrl',
//                     type: 'url',
//                 },
//                 {
//                     title: 'Synopsis',
//                     name: 'synopsis',
//                     type: 'array',
//                     of: [{ type: 'block' }],
//                 },
//             ],
//         }
//     ]

// })

// console.log(JSON.stringify(defaultSchema))

// const blockContentType = defaultSchema.get('podcastEpisode').fields.find(field => field.name === 'synopsis')

// const query = '*[_type == "podcastEpisode"]'

exports.handler = async function (event, context) {
    const body = await JSON.parse(event.body)
    // const synopsisBlocks = blockTools.htmlToBlocks(synopsis, blockContentType)
    const doc = { _type: "podcastEpisode", title: body.EntryTitle, rssLink: body.EntryUrl }
    // const doc = JSON.parse(event.body)
    console.log(doc)
    try {
        const episode = await client.create(doc)
        return {
            statusCode: 200,
            body: JSON.stringify(episode)
        }
    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Didn't work`
        })
    }
}