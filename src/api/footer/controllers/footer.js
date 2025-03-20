const { factories } = require("@strapi/strapi");

module.exports = factories.createCoreController("api::footer.footer", ({ strapi }) => ({
  async find(ctx) {
    try {
      const entity = await strapi.entityService.findMany("api::footer.footer", {
        populate: {
          footer_list: {
            populate: "footer_content",
          },
        },
      });

      if (!entity || !entity.footer_list) {
        return ctx.notFound("Footer not found");
      }

      const transformedData = entity.footer_list.reduce((acc, item) => {
        if (!acc[item.Type]) acc[item.Type] = [];

        item.footer_content.forEach(content => {
          acc[item.Type].push({
            Text: content.Text,
            URL: content.URL,
            NewWindow: content.NewWindow,
          });
        });

        return acc;
      }, {});

      return ctx.send(transformedData);
    } catch (error) {
      console.error("Error fetching footer:", error);
      ctx.throw(500, "Internal Server Error");
    }
  },
}));
