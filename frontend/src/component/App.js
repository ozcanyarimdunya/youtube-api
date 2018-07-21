import React, {Component} from 'react';

import './App.css';

import {Layout, Icon} from 'antd';
import LeftMenu from "./LeftMenu";

const {Header, Content, Footer} = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <LeftMenu collapsed={this.state.collapsed}/>
                <Layout>
                    <Header className="header">
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content className="content">
                    </Content>
                    <Footer>
                        @Copyright
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;