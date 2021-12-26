
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'typography', name: 'typography', component: () => import('pages/Typography.vue') },
      { path: 'flex', name: 'flex', component: () => import('pages/Flex.vue') },
      { path: 'dialog', name: 'dialog', component: () => import('pages/Dialog.vue') },
      { path: 'form', name: 'form', component: () => import('pages/Form.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
