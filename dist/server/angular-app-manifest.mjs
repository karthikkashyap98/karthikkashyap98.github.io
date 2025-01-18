
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 8205, hash: 'f9b56e362819d2021159781544656f2847959a8a20484bd002b255570d9ecc40', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8112, hash: '7bb4a582318ead858d39bed816f757c0e4f3beb53cb26b1d9e4e8f9325e22d4c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-VL2WCPTM.css': {size: 1065, hash: 'LtegyPqbisY', text: () => import('./assets-chunks/styles-VL2WCPTM_css.mjs').then(m => m.default)}
  },
};
