import React from 'react';
import 'antd/dist/antd.css';
import './main.css';
import { Layout, Menu, Breadcrumb,Dropdown,Col,Row,Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Tags from "../../Components/Panel";
import SearchBar from '../../Components/search'
import Show from '../../Components/Card'
import { Typography, Switch } from 'antd';
const { Header, Content, Footer } = Layout;


const { Paragraph, Text, Title} = Typography;

const titleStyle={
    color: 'rgb(255,255,255)',
    strong: 'true',
}
const style = { background: '#007bff' };

const menu = (
    <Menu
        items={[
            {
                label: "1st menu item",
                key: "1",
                icon: <UserOutlined />
            },
            {
                label: "2nd menu item",
                key: "2",
                icon: <UserOutlined />
            },
            {
                label: "3rd menu item",
                key: "3",
                icon: <UserOutlined />
            }
        ]}
    />
);


const HomePage = () => (
    <Layout className="layout">
        <Header style={{ backgroundColor:'#007bff'}}>
            <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                    <div style={style}>
                        <Breadcrumb style={{ margin: '16px 0' }} className="breadCrumb">
                            <Title level={4} style={titleStyle} >浙大七院医生评价系统</Title>
                            <Row gutter={16}>
                            </Row>
                        </Breadcrumb>
                    </div>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div style={style}/>
                </Col>
                <Col className="gutter-row" span={4}>
                    <div style={style}/>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div style={style}/>
                </Col>
                <Col className="gutter-row" span={2}>
                    <div style={style} className="headPic" align= "center">
                        <Dropdown.Button overlay={menu} size={"large"}
                                         style={{marginTop:'5px'}} icon={<UserOutlined />}>
                        </Dropdown.Button>
                    </div>
                </Col>
            </Row>

        </Header>
        <Content style={{ padding: '0 100px' }}>
            <div className="blank">
            </div>
            <div  className="search">
                <SearchBar className="searchText" />
            </div>
            <Tags />
            <div className="blank">
            </div>
            <Show />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Doctor Evaluation Created by Ming</Footer>
    </Layout>
);
export default HomePage;
