
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/karthikkashyap98.github.io/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 8222, hash: '1daa5c6b8ddcf7332927881830a8bbe76744a0bb084f23917e47e125b05ce862', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8129, hash: '42ed7dfe3bbbcbec77cf41c7b29349ae72e4dbe43d9d2c2849ac5ac2252eb8a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-VL2WCPTM.css': {size: 1065, hash: 'LtegyPqbisY', text: () => import('./assets-chunks/styles-VL2WCPTM_css.mjs').then(m => m.default)}
  },
};
