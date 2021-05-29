const menu = [
  {
    key: "/index",
    title: "首页",
    icon: "HomeOutlined",
    auth: [1],
  },
  {
    title: "通用",
    key: "/public",
    icon: "AppstoreOutlined",
    auth: [1],
    subs: [
      { title: "按钮", key: "/public/button", icon: "SearchOutlined" },
      { title: "图标", key: "/public/icon", icon: "TableOutlined" },
    ],
  },
  {
    title: "导航",
    key: "/nav",
    icon: "BulbOutlined",
    subs: [
      { title: "下拉菜单", key: "/nav/dropdown", icon: "MenuOutlined" },
      { title: "导航菜单", key: "/nav/menu", icon: "MenuOutlined" },
      { title: "步骤条", key: "/nav/steps", icon: "MoreOutlined" },
    ],
  },
  {
    title: "表单",
    key: "/form",
    icon: "FormOutlined",
    subs: [
      { title: "基础表单", key: "/form/form-base", icon: "EditOutlined" },
      { title: "步骤表单", key: "/form/form-step", icon: "MoreOutlined" },
    ],
  },
  {
    title: "展示",
    key: "/show",
    icon: "PieChartOutlined",
    subs: [
      { title: "表格", key: "/show/table", icon: "TableOutlined" },
      { title: "折叠面板", key: "/show/collapse", icon: "RiseOutlined" },
      { title: "树形控件", key: "/show/tree", icon: "ApartmentOutlined" },
      { title: "标签页", key: "/show/tabs", icon: "AuditOutlined" },
    ],
  },
  {
    title: "其它",
    key: "/others",
    icon: "PaperClipOutlined",
    auth: [1],
    subs: [
      { title: "进度条", key: "/others/progress", icon: "EllipsisOutlined" },
      { title: "动画", key: "/others/animation", icon: "GifOutlined" },
      { title: "上传", key: "/others/upload", icon: "UploadOutlined" },
      { title: "富文本", key: "/others/editor", icon: "FormOutlined" },
      { title: "404", key: "/404", icon: "" },
      { title: "500", key: "/500", icon: "" },
    ],
  },
  {
    title: "关于",
    key: "/about",
    icon: "UserOutlined",
    auth: [1],
  },
];

export default menu;
