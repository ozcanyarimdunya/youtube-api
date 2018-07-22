import React, {Component} from 'react';

import './index.css';

import {Layout, Icon} from 'antd';
import LeftMenu from "./LeftMenu";
import {Provider} from 'react-redux';

import store from "../store";
import Post from "../Post";

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
            <Provider store={store}>
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
                            <Post/>
                        </Content>
                        <Footer>
                            @Copyright
                        </Footer>
                    </Layout>
                </Layout>
            </Provider>
        );
    }
}

export default App;