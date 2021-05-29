import { Layout } from "antd";
import Icon from "../components/Icon";
import CustomMenu from "../components/CustomMenu";

const { Sider } = Layout;

const AppAside = (props: any) => {
  let { menuToggle, menu } = props;
  return (
    <Sider className="aside" collapsed={menuToggle}>
      <div className="logo">
        <a rel="noopener noreferrer" href="https://github.com/ruanshr" target="_blank">
          <Icon type="GithubOutlined" style={{ fontSize: "3.8rem", color: "#fff" }} />
        </a>
      </div>
      <CustomMenu menu={menu}></CustomMenu>
    </Sider>
  );
};

export default AppAside;
