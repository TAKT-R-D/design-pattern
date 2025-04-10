module.exports = function cookieConsentPlugin(context, options) {
  return {
    name: "docusaurus-cookie-consent-plugin",

    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "stylesheet",
              href: "https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css",
            },
          },
        ],
        postBodyTags: [
          {
            tagName: "script",
            attributes: {
              src: "https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js",
              async: true,
            },
          },
          {
            tagName: "script",
            innerHTML: `
                window.addEventListener("load", function(){
                  window.cookieconsent.initialise({
                    palette: {
                      popup: { background: "#c5c2a0" },
                      button: { background: "#2e8555" }
                    },
                    content: {
                      message: "We use cookies to ensure you get the best experience on our website.",
                      dismiss: "Got it!",
                      link: "Learn more",
                      href: "/cookies"
                    }
                  });
                });
              `,
          },
        ],
      };
    },
  };
};
