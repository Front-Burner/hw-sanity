import S from '@sanity/desk-tool/structure-builder'
import { FiMenu, FiCheckCircle, FiCircle, FiInfo, FiPlusCircle } from "react-icons/fi";


const menus = S.listItem()
  .title('Menu')
  .icon(FiMenu)
  .child(
    S.list()
      .title('Menu')
      .items([
        S.listItem()
          .title('Published Menu Items')
          .icon(FiCheckCircle)
          .schemaType('menu')
          .child(
            S.documentList('menu')
              .title('Published Menu Items')
              .menuItems(S.documentTypeList('menu').getMenuItems())
              // Only show menu items with publish date earlier than now and that is not drafts
              .filter('_type == "menu" && !(_id in path("drafts.**"))')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('menu')
                  //.views([S.view.form()])
              )
          ),
        S.documentTypeListItem('menu').title('All Menu Items').icon(FiCircle),
        S.listItem()
          .title('Menu by Category')
          .icon(FiInfo)
          .child(
            // List out all categories
            S.documentTypeList('category')
              .title('Menu by category')
              .child(catId =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('menu')
                  .title('Menu Items')
                  .filter(
                    '_type == "menu" && categories._ref == $catId'
                  )
                  .params({ catId })
              )
        ),
        S.divider(),
        S.documentTypeListItem('category').title('Categories').icon(FiPlusCircle)
      ])
  )

export default menus
