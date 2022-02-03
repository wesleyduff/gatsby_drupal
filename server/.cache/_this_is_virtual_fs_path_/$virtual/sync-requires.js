
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/app/server/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/app/server/src/pages/404.js")),
  "component---src-pages-coffees-js": preferDefault(require("/app/server/src/pages/coffees.js")),
  "component---src-pages-index-js": preferDefault(require("/app/server/src/pages/index.js"))
}

