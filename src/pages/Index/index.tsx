import React, { Component } from "react";
import { Layout, Row, Col, Divider } from "antd";
import Icon from "../../components/Icon";
import screenfull from "screenfull";
import "src/styles/view-style/index.scss";

import BarEcharts from "./components/Bar";
import PieEcharts from "./components/Pie";
import LineEcharts from "./components/Line";
import ScatterEcharts from "./components/Scatter";
import PictorialBarEcharts from "./components/PictorialBar";

class Index extends Component {
  fullToggle = () => {
    if (screenfull.isEnabled) {
      const bar: any = document.getElementById("bar");
      screenfull.request(bar);
    }
  };
  render() {
    return (
      <Layout className="index animated fadeIn">
        <Row gutter={24} className="index-header">
          <Col span={6}>
            <div className="base-style wechat">
              <Icon type="WechatOutlined" className="icon-style" />
              <div>
                <span>199</span>
                <div>微信</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style qq">
              <Icon type="QqOutlined" className="icon-style" />
              <div>
                <span>326</span>
                <div>QQ</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style dingding">
              <Icon type="DingdingOutlined" className="icon-style" />
              <div>
                <span>636</span>
                <div>钉钉</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style weibo">
              <Icon type="WeiboOutlined" className="icon-style" />
              <div>
                <span>679</span>
                <div>微博</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="base-style">
              <div className="bar-header">
                <div>图形全屏展示</div>
                <Icon
                  type="FullscreenOutlined"
                  style={{ cursor: "pointer" }}
                  onClick={this.fullToggle}
                />
              </div>
              <Divider />
              <BarEcharts />
            </div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="base-style">
              <LineEcharts />
            </div>
          </Col>
          <Col span={12}>
            <div className="base-style">
              <PieEcharts />
            </div>
          </Col>
          <Col span={12}>
            <div className="base-style">
              <ScatterEcharts />
            </div>
          </Col>
          <Col span={12}>
            <div className="base-style">
              <PictorialBarEcharts />
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Index;
