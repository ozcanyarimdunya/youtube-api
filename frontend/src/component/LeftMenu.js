import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Layout} from "antd/lib/index";

const {Sider} = Layout;

class LeftMenu extends Component {
    render() {
        const collapsed = this.props.collapsed;

        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user"/>
                        <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera"/>
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload"/>
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default LeftMenu;