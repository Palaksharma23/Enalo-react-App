import React from "react";
import { Button, Form, Input, message, Upload, Col, Row } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const props = {
  name: "file",
  // headers: {
  //   authorization: "authorization-text",
  // },
  multiple: false,
  maxCount: 1,
  accept: ".pdf,.png,.jpeg,.jpg",
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  span: 24,
};
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const App = () => (
  <>
    <Row>
      <Col span={24}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row>
            <Col span={8}></Col>
            <Col span={8}>
              <Form.Item
                label="PAN Number"
                name="pannumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your PAN Number!",
                  },
                  {
                    pattern: "[A-Z]{5}[0-9]{4}[A-Z]{1}",
                    message: "Please input valid PAN Number",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}></Col>
          </Row>
          <Row>
            <Col span={8}></Col>
            <Col span={8}>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Col>
            <Col span={8}></Col>
          </Row>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </>
);
export default App;
