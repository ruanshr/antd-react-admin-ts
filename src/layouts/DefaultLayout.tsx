import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, BackTop, message } from "antd";
import routes from "../routes";
import { menuToggleAction } from "../store/actionCreators";
import * as echarts from "echarts";
import avatar from "../assets/images/user.jpg";
import menu from "./Menu";
import "../styles/layout.scss";

import AppHeader from "./AppHeader";
import AppAside from "./AppAside";
import AppFooter from "./AppFooter";

const { Content } = Layout;
interface IDefaultLayoutProps {
  location: any;
  history: any;
  menuClick: any;
  menuToggle: any;
}

interface IDefaultLayoutState {
  avatar: any;
  show: boolean;
  menu: any[];
}
export class DefaultLayout extends Component<IDefaultLayoutProps, IDefaultLayoutState> {
  timer: any = null;
  state = {
    avatar,
    show: true,
    menu: [],
  };

  isLogin = () => {
    if (!localStorage.getItem("user")) {
      this.props.history.push("/login");
    } else {
      this.setState({
        menu: this.getMenu(menu),
      });
    }
  };

  loginOut = () => {
    localStorage.clear();
    this.props.history.push("/login");
    message.success("登出成功!");
  };
  getMenu = (menu: any) => {
    let newMenu,
      auth = JSON.parse(localStorage.getItem("user") || '{"auth":false}').auth;
    if (!auth) {
      return menu;
    } else {
      newMenu = menu.filter((res: any) => res.auth && res.auth.indexOf(auth) !== -1);
      return newMenu;
    }
  };

  componentDidMount() {
    this.isLogin();
  }

  componentDidUpdate() {
    let { pathname } = this.props.location;

    // 菜单收缩展开时 echarts 图表的自适应
    if (pathname === "/" || pathname === "/index") {
      this.timer = setTimeout(() => {
        const $bar = document.querySelector("#bar") as unknown as HTMLDivElement;

        echarts.init($bar).resize();

        const $line = document.querySelector("#line") as unknown as HTMLDivElement;

        echarts.init($line).resize();

        const $pie = document.querySelector("#pie") as unknown as HTMLDivElement;

        echarts.init($pie).resize();

        const $pictorialBar = document.querySelector("#pictorialBar") as unknown as HTMLDivElement;

        echarts.init($pictorialBar).resize();

        const $scatter = document.querySelector("#scatter") as unknown as HTMLDivElement;

        echarts.init($scatter).resize();
      }, 500);
    } else {
      this.timer = null;
    }
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    let { menuClick, menuToggle } = this.props;
    let { auth } = JSON.parse(localStorage.getItem("user") || '{"auth":false}') || {};
    return (
      <Layout className="app">
        <BackTop />
        <AppAside menuToggle={menuToggle} menu={this.state.menu} />
        <Layout
          style={{
            marginLeft: menuToggle ? "80px" : "200px",
            minHeight: "100vh",
          }}
        >
          <AppHeader
            menuToggle={menuToggle}
            menuClick={menuClick}
            avatar={this.state.avatar}
            show={this.state.show}
            loginOut={this.loginOut}
          />
          <Content className="content">
            <Switch>
              {routes.map((item: any) => {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    exact={item.exact}
                    render={(props) =>
                      !auth ? (
                        <item.component {...props} />
                      ) : item.auth && item.auth.indexOf(auth) !== -1 ? (
                        <item.component {...props} />
                      ) : (
                        // 这里也可以跳转到 403 页面
                        <Redirect to="/404" {...props} />
                      )
                    }
                  ></Route>
                );
              })}
              <Redirect to="/404" />
            </Switch>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    );
  }
}

const stateToProp = (state: any) => ({
  menuToggle: state.menuToggle,
});

const dispatchToProp = (dispatch: any) => ({
  menuClick() {
    dispatch(menuToggleAction());
  },
});

export default withRouter(connect(stateToProp, dispatchToProp)(DefaultLayout));
