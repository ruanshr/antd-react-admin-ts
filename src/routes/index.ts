import React from "react";
const routes = [
  {
    path: "/index",
    exact: true,
    name: "Index",
    icon: "PieChartOutlined",
    component: React.lazy(() => import(/* webpackChunkName: 'index' */ "../pages/Index")),
    auth: [1],
  },
  {
    path: "/public/button",
    exact: false,
    name: "按钮",
    component: React.lazy(() => import(/* webpackChunkName: 'button' */ "../pages/Public/Button")),
    auth: [1],
  },
  {
    path: "/public/icon",
    exact: false,
    name: "图标",
    component: React.lazy(() => import(/* webpackChunkName: 'icon' */ "../pages/Public/Icon")),
    auth: [1],
  },
  {
    path: "/nav/dropdown",
    exact: false,
    name: "下拉菜单",
    component: React.lazy(() => import(/* webpackChunkName: 'dropdown' */ "../pages/Nav/Dropdown")),
  },
  {
    path: "/nav/menu",
    exact: false,
    name: "菜单",
    component: React.lazy(() => import(/* webpackChunkName: 'menu' */ "../pages/Nav/Menu")),
  },
  {
    path: "/nav/steps",
    exact: false,
    name: "步骤条",
    component: React.lazy(() => import(/* webpackChunkName: 'step' */ "../pages/Nav/Step")),
  },
  {
    path: "/form/form-base",
    exact: false,
    name: "基础表单",
    component: React.lazy(
      () => import(/* webpackChunkName: 'form-base' */ "../pages/Form/FormBase")
    ),
  },
  {
    path: "/form/form-step",
    exact: false,
    name: "步骤表单",
    component: React.lazy(
      () => import(/* webpackChunkName: 'form-step' */ "../pages/Form/FormStep")
    ),
  },
  {
    path: "/show/table",
    exact: false,
    name: "表格",
    component: React.lazy(() => import(/* webpackChunkName: 'table' */ "../pages/Show/Table")),
  },
  {
    path: "/show/collapse",
    exact: false,
    name: "折叠面板",
    component: React.lazy(
      () => import(/* webpackChunkName: 'collapse' */ "../pages/Show/Collapse")
    ),
  },
  {
    path: "/show/tree",
    exact: false,
    name: "树形控件",
    component: React.lazy(() => import(/* webpackChunkName: 'progress' */ "../pages/Show/Tree")),
  },
  {
    path: "/show/tabs",
    exact: false,
    name: "标签页",
    component: React.lazy(
      () => import(/* webpackChunkName: 'progress' */ "../pages/Others/Progress")
    ),
  },
  {
    path: "/others/progress",
    exact: false,
    name: "进度条",
    component: React.lazy(
      () => import(/* webpackChunkName: 'progress' */ "../pages/Others/Progress")
    ),
    auth: [1],
  },
  {
    path: "/others/animation",
    exact: false,
    name: "动画",
    component: React.lazy(
      () => import(/* webpackChunkName: 'animation' */ "../pages/Others/Animation")
    ),
    auth: [1],
  },
  {
    path: "/others/editor",
    exact: false,
    name: "富文本",
    component: React.lazy(() => import(/* webpackChunkName: 'editor' */ "../pages/Others/Editor")),
    auth: [1],
  },
  {
    path: "/others/upload",
    exact: false,
    name: "上传",
    component: React.lazy(() => import(/* webpackChunkName: 'upload' */ "../pages/Others/Upload")),
    auth: [1],
  },
  {
    path: "/about",
    exact: false,
    name: "关于",
    component: React.lazy(() => import(/* webpackChunkName: 'about' */ "../pages/About")),
    auth: [1],
  },
];

export default routes;
