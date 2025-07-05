
export default {
  basePath: '/Basket-Ecommerce-Project',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
