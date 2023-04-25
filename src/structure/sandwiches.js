import S from "@sanity/desk-tool/structure-builder";
import {
  GiBeerBottle,
  GiBookmarklet,
  GiBookPile,
  GiSecretBook,
  GiBookAura,
} from "react-icons/gi";

const sandwiches = S.listItem()
  .title("Sandwiches")
  .icon(GiBeerBottle)
  .child(
    S.list()
      .title("Sandwiches")
      .items([
        S.documentTypeListItem("sandwiches")
          .title("All Sandwich Items")
          .icon(GiBookmarklet),
        S.listItem()
          .title("Sandwiches by Category")
          .icon(GiSecretBook)
          .child(
            // List out all categories
            S.documentTypeList("sandwichCategory")
              .title("Sandwiches by category")
              .child((catId) =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType("sandwiches")
                  .title("Sandwich Items")
                  .filter(
                    '_type == "sandwich" && sandwichCategories._ref == $catId'
                  )
                  .params({ catId })
              )
          ),
        S.divider(),
        S.documentTypeListItem("sandwichCategory")
          .title("Categories")
          .icon(GiBookAura),
      ])
  );

export default sandwiches;
