import { Button, Form, Input } from 'antd';

export default function ProfileSearchForm({ search }) {
    const [form] = Form.useForm();

    const onSubmitForm = ({ username }) => {
        search(username);
        form.resetFields();
    }

    const onSubmitFormFailed = (errInfo) => {
        console.log("Failed", errInfo);
    }

    return (
        <Form
            form={form} // Binds this form with the Antd state
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onSubmitForm}
            onFinishFailed={onSubmitFormFailed}
            autoComplete="off"
        >

            <Form.Item
                label="Username"
                name="username"
                rules={[{
                    required: true,
                    message: 'Please input your github username!'
                }]}>
                <Input value={form.username} placeholder='Github Username...' />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}>
                <Button type="primary" htmlType="submit">Search</Button>
            </Form.Item>

        </Form>
    );
}
