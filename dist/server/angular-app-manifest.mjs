
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 8195, hash: '119ad1ee116415c68158d7cff16aabae2cb99038f92e4a6e84fd71f241713291', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8102, hash: 'b8be0ae6633b55a0db95ee8f9971c6a941da7c0bfaec44fbc2c1835a3cae9c43', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-VL2WCPTM.css': {size: 1065, hash: 'LtegyPqbisY', text: () => import('./assets-chunks/styles-VL2WCPTM_css.mjs').then(m => m.default)}
  },
};
