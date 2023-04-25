// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


// Documents
import location from './documents/location'
import menu from './documents/menu'
import category from './documents/category'
import page from './documents/page'
import homePage from './documents/homePage'
import global from './documents/global'
import basicPage from './documents/basicPage'
import navMenu from './documents/navMenu'
import contactPage from './documents/contactPage'

// Components
import seo from './components/seo'
import hero from './components/hero'
import textBlock from './components/textBlock'


// Objects
import defaultImage from './objects/defaultImage'
import route from './objects/route'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Documents
    location,
    menu,
    category,
    global,
    page,
    homePage,
    basicPage,
    navMenu,
    contactPage,
    // Components,
    seo,
    textBlock,
    hero,
    // Objects
    defaultImage,
    route
  ]),
})
