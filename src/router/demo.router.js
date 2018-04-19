const Demo = () => import('@/demo/component/Index');
const CompA = () => import('@/demo/component/CompA');
const CompC = () => import('@/demo/component/CompC');
const CompD = () => import('@/demo/component/CompD');
const CompE = () => import('@/demo/component/CompE');

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
  {
    path: '/compd',
    name: 'compd',
    component: CompD,
  },
  {
    path: '/compe',
    name: 'compe',
    component: CompE,
  },
];
