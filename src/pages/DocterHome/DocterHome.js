import {
    Breadcrumb,
    Card,
    Col,
    Comment,
    List,
    PageHeader,
    Row,
    Tooltip,
    Typography,
    Button,
    Form,
    Input,
    Skeleton, Divider
} from "antd";
import React, {Component, createElement, useState} from "react";
import './DocterHome.css'
import Layout, {Header} from "antd/es/layout/layout";
import {ArrowLeftOutlined} from "@ant-design/icons";
import Panel from "../../Components/Panel";
import Lu from "../../assets/Lu.jpg";import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import Avatar from "antd/es/avatar/avatar";
import TextArea from "antd/es/input/TextArea";
import {doctorList} from "../../MockData/cardData";
import VirtualList from 'rc-virtual-list';
import * as PropTypes from "prop-types";



const { Paragraph, Text, Title} = Typography;

const titleStyle={
    color: 'rgb(255,255,255)',
    strong: 'true',
}
const ArrowStyle={
    color: 'rgb(255,255,255)',
    strong: 'true',
    fontSize:'20px',
    margin:'5px'
}
const changeColor = (e) => {

}
const imgStyle={
    width:'180px',
    height:'180px',
    marginLeft:'0%'
}
function Example() {

}
const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
);


function InfiniteScroll(props) {
    return null;
}

InfiniteScroll.propTypes = {
    loader: PropTypes.element,
    next: PropTypes.any,
    scrollableTarget: PropTypes.string,
    hasMore: PropTypes.bool,
    endMessage: PropTypes.element,
    dataLength: PropTypes.number,
    children: PropTypes.node
};

class DoctorHome extends Component {


    state = {
        doctorData:{
            name:"李胜银",
            jobLevel:"主治医师",
            department:"骨伤科",
            brief:"We supply a series of design principles, practical patterns and high quality design\n" +
                "                        resources (Sketch and Axure), to help people create their product prototypes beautifully and\n" +
                "                        efficiently."
        },
        data: [
            {
                likes: 12,
                dislikes: 5,
                likeState:0,
                author: 'Han Solo',
                avatar: 'https://joeschmoe.io/api/v1/random',
                content: (
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully and
                        efficiently.
                    </p>
                )
            },
            {
                likes: 10,
                dislikes: 3,
                actions: 0,
                author: 'Han Solo',
                avatar: 'https://joeschmoe.io/api/v1/random',
                content: (
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully and
                        efficiently.
                    </p>
                )
            },
        ]
    };

    like(e,n) {
        const pdata= [...this.state.data];   //浅拷贝一下

        if(pdata[n].likeState!==1){
            var t_like=pdata[n].likes+1;
            var t_dislike=pdata[n].dislikes;
            if(pdata[n].likeState===2){
                t_dislike=t_dislike-1
            }
            console.log(t_like)
            console.log(t_dislike)
            this.setState({
                data:pdata.map((item,key)=>key === n?{...item,likes: t_like,dislikes: t_dislike,likeState: 1}:item)
            });
            console.log("111")
        }
    };

    dislike(e,n) {
        const ndata= [...this.state.data];   //浅拷贝一下

        if(ndata[n].likeState!==2){
            var t_like=ndata[n].likes;
            var t_dislike=ndata[n].dislikes+1;
            if(ndata[n].likeState===1){
                t_like=t_like-1
            }
            console.log(t_like)
            console.log(t_dislike)
            this.setState({
                data:ndata.map((item,key)=>key === n?{...item,likes: t_like,dislikes: t_dislike,likeState: 2}:item)
            });
            console.log("111")
        }
    };

    onChange(){

    }
    onSubmit(){

    }
    loadMoreData(){

    }

    render() {
        return (
            <Layout className="layout" style={{height: "10px"}}>
                <Header style={{backgroundColor: '#007bff'}}>
                    <Breadcrumb style={{margin: '16px 0'}} className="breadCrumb">
                        <ArrowLeftOutlined
                            onClick={() => window.history.back()}
                            style={ArrowStyle}/>
                        <div style={{width: '10px'}}/>
                        <Title level={4} style={titleStyle}>医生主页</Title>
                        <Row gutter={16}>
                        </Row>
                    </Breadcrumb>
                </Header>
                <div className="first_layer">
                    <Row gutter={56}>
                        <Col span={4}/>
                        <Col span={6}>
                            <img src={Lu} style={imgStyle} className='image'/>
                            <Title level={5} className="Name">{this.state.doctorData.name}</Title>
                        </Col>
                        <Col span={1}/>
                        <Col span={8}>
                            <Title>9.8 分</Title>
                            <div class="Text">已有35人参与打分</div>
                            <div className="Text">职称：{this.state.doctorData.jobLevel}</div>
                            <div className="Text">所属科室：{this.state.doctorData.department}</div>
                            <Paragraph  className="text1">简介: {this.state.doctorData.brief}
                            </Paragraph>
                        </Col>
                        <Col span={6}/>
                    </Row>
                    <div className="interval"/>
                    <Card hoverable className="Comments">
                        <div
                            id="scrollableDiv"
                            style={{
                                height: 400,
                                overflow: 'auto',
                                padding: '0 16px',
                                border: '1px solid rgba(140, 140, 140, 0.35)',
                            }}
                        >
                        <List
                            className="comment-list"
                            header={`该医生共收到 ${this.state.data.length} 条评价`}
                            itemLayout="horizontal"
                            dataSource={this.state.data}
                            renderItem={(item,index) => (
                                <li key={index}>
                                    <Comment
                                        actions={
                                            [<Tooltip key="comment-basic-like" title="Like">
                                            <span onClick={(e)=>this.like(e,index)}>
                                                {React.createElement(item.likeState === 1 ? LikeFilled : LikeOutlined)}
                                                <span className="comment-action">{item.likes}</span>
                                            </span>
                                            </Tooltip>,
                                            <Tooltip key="comment-basic-like" title="Dislike">
                                            <span onClick={(e)=>this.dislike(e,index)}>
                                                {React.createElement(item.likeState === 2 ? DislikeFilled : DislikeOutlined)}
                                                <span className="comment-action">{item.dislikes}</span>
                                            </span>
                                            </Tooltip>
                                            ]
                                        }
                                        author={item.author}
                                        avatar={item.avatar}
                                        content={item.content}
                                    />
                                </li>
                            )}
                        />
                        </div>
                    </Card>
                    <div className="interval"/>
                    <Card  className="TextArea">
                    <div className="interval"/>
                    <Form.Item>
                        <TextArea rows={4} showCount onChange={this.onChange}  />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" loading={false} onClick={this.onSubmit} type="primary">
                            提交评价
                        </Button>
                    </Form.Item>
                    </Card>
                </div>
            </Layout>
        );
    }

}

export default  DoctorHome;
