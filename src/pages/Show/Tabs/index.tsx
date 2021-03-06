import React, { Component } from "react";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { Layout, Divider, Row, Col, Tabs, Select, Radio, Button } from "antd";
import Icon from "@/components/Icon";

const { TabPane } = Tabs;
const { Option } = Select;

function callback(key: any) {
  console.log(key);
}

const panes = [
  { title: "Tab 1", content: "Content of Tab Pane 1", key: "1" },
  { title: "Tab 2", content: "Content of Tab Pane 2", key: "2" },
];

interface ITabsState {
  activeKey: any;
  panes: any[];
  tabPosition: any;
  size: any;
}
class TabsViews extends Component {
  state: ITabsState = {
    activeKey: panes[0].key,
    panes,
    tabPosition: "top",
    size: "small",
  };
  newTabIndex = 0;

  changeTabPosition = (tabPosition: any) => {
    this.setState({ tabPosition });
  };

  onChange = (e: any) => {
    this.setState({ size: e.target.value });
  };

  onTabsChange = (activeKey: string) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey: string, action: keyof TabsViews) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: "New Tab", content: "New Tab Pane", key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = (targetKey: string) => {
    let { activeKey } = this.state;
    let lastIndex: number = -1;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter((pane) => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    const { size, tabPosition, activeKey, panes } = this.state;
    return (
      <Layout className="animated fadeIn">
        <div>
          <CustomBreadcrumb arr={["??????", "?????????"]}></CustomBreadcrumb>
        </div>
        <div className="base-style">
          <h3>????????????</h3>
          <Divider />
          <p>??????????????????????????????????????????????????????????????????????????????</p>
          <p>Ant Design ????????????????????????????????????????????????????????????</p>
          <p>- ????????????????????????????????????????????????????????????????????????</p>
          <p>- ????????????????????????????????????????????????????????????????????????????????? Tabs???</p>
          <p>- RadioButton ???????????????????????????????????????</p>
        </div>
        <Row gutter={8}>
          <Col span={12}>
            <div className="base-style">
              <Divider orientation="left">??????</Divider>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2" disabled>
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </div>
            <div className="base-style">
              <Divider orientation="left">????????????</Divider>
              <div>
                <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
                  <Radio.Button value="small">Small</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
                <Tabs defaultActiveKey="1" size={size}>
                  <TabPane tab="Tab 1" key="1">
                    Content of tab 1
                  </TabPane>
                  <TabPane tab="Tab 2" key="2">
                    Content of tab 2
                  </TabPane>
                  <TabPane tab="Tab 3" key="3">
                    Content of tab 3
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="base-style">
              <Divider orientation="left">??????????????????</Divider>
              <div>
                <div style={{ marginBottom: 16 }}>
                  Tab position???
                  <Select
                    value={tabPosition}
                    onChange={this.changeTabPosition}
                    dropdownMatchSelectWidth={false}
                  >
                    <Option value="top">top</Option>
                    <Option value="bottom">bottom</Option>
                    <Option value="left">left</Option>
                    <Option value="right">right</Option>
                  </Select>
                </div>
                <Tabs tabPosition={tabPosition}>
                  <TabPane tab="Tab 1" key="1">
                    Content of Tab 1
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <Icon type="AndroidOutlined" />
                        Tab 2
                      </span>
                    }
                    key="2"
                  >
                    Content of Tab 2
                  </TabPane>
                  <TabPane tab="Tab 3" key="3">
                    Content of Tab 3
                  </TabPane>
                </Tabs>
              </div>
            </div>
            <div className="base-style">
              <Divider orientation="left">???????????????</Divider>
              <div>
                <div style={{ marginBottom: 16 }}>
                  <Button onClick={this.add}>ADD</Button>
                </div>
                <Tabs
                  hideAdd
                  onChange={this.onTabsChange}
                  activeKey={activeKey}
                  type="editable-card"
                  onEdit={() => this.onEdit}
                >
                  {panes.map((pane) => (
                    <TabPane tab={pane.title} key={pane.key}>
                      {pane.content}
                    </TabPane>
                  ))}
                </Tabs>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default TabsViews;
