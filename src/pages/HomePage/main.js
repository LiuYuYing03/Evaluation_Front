import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './main.css';
import {Card,Layout, Menu, Breadcrumb, Dropdown, Col, Row, Avatar, Button, Drawer, Space, List} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Tags from "../../Components/Panel";
import SearchBar from '../../Components/search'
import Show from '../../Components/Card'
import { Typography, Switch } from 'antd';
import Search from "antd/es/input/Search";
import {doctorList} from '../../MockData/cardData'

const { Header, Content, Footer } = Layout;


const { Paragraph, Text, Title} = Typography;

const titleStyle={
    color: 'rgb(255,255,255)',
    strong: 'true',
}
const searchStyle={
    size:'20%'
}
const cardStyle={
    marginTop:'10px'
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
const onSearch = value => console.log(value);

class HomePage extends Component {
    state={
        Visible:false
    }

    showDrawer(e) {
        console.log(111)
        let myVisi=true
        this.setState({
            Visible:myVisi
        });
        console.log(this.state.Visible)
    };

    onClose (e) {
        let myVisi=false
        this.setState({
            Visible:myVisi
        });
        console.log(this.state.Visible)
    };
    //需要完成至少两个函数
    searchDoctor(e){
        this.showDrawer(e)
    }
    goDetail(e){
        //进行后端数据请求
        console.log("go detail")
        var that=this
        var formData = new FormData();
        var url="http://localhost:8080/test"
        for(let k in that.params){
            formData.append(k, that.params[k]);
        }
        formData.append('oper_id', '11');
        formData.append('oper_name', 'kong');
        fetch(url, {
            method : 'POST',
            mode : 'cors',
            body : formData
        }).then(function(res){
            if(res.ok){
                res.json().then(function(data){
                    console.log(data)
                    console.log("success");
                })
            }else{
                console.log('请求失败');
            }
        }, function(e){
            console.log('请求失败');
        })
    }

    render() {
        return (
            <Layout className="layout">
                <Header style={{backgroundColor: '#007bff'}}>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={8}>
                            <div style={style}>
                                <Breadcrumb style={{margin: '16px 0'}} className="breadCrumb">
                                    <Title level={4} style={titleStyle}>浙大七院医生评价系统</Title>
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
                            <div style={style} className="headPic" align="center">
                                <Dropdown.Button overlay={menu} size={"large"}
                                                 style={{marginTop: '5px'}} icon={<UserOutlined/>}>
                                </Dropdown.Button>
                            </div>
                        </Col>
                    </Row>

                </Header>
                <Content style={{padding: '0 100px'}}>
                    <div className="blank">
                    </div>
                    <div className="search">
                        <Space direction="vertical">
                            <Search placeholder="请输入医生姓名" onSearch={(e)=>this.searchDoctor(e)} enterButton  size={"large"}
                                    style={{width:"200%"}}  />
                        </Space>
                    </div>
                    <Tags/>
                    <div className="blank">
                    </div>
                    <Show/>

                    <Drawer title="搜索结果" placement="right" onClose={(e)=>this.onClose(e)} visible={this.state.Visible}>
                        <List
                            className="comment-list"
                            itemLayout="horizontal"
                            dataSource={doctorList}
                            renderItem={(item, index) => (
                                <li key={index}>
                                    <div style={cardStyle}>
                                        <Card hoverable onClick={(e)=>this.goDetail(e)}>
                                            <Title level={4}>{item.name}</Title>
                                                <div>{item.title}</div>
                                                <div>{item.detail}</div>
                                            </Card>
                                    </div>
                                </li>
                            )}
                        />
                    </Drawer>
                </Content>
                <Footer style={{textAlign: 'center'}}>Doctor Evaluation Created by Ming</Footer>
            </Layout>
        );
    }
};
export default HomePage;
