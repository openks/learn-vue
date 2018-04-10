const Demo = () => import('@/demo/component/Index');
const CompA = () => import('@/demo/component/CompA');
const CompC = () => import('@/demo/component/CompC');

export default [
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
  },
  {
    path: '/compa',
    name: 'compa',
    component: CompA,
  },
  {
    path: '/compc',
    name: 'compc',
    component: CompC,
  },
];
