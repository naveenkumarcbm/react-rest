import React, { useState } from "react";
import { Form, Input, Button, Select, Row, Col, Collapse } from "antd";
import { RestClientService } from "../../service/RestClientService";
const { Option } = Select;
const { Panel } = Collapse;
const { TextArea } = Input;

const InputPanel = () => {
  const formRef = React.createRef();
  const [showBody, setShowBody] = useState(0);
  const [showResp, setShowResp] = useState(0);
  const [resBody, setResBody] = useState(0);

  const onChange = (value) => {
    if (value && !["get", "delete"].some((m) => m === value)) setShowBody(1);
    else setShowBody(0);
  };
  const onFinish = async (values) => {
    console.log(values);
    const { method, url, body={} } = values;
    const resp = await RestClientService[method](url, body);
    setResBody(resp);
    setShowResp(1)
  };

  return (
    <Form ref={formRef} name="control-ref" onFinish={onFinish}>
      <Row>
        <Col span={4}>
          <Form.Item
            name="method"
            label="Method"
            rules={[
              {
                required: true,
                message: "Required",
              },
            ]}
          >
            <Select
              placeholder="Select methods:"
              onChange={onChange}
              allowClear
            >
              <Option value="get">Get</Option>
              <Option value="put">Put</Option>
              <Option value="Post">Post</Option>
              <Option value="delete">Delete</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col offset={1} span={14}>
          <Form.Item
            name="url"
            label="URL"
            allowClear
            placeholder="https://xyz.com/api"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col offset={1}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Col>
      </Row>
      <Collapse accordion={true} activeKey={showBody}>
        <Panel header="Body" key="1">
          <Form.Item name="body">
            <TextArea allowClear size="large" />
          </Form.Item>
        </Panel>
      </Collapse>
      <Collapse accordion={true} activeKey={showResp}>
        <Panel header="Response" key="1">
        <div><pre>{JSON.stringify(resBody, null, 2) }</pre></div>
        </Panel>
      </Collapse>
    </Form>
  );
};

export default InputPanel;
