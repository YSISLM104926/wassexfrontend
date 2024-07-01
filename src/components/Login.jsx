import { Button, Checkbox, Form, Input } from "antd";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const onFinish = (values) => {
    console.log(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-[40px] mb-[200px] shadow-2xl">
        <div className="w-full lg:w-1/2 p-12 flex flex-col items-center justify-center lg:py-[130px] rounded-2xl">
          <div>
            <h1 className="font-bold text-2xl mb-6">Login Form</h1>
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
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input styles={{ width: '100%' }} style={{ padding: '8px' }} name="email" placeholder="email here" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password style={{ padding: '8px' }} name="password" placeholder="password here" />
            </Form.Item>
            <p className="text-end">don't have an account? <Link to='/register'><span className="underline text-blue-500 hover:cursor-pointer">register now</span></Link></p>
            <Button type="none" className="bg-black w-full py-[17px] mt-2 text-white hover:bg-black hover:text-white" htmlType="submit">
              Submit
            </Button>
          </Form>
          <Button type="" className="py-[17px] mt-[17px] w-full" htmlType="submit">
            <FaGoogle />Google
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
