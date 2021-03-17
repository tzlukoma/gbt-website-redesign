// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import event from './documents/event'
import post from './documents/post'
import person from './documents/person'
import platform from './documents/platform'
import podcastEpisode from './documents/podcastEpisode'
import framework from './documents/framework'
import topic from './documents/topic'
import format from './documents/format'
import brand from './documents/brand'
import blockContent from './documents/blockContent'
import siteSettings from './documents/siteSettings'

// Then import schema types from any plugins that might expose them

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    event,
    podcastEpisode,
    post,
    person,
    platform,
    framework,
    topic,
    format,
    brand,
    blockContent,
    siteSettings
  ])
})
