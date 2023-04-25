import S from "@sanity/desk-tool/structure-builder";
import {
  GiBeerBottle,
  GiBookmarklet,
  GiBookPile,
  GiSecretBook,
  GiBookAura,
} from "react-icons/gi";

const sides = S.listItem()
  .title("Sides")
  .icon(GiBeerBottle)
  .child(
    S.list()
      .title("Sides")
      .items([
        S.documentTypeListItem("sides")
          .title("All Side Items")
          .icon(GiBookmarklet),
        S.listItem()
          .title("Sides by Category")
          .icon(GiSecretBook)
          .child(
            // List out all categories
            S.documentTypeList("sidesCategory")
              .title("Sides by category")
              .child((catId) =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType("sides")
                  .title("Side Items")
                  .filter('_type == "sides" && sidesCategories._ref == $catId')
                  .params({ catId })
              )
          ),
        S.divider(),
        S.documentTypeListItem("sidesCategory")
          .title("Categories")
          .icon(GiBookAura),
      ])
  );

export default sides;
