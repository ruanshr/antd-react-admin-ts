import React from "react";
import "../../styles/view-style/login.scss";
import { Layout, Input, Form, Button, Divider, message, notification } from "antd";
import Icon from "../../components/Icon";
import { withRouter } from "react-router-dom";
// import axios from '@/api'
// import { API } from '@/api/config'
import "../../styles/view-style/login.scss";

const Login = (props: any) => {
  const [form] = Form.useForm<any>();
  const [loading, setLoading] = React.useState({
    loading: false,
  });

  const enterLoading = () => {
    setLoading({ loading: true });
  };
  let timer: any = null;
  const handleSubmit = (...args: any[]) => {
    console.log(args);
    form.validateFields().then((values) => {
      // 这里可以做权限校验 模拟接口返回用户权限标识
      switch (values.username) {
        case "admin":
          values.auth = 0;
          break;
        default:
          values.auth = 1;
      }

      localStorage.setItem("user", JSON.stringify(values));
      enterLoading();
      // timer = setTimeout(() => {
      message.success("登录成功!");
      props.history.push("/");
      // }, 2000);
    });
  };

  const handleFail = () => {
    console.log("-------------");
  };
  React.useEffect(() => {
    notification.open({
      message: "欢迎使用后台管理平台",
      duration: null,
      description: "账号 admin(管理员) 其他(游客) 密码随意",
    });
    return () => {
      notification.destroy();
      timer && clearTimeout(timer);
    };
  });

  return (
    <Layout className="login animated fadeIn">
      <div className="model">
        <div className="login-form">
          <h3>后台管理系统</h3>
          <Divider />
          <Form form={form} onFinish={handleSubmit} onFinishFailed={handleFail}>
            <Form.Item
              name="username"
              label="用户名"
              rules={[{ required: true, message: "请输入用户名!" }]}
            >
              <Input
                prefix={<Icon type="UserOutlined" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="密&nbsp;码"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input
                prefix={<Icon type="LockOutlined" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={loading.loading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Login);
