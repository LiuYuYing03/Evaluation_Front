import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../CSS/textArea.css';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
const { TextArea } = Input;



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

const App = (name) => {
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        if (!value) return;
        console.log(value)
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setValue('');
        }, 1000);
        var formData=new FormData();
        var url="http://localhost:8080/addComments"
        formData.append('doctor_name',name);//医生姓名
        formData.append('comment',value);//评论内容
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
                console.log('上传Comments请求失败');
            }
        }, function(e){
            console.log('上传Comments请求失败');
        })
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <>

            <Comment
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                    />
                }
            />
        </>
    );
};

export default App;
