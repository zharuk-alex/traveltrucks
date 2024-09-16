export const getSeo = (pageName, camperName) => {
  switch (pageName) {
    case "home":
      return {
        title: "Campers Wellcome",
        meta: [{ name: "description", content: "Campers Wellcome." }],
      };
    case "catalog":
      return {
        title: "Campers Catalog",
        meta: [{ name: "description", content: "Campers Catalog." }],
      };
    case "camper_details":
      return {
        title: `Camper Details${camperName ? " - " + camperName : ""}`,
        meta: [
          {
            name: "description",
            content: `Camper Details${camperName ? " - " + camperName : ""}`,
          },
        ],
      };
    case "not_found":
      return {
        title: `Page not found`,
        meta: [{ name: "description", content: "Not Found." }],
      };
    default:
      return {
        title: `Campers`,
        meta: [{ name: "description", content: "Campers of your dream" }],
      };
  }
};
