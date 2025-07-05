
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://howydaahmed2023.github.io/big-basket-e-commerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/big-basket-e-commerce/home",
    "route": "/big-basket-e-commerce"
  },
  {
    "renderMode": 2,
    "route": "/big-basket-e-commerce/home"
  },
  {
    "renderMode": 2,
    "route": "/big-basket-e-commerce/shop"
  },
  {
    "renderMode": 2,
    "route": "/big-basket-e-commerce/contact"
  },
  {
    "renderMode": 2,
    "route": "/big-basket-e-commerce/blog"
  },
  {
    "renderMode": 2,
    "route": "/big-basket-e-commerce/about"
  },
  {
    "renderMode": 2,
    "route": "/big-basket-e-commerce/checkout"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 19356, hash: '74796587fb56cc375555fbac70d4551bd5431978088aabd3f0af6ef0e1f08887', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1122, hash: 'f0dc7fd6f92c3493fa9d3daaddfe39c13783fb4c08fffd79d3d1fdc21f3bbb2f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 45722, hash: '9e1d9ca925cc54c3a02bbf514827295ecb265f27b8c002e3de3c4aa2723f07b1', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 50623, hash: '49960a728c3ad5b4c5fc79e61840016ac79c8760310cee9cc79cf16f04622564', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 45723, hash: '806f8a10238be51b48f834eb3580f297e4ae15cd6382b87727aa1d0fc3a35f3f', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 53936, hash: '1f415d7bb6da744a8a6300a658b44a04d0814bb1dff72056f831faf1dbe1fbf0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 51883, hash: 'd97c3bd1bede579ca7f3074dd8e87d836b64109b486aaecfd4789292fe377f8a', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 133942, hash: 'd1d7a49f581a86d9f415411e6561c14ff6abc24cee8fa093a8d8896c0075be7e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-YJM65IGT.css': {size: 247326, hash: '0cXp0KumyZs', text: () => import('./assets-chunks/styles-YJM65IGT_css.mjs').then(m => m.default)}
  },
};
