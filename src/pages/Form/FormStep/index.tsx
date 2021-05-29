import React, { Component } from "react";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";
import { Layout, Divider, Row, Col, Steps, Button, Form, Input, Select, Alert, Result } from "antd";
import "../../../styles/view-style/form.scss";

const { Step } = Steps;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    offset: 8,
  },
};
interface IFormStepProp {
  getFormData: any;
  setCurrent: any;
}
interface IStep1Values {
  Email: any;
}
const Step1From = (props: IFormStepProp) => {
  const [form] = Form.useForm<IStep1Values>();
  const handleSelectChange = (value: any) => {
    form.setFieldsValue({
      Email: `${value === "kenan" ? "kenan@google.com" : "maoli@google.com"}`,
    });
  };

  const step1Submit = (e: any) => {
    e.preventDefault();
    form.validateFields().then((val: any) => {
      props.getFormData(val);
      props.setCurrent(1);
    });
  };
  return (
    <div>
      <Form
        hideRequiredMark
        {...formItemLayout}
        initialValues={{
          user: "柯南",
          email: "kenan@google.com",
          password: "真相只有一个!",
          type: "",
        }}
      >
        <Form.Item label="接收人" name="user" rules={[{ required: true, message: "请选择接收人" }]}>
          <Select onChange={handleSelectChange}>
            <Option value="柯南">柯南</Option>
            <Option value="毛利大叔">毛利大叔</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="接收邮箱"
          name="email"
          rules={[{ required: true, message: "请选择接收人" }]}
        >
          <Select disabled>
            <Option value="kenan@google.com">kenan@google.com</Option>
            <Option value="maoli@google.com">maoli@google.com</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="暗号"
          name="password"
          rules={[{ required: true, message: "请输入对接暗号" }]}
        >
          <Input placeholder="请输入对接暗号" />
        </Form.Item>
        <Form.Item
          label="联系方式"
          name="type"
          rules={[{ required: true, message: "请输入联系方式" }]}
        >
          <Input.Group compact>
            <Select defaultValue="weibo">
              <Option value="twitter">twitter</Option>
              <Option value="facebook">facebook</Option>
              <Option value="weibo">微博</Option>
            </Select>
            <Input style={{ width: "50%" }} defaultValue="kenan" />
          </Input.Group>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" onClick={step1Submit}>
            下一步
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export interface IStep2FormState {
  visible: boolean;
  iconLoading: boolean;
}

export interface IStep2FormProps {
  setCurrent: any;
  formData: any;
}
class Step2From extends Component<IStep2FormProps, IStep2FormState> {
  state = {
    visible: true,
    iconLoading: false,
  };

  handleClose = () => {
    this.setState({ visible: false });
  };

  step2Submit = () => {
    this.setState({ iconLoading: true });
    setTimeout(() => {
      this.setState({ iconLoading: false });
      this.props.setCurrent(2);
    }, 2000);
  };
  step2Cancle = () => {
    this.props.setCurrent(0);
  };
  render() {
    const { formData } = this.props;
    return (
      <div>
        <Row>
          <Col span={8} offset={8}>
            {this.state.visible ? (
              <Alert
                message="请确保输入正确的暗号，不然他们可能不会理你哦!"
                type="warning"
                closable
                banner
                afterClose={this.handleClose}
                {...formItemLayout}
              />
            ) : null}
          </Col>
        </Row>
        <Form hideRequiredMark {...formItemLayout} className="show-data">
          <Form.Item label="接收人">{formData.User}</Form.Item>
          <Form.Item label="接收邮箱">{formData.Email}</Form.Item>
          <Form.Item label="暗号">{formData.Password}</Form.Item>
          <Form.Item label="联系渠道">{formData.Type}</Form.Item>
          <Form.Item label="联系方式">{formData.Code}</Form.Item>
          <Divider />
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" loading={this.state.iconLoading} onClick={this.step2Submit}>
              发送
            </Button>
            <Button onClick={this.step2Cancle}>上一步</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

interface IFormStepProp3 {
  setCurrent: any;
}
class Step3From extends Component<IFormStepProp3> {
  oneMore = () => {
    this.props.setCurrent(0);
  };
  render() {
    return (
      <Result
        status="success"
        title="发送成功!"
        subTitle="耐心地等待好消息吧!"
        extra={[
          <Button type="primary" key="console" onClick={this.oneMore}>
            再发一封
          </Button>,
          <Button key="buy">查看记录</Button>,
        ]}
      />
    );
  }
}

class FormStepView extends Component {
  state = {
    current: 0,
    formData: null,
  };

  getFormData = (val: any) => {
    this.setState({
      formData: val,
    });
  };

  setCurrent = (val: any) => {
    this.setState({
      current: val,
    });
  };

  render() {
    const { current, formData } = this.state;
    return (
      <Layout className="animated fadeIn">
        <div>
          <CustomBreadcrumb arr={["表单", "步骤表单"]}></CustomBreadcrumb>
        </div>
        <div className="base-style">
          <h3>何时使用</h3>
          <Divider />
          <p>当用户需要分步收集不同信息时</p>
        </div>
        <Row>
          <Col span={24}>
            <div className="base-style">
              <Divider orientation="left">分步表单</Divider>
              <div>
                <Steps style={{ margin: "3rem auto", maxWidth: "65rem" }} current={current}>
                  <Step title="填写接收信息"></Step>
                  <Step title="确认接收信息"></Step>
                  <Step title="完成"></Step>
                </Steps>

                {current === 0 && (
                  <Step1From getFormData={this.getFormData} setCurrent={this.setCurrent} />
                )}
                {current === 1 && <Step2From formData={formData} setCurrent={this.setCurrent} />}
                {current === 2 && <Step3From setCurrent={(value: any) => this.setCurrent(value)} />}
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default FormStepView;
