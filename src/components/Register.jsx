import { Button, Checkbox, Form, Input } from "antd";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const Register = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-[40px] mb-[200px] shadow-2xl">
        <div className="w-full lg:w-full p-12 flex flex-col items-center justify-center lg:py-[130px] rounded-2xl">
          <div>
            <h1 className="font-bold text-2xl mb-6">Register Form</h1>
          </div>
          <Form
            name="layout-multiple-vertical"
            layout="vertical"
            style={{ width: '100%' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="grid lg:grid-cols-2 gap-x-6">
              <Form.Item label="First Name" name="first_name">
                <Input styles={{ width: '100%' }} style={{ padding: '8px' }} />
              </Form.Item>
              <Form.Item label="Last Name" name="last_name">
                <Input style={{ padding: '8px' }} />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input style={{ padding: '8px' }} />
              </Form.Item>
              <Form.Item label="Phone Number" name="Phone Number">
                <Input style={{ padding: '8px' }} />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input.Password style={{ padding: '8px' }} />
              </Form.Item>
              <Form.Item label="Retype Password" name="val_password">
                <Input.Password style={{ padding: '8px' }} />
              </Form.Item>
            </div>
            <Button type="none" className="bg-black w-full py-[20px] text-white hover:bg-black hover:text-white" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
