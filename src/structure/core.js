import S from '@sanity/desk-tool/structure-builder'
import { FiFile, FiFolder } from "react-icons/fi";


const cores = S.listItem()
  .title('Core')
  .icon(FiFolder)
  .child(
    S.list()
      .title('Pages')
      .items([
        S.listItem().title('Home Page').icon(FiFile).child(S.editor().id('homePage').schemaType('homePage').documentId('homePage')),
        S.listItem().title('Locations Page').icon(FiFile).child(S.editor().id('locationsPage').schemaType('basicPage').documentId('locationsPage')),
        S.listItem().title('Contact Page').icon(FiFile).child(S.editor().id('contactPage').schemaType('contactPage').documentId('contactPage')),
        S.listItem().title('Menu Page').icon(FiFile).child(S.editor().id('menuPage').schemaType('basicPage').documentId('menuPage')),
      ])
  )

export default cores
