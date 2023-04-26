import S from "@sanity/desk-tool/structure-builder";
import {
  GiBeerBottle,
  GiBookmarklet,
  GiBookPile,
  GiSecretBook,
  GiBookAura,
} from "react-icons/gi";

const starters = S.listItem()
  .title("Starters")
  .icon(GiBeerBottle)
  .child(
    S.list()
      .title("Starters")
      .items([
        S.documentTypeListItem("starters")
          .title("All Starter Items")
          .icon(GiBookmarklet),
        S.listItem()
          .title("Starters by Category")
          .icon(GiSecretBook)
          .child(
            // List out all categories
            S.documentTypeList("starterCategory")
              .title("Starters by category")
              .child((catId) =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType("starters")
                  .title("Starter Items")
                  .filter(
                    '_type == "starter" && starterCategories._ref == $catId'
                  )
                  .params({ catId })
              )
          ),
        S.divider(),
        S.documentTypeListItem("starterCategory")
          .title("Categories")
          .icon(GiBookAura),
      ])
  );

export default starters;
