import React, { Component } from "react";
import { Menu } from "antd";
import Icon from "@/components/Icon";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

interface ICustomMenuProps extends RouteComponentProps {
  location: any;
  menu: any[];
}

interface ICustomMenuState {
  openKeys: any[];
  selectedKeys: any[];
}
class CustomMenu extends Component<ICustomMenuProps, ICustomMenuState> {
  state = {
    openKeys: [],
    selectedKeys: [],
  };

  // 处理 pathname
  getOpenKeys = (str: string) => {
    let newStr = "",
      newArr = [],
      arr = str.split("/").map((i) => "/" + i);
    for (let i = 1; i < arr.length - 1; i++) {
      newStr += arr[i];
      newArr.push(newStr);
    }
    return newArr;
  };

  // 页面刷新的时候可以定位到 menu 显示
  componentDidMount() {
    let { pathname } = this.props.location;
    this.setState({
      selectedKeys: [pathname],
      openKeys: this.getOpenKeys(pathname),
    });
  }

  // 点击面包屑导航时 侧边栏同步响应
  componentDidUpdate(prevProps: any, prevState: any) {
    let { pathname } = this.props.location;
    if (prevProps.location.pathname !== pathname) {
      this.setState({
        selectedKeys: [pathname],
        openKeys: this.getOpenKeys(pathname),
      });
    }
  }

  // 只展开一个 SubMenu
  onOpenChange = (openKeys: Array<Menu>) => {
    if (openKeys.length === 0 || openKeys.length === 1) {
      this.setState({
        openKeys,
      });
      return;
    }

    // 最新展开的 SubMenu
    const latestOpenKey: any = openKeys[openKeys.length - 1];

    // 这里与定义的路由规则有关
    if (latestOpenKey.includes(openKeys[0])) {
      this.setState({
        openKeys,
      });
    } else {
      this.setState({
        openKeys: [latestOpenKey],
      });
    }
  };

  renderMenuItem = (item: any) => {
    const { key, icon, title } = item;
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <Icon type={icon} />}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    );
  };

  // 循环遍历数组中的子项 subs ，生成子级 menu
  renderSubMenu = (item: any) => {
    const { key, icon, title, subs } = item;
    return (
      <Menu.SubMenu
        key={key}
        title={
          <span>
            {icon && <Icon type={icon} />}
            <span>{title}</span>
          </span>
        }
      >
        {subs &&
          subs.map((item: any) => {
            return item.subs && item.subs.length > 0
              ? this.renderSubMenu(item)
              : this.renderMenuItem(item);
          })}
      </Menu.SubMenu>
    );
  };

  render() {
    let { openKeys, selectedKeys } = this.state;
    return (
      <Menu
        mode="inline"
        theme="dark"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onClick={({ key }) => this.setState({ selectedKeys: [key] })}
        onOpenChange={(item: any) => {
          this.onOpenChange(item);
        }}
      >
        {this.props.menu &&
          this.props.menu.map((item) => {
            return item.subs && item.subs.length > 0
              ? this.renderSubMenu(item)
              : this.renderMenuItem(item);
          })}
      </Menu>
    );
  }
}
 

export default withRouter(CustomMenu);
