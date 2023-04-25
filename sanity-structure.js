import S from "@sanity/desk-tool/structure-builder";
import menu from "./src/structure/menu";
import cores from "./src/structure/core";
import { FiMapPin, FiFolder, FiGlobe, FiNavigation } from "react-icons/fi";

const hiddenDocTypes = (listItem) =>
  ![
    "route",
    "menu",
    "navigationMenu",
    "page",
    "location",
    "category",
    "homePage",
    "contactPage",
    "basicPage",
    "global",
    "starters",
    "starterCategory",
    "sandwiches",
    "sandwichCategory",
    "sides",
    "sidesCategory",
    "greens",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Locations")
        .icon(FiMapPin)
        .child(S.documentTypeList("location")),
      menu,
      S.listItem()
        .title("Pages")
        .icon(FiFolder)
        .child(S.documentTypeList("page")),
      S.divider(),
      S.listItem()
        .title("Global")
        .icon(FiGlobe)
        .child(
          S.editor().id("global").schemaType("global").documentId("global")
        ),
      cores,
      S.documentTypeListItem("navigationMenu")
        .title("Navigation")
        .icon(FiNavigation),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
