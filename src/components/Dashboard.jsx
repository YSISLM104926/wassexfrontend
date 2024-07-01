import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';


import { Button, Menu } from 'antd';
import Navbar from './shared/Navbar';

const items = [
    { key: '1', icon: <MenuUnfoldOutlined />, label: 'Option 1' },
    { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
    { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
    { key: '4', icon: <ContainerOutlined />, label: 'Option 4' },
    { key: '5', icon: <ContainerOutlined />, label: 'Option 5' },
    { key: '6', icon: <ContainerOutlined />, label: 'Option 6' },
];

const Dashboard = () => {

    return (
        <div>
            <Navbar />
            <div style={{ width: 300, height: 1000 }}>
                <Menu
                    className='lg:hidden'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed
                    items={items}
                />
                <Menu
                    className='hidden lg:block'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
            </div>
        </div>
    );
};

export default Dashboard;