
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Basket-Ecommerce-Project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Basket-Ecommerce-Project/home",
    "route": "/Basket-Ecommerce-Project"
  },
  {
    "renderMode": 2,
    "route": "/Basket-Ecommerce-Project/home"
  },
  {
    "renderMode": 2,
    "route": "/Basket-Ecommerce-Project/shop"
  },
  {
    "renderMode": 2,
    "route": "/Basket-Ecommerce-Project/contact"
  },
  {
    "renderMode": 2,
    "route": "/Basket-Ecommerce-Project/blog"
  },
  {
    "renderMode": 2,
    "route": "/Basket-Ecommerce-Project/about"
  },
  {
    "renderMode": 2,
    "route": "/Basket-Ecommerce-Project/checkout"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 19326, hash: 'a4d4838cb730a7552d8c42b4c65e535d89af01ff4b24fbb90bd4c83617291a4a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1092, hash: '270a242f7ab264029f1cba6d69624fa900970cc6edb48781e4d7377ec7eeca04', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 45542, hash: '23b5a0a6749a55c2816d6de3cfbc4a44b417a976de83d6a9aec03ecfa74d199f', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 50443, hash: '20665d0496f3e147ce8ce8133dd545211a8cb0543017113cb61c1b6f4b9f0e91', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 45543, hash: '770ff9e5da69f759ab166c75adb8879f6ec85b2946ca7304374c3d1386044cc1', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 53756, hash: '3c7efa0e8fa107a89300507e66aef4719637a82bdfa6946943202d5923ad0774', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 51703, hash: 'eae3731c19d46977dc065e24f46430111f3142738707ea2fb69825da35cca43e', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 133762, hash: '58d8b3308a90d2743c949c0bc77072674fb56488b22a13631f20427c2d5d51a7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-YJM65IGT.css': {size: 247326, hash: '0cXp0KumyZs', text: () => import('./assets-chunks/styles-YJM65IGT_css.mjs').then(m => m.default)}
  },
};
