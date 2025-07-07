
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://howydaahmed2023.github.io',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/shop"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/checkout"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 19547, hash: '75470f13a76bde86608087e7d7464b17c1125e7be7546a78bc4ea5566f97d36e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1314, hash: 'afaefbcae00efd9cc1456197e06c2728ac2a838fe239c7d78bb10d644bb1e2a4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 62585, hash: '34438a4994ec70267d4bc334da80f8ecd8fac76a28268d2bb4118fceb6f5b627', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 57974, hash: '116452d9d2cea8ed05f2c7b99d66e4a4d5ba21f879b83524594f3369258c24a0', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 65951, hash: 'fc93f185fb1f2fa7d8a7a04fdca9ea7562edd8d2be5997cf9a705790bad15c9c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 63987, hash: '57b113e8e85a0fe6e5865e09792f1aadfb875f9abfe39edfb9ffd5a96bdbcd28', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 157068, hash: '944203bd058bc05737189c441a315762ab78d5ce289148fc27bde2f2c9848571', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 146388, hash: '283f2682c3c7cec73d1ebcfdc75451c76039312bceb99baa53c23dbc41aee7aa', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-YJM65IGT.css': {size: 247326, hash: '0cXp0KumyZs', text: () => import('./assets-chunks/styles-YJM65IGT_css.mjs').then(m => m.default)}
  },
};
