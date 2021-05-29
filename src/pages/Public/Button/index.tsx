import React, { Component } from "react";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import "@/styles/view-style/buttons.scss";

import { Layout, Row, Col, Button, Divider } from "antd";
import Icon from "@/components/Icon";

const ButtonGroup = Button.Group;

class ButtonView extends Component {
  state = {
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };
  render() {
    return (
      <Layout className="button animated fadeIn">
        <div>
          <CustomBreadcrumb arr={["通用", "按钮"]}></CustomBreadcrumb>
        </div>
        <div className="base-style">
          <h3>何时使用</h3>
          <Divider />
          <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
        </div>
        <div>
          <Row gutter={8}>
            <Col span={12}>
              <div className="base-style">
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="ghost">Danger</Button>
                <Button type="link">Link</Button>
              </div>
              <div className="base-style">
                <Button type="primary" loading>
                  Loading
                </Button>
                <Button type="primary" size="small" loading>
                  Loading
                </Button>
                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                  Click me!
                </Button>
                <Button
                  type="primary"
                  icon={<Icon type="PoweroffOutlined" />}
                  loading={this.state.iconLoading}
                  onClick={this.enterIconLoading}
                >
                  Click me!
                </Button>
                <Button type="primary" loading />
                <Button type="primary" shape="circle" loading />
                <Button type="ghost" shape="round" loading />
              </div>
              <div className="base-style">
                <h4>Basic</h4>
                <ButtonGroup>
                  <Button>large</Button>
                  <Button>small</Button>
                  <Button>mini</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button disabled>L</Button>
                  <Button disabled>M</Button>
                  <Button disabled>R</Button>
                </ButtonGroup>

                <h4>With Icon</h4>
                <ButtonGroup>
                  <Button type="primary">
                    <Icon type="LeftOutlined" />
                    Go back
                  </Button>
                  <Button type="primary">
                    Go forward
                    <Icon type="RightOutlined" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button type="primary" icon={<Icon type="CloudOutlined" />} />
                  <Button type="primary" icon={<Icon type="CloudDownloadOutlined" />} />
                </ButtonGroup>
                <ButtonGroup>
                  <Button type="primary" size="small" icon={<Icon type="CloudOutlined" />} />
                  <Button
                    type="primary"
                    size="small"
                    icon={<Icon type="CloudDownloadOutlined" />}
                  />
                </ButtonGroup>
              </div>
            </Col>
            <Col span={12}>
              <div className="base-style">
                <Button type="primary" shape="circle" icon={<Icon type="SearchOutlined" />} />
                <Button type="primary" shape="circle">
                  A
                </Button>
                <Button type="primary" icon={<Icon type="SearchOutlined" />}>
                  Search
                </Button>
                <Button shape="circle" icon={<Icon type="SearchOutlined" />} />
                <Button icon={<Icon type="SearchOutlined" />}>Search</Button>
                <Button type="dashed" shape="circle" icon={<Icon type="SearchOutlined" />} />
                <Button type="dashed" icon={<Icon type="SearchOutlined" />}>
                  Search
                </Button>
              </div>
              <div className="base-style">
                <Button type="primary">Primary</Button>
                <Button type="primary" disabled>
                  Primary(disabled)
                </Button>
                <Button>Default</Button>
                <Button disabled>Default(disabled)</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="dashed" disabled>
                  Dashed(disabled)
                </Button>
              </div>
              <div className="base-style">
                <Button type="primary" block>
                  Primary
                </Button>
                <Button block>Default</Button>
                <Button type="dashed" block>
                  Dashed
                </Button>
                <Button type="ghost" block>
                  Danger
                </Button>
                <Button type="link" block>
                  Link
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default ButtonView;
