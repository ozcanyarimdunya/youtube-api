import React, {Component} from 'react';
import {Form, Select} from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;

class Operation extends Component {
    handleChange = (e) => {
        console.log(":: ", e)
    };

    render() {

        return (
            <Form layout="inline">
                <FormItem
                    // label="Select "
                    // labelCol={{span: 2}}
                    // wrapperCol={{span: 4}}
                >
                    <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Please select"
                        defaultValue={['video']}
                        onChange={this.handleChange}
                    >
                        <Option key="1" value="video">video</Option>
                        <Option key="2" value="playlist">playlist</Option>
                        <Option key="3" value="channel">channel</Option>
                    </Select>
                </FormItem>
                <FormItem
                    // label="Select "
                    // labelCol={{span: 2}}
                    // wrapperCol={{span: 4}}
                >
                    <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Please select"
                        defaultValue={['video']}
                        onChange={this.handleChange}
                    >
                        <Option key="1" value="video">video</Option>
                        <Option key="2" value="playlist">playlist</Option>
                        <Option key="3" value="channel">channel</Option>
                    </Select>
                </FormItem>
            </Form>
        )
    }
}

export default Operation;