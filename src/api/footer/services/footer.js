"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/footers",
      handler: "footer.find",
      config: {
        auth: false,
      },
    },
  ],
};
