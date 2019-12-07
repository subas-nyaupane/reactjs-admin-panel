import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const formBuilder = function (props) {
    const {getFieldDecorator} = props.form;

    const formItemLayout = {
        labelCol: {span: 4},
        wrapperCol: {span: 8},
    };
    const formTailLayout = {
        labelCol: {span: 4},
        wrapperCol: {span: 8, offset: 4},
    };

    const handleChange = e => {
        // this.setState(
        //     {
        //         checkNick: e.target.checked,
        //     },
        //     () => {
        //         this.props.form.validateFields(['nickname'], { force: true });
        //     },
        // );
    };
    return (
        <div>
            <Form.Item {...formItemLayout} label="Name">
                {getFieldDecorator('username', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your name'
                        }
                    ]
                })(<Input placeholder="Please input your name" />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="Nickname">
                {getFieldDecorator('nickname', {
                    rules: [
                        {
                            message: 'Please input your nickname'
                        }
                    ]
                })(<Input placeholder="Please input your nickname" />)}
            </Form.Item>
            <Form.Item {...formTailLayout}>
                <Checkbox>
                    Nickname is required
                </Checkbox>
            </Form.Item>
            <Form.Item {...formTailLayout}>
                <Button type="primary">
                    Check
                </Button>
            </Form.Item>
        </div>
    );
};

const FormBuilder = Form.create({name: 'dynamic_rule'})(formBuilder);
export default FormBuilder;
