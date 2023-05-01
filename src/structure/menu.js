import S from "@sanity/desk-tool/structure-builder";
import {
  GiHotMeal,
  GiHamburger,
  GiCheeseWedge,
  GiBerriesBowl,
  GiFireBowl,
  GiSteak,
} from "react-icons/gi";

import { getGlobalSlug, previewURL } from "../../utils/resolveProductionUrl";

import starters from "./starters";

const WebPreview = ({ document }) => {
  const { displayed } = document;
  return <iframe src={previewURL + displayed.slug.current} frameBorder={0} />;
};

export const getDefaultDocumentNode = () => {
  // Conditionally return a different configuration based on the schema type
  return S.document().views([
    S.view.form(),
    S.view.component(WebPreview).title("Web"),
  ]);
};

const menu = S.listItem()
  .title("Menu")
  .icon(GiHotMeal)
  .child(
    S.list()
      .title("Menu")
      .items([
        starters.icon(GiCheeseWedge),
        S.documentTypeListItem("sandwiches")
          .title("Burgers & Sandwiches")
          .icon(GiHamburger),
        S.documentTypeListItem("greens")
          .title("Greens & Soups")
          .icon(GiFireBowl),
        S.documentTypeListItem("brunch").title("Brunch").icon(GiFireBowl),
        S.documentTypeListItem("texasPlates")
          .title("Texas Plates")
          .icon(GiFireBowl),
        S.documentTypeListItem("beef")
          .title("Farm Raised TX Beef")
          .icon(GiFireBowl),
        S.documentTypeListItem("daily").title("Daily Plates").icon(GiFireBowl),
        S.listItem()
          .title("Sides")
          .icon(GiBerriesBowl)
          .child(
            S.list()
              .title("Sides")
              .items([
                S.documentTypeListItem("sides")
                  .title("Menu Items")
                  .icon(GiBerriesBowl),
              ])
          ),
      ])
  );

export default menu;
