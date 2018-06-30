import React, { Component } from 'react';
import { Input, Layout, Row, Col } from 'antd';
import { Picker } from 'emoji-mart';
import 'antd/dist/antd.css';
import 'emoji-mart/css/emoji-mart.css';
import './App.css';

const { TextArea } = Input;
const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <div className="title">Coin Language</div>
        </Header>
        <Content>
          <Row>
            <Col span={4}></Col>
            <Col span={16}>
              <TextArea
                placeholder="Write your core point"
                autosize={{ minRows: 3, maxRows: 7 }}
                />
              <Picker
                set='emojione'
                title='Coin Language'
                autoFocus='true'
                emojiTooltip='true'
                />
            </Col>
            <Col span={4}></Col>
          </Row>
        </Content>
        <Footer>
          Create your own icon-word (coming-soon)
        </Footer>
      </div>
    );
  }
}

export default App;
