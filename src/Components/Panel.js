import {Card, Button,Divider} from "antd";
import React,{useState}from "react";
import '../CSS/Panel.css'
// import Logo from '../assets/logo192.png'
// import Lu from '../assets/Lu.jpg'
import { Typography } from 'antd';
// import {getTwoToneColor} from "@ant-design/icons";
import {commonD} from "../MockData/depaData";
// import {doctorList} from "../MockData/cardData";

const { Text, Link } = Typography;

const imgStyle={
    width:'80px',
    height:'80px',
    float:'auto',
}
const { Paragraph,Title } = Typography;
const buttonStyle1={
    backgroundColor: "#f0f5f4",
    borderColor: "#ffffff",
    textAlign:'center',
    width: '150px',
    height: '30px'
}
var isClick=false;
const buttonStyle2={
    backgroundColor: "rgb(240,242,245)",
    borderColor: "#5c3289",
}
const changeColor = (e) => {
    e.target.style.backgroundColor="rgb(131,209,255)"
};
const recoverColor = (e) => {
    console.log(false)
    e.target.style.backgroundColor="rgb(240,242,245)"
};
const clickColor = (e) =>{
    isClick=true;
    changeColor(e);
}
const textColor={
    color: '#0e0e0e',
    strong: 'true',
}
const changeTextColor = (e) => {
    e.target.style.color='#007bff'
}
var tList=commonD;

export default () => {
    const [ellipsis, setEllipsis] = React.useState(true);
    const [size, setSize] = useState();

    return (
        <Card hoverable className="showClass">
            <div className="Left">
                <div className="tagButton">
                    <Title level={2} style={textColor} onClick={changeTextColor}>
                        常见科室
                    </Title>
                </div>
                <div className="tagButton">
                    <Title level={2} style={textColor} onClick={changeTextColor}>
                        内科
                    </Title>
                </div>
                <div className="tagButton">
                    <Title level={2} style={textColor} onClick={changeTextColor}>
                        外科
                    </Title>
                </div>
                <div className="tagButton">
                    <Title level={2} style={textColor} onClick={changeTextColor}>
                        其他
                    </Title>
                </div>
            </div>
            <Divider className="mDivider"/>
            <div className="dContainer">
                {
                    tList.map((value,index)=>{
                        return (
                            <div className="tagButton" key={index} >
                                <Button type="primary" style={buttonStyle1} size={size}
                                        onMouseEnter={changeColor} onMouseLeave={recoverColor} >
                                    <Text strong={true}>{value}</Text>
                                </Button>
                            </div>
                        )
                    })
                }

            </div>
        </Card>
    );
};
