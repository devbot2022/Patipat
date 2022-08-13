import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    DatePicker,
    InputNumber,
    Modal,
    Switch,
    Checkbox,
    Upload,
 
  } from 'antd';



//Radio
const plainOptions = ['Male', 'Female'];
const options = [
  {
    label: 'Male',
    value: 'Male',
  },
  {
    label: 'Female',
    value: 'Female',
  }
];

//Selected 
const { Option } = Select;
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };


  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  
  const FormDisabledDemo = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);
  
    const onFormLayoutChange = ({ disabled }) => {
      setComponentDisabled(disabled);
    };
}




const FormComp = () =>{
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const [value1, setValue1] = useState('Apple');

      const onChange1 = ({ target: { value } }) => {
        console.log('radio1 checked', value);
        setValue1(value);
      };
    


    //Homework 3.5  skills(optional) Dynamic Form
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 8,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 8,
        },
        sm: {
          span: 8,
        },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: {
          span: 8,
          offset: 8,
        },
        sm: {
          span: 8,
          offset: 8,
        },
      },
    };


    //Homework3.6 Submit Open  AntD Modal show Value form

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
  
    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };





    return (
     

        <Form
        name="Form Register"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Firstname"
          name="firstname"
          rules={[
            {
              required: true,
              message: 'Please input your firstname!',
            },
            {whitespace : true},
            {min:3},
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Age"
          name="Age"
          rules={[
            {
              required: true,
              message: 'Please input your age.'
            },
            //Homework 3.2 เพิ่ม custom validation ให้กับ Field Age
            //Homework 3.2.a  Age Validation < 18 'อายุน้อยเกินไป' 
            
            ({getFieldValue})=>({
              validator(_,value){
                if(!value || getFieldValue('Age') >= 18){
                  return Promise.resolve();
                }
                return Promise.reject('อายุน้อยเกินไป');
              },
            }),
            //Homework 3.2.b  Age Validation > 60 'อายุมากเกินไป'
            ({getFieldValue})=>({
              validator(_,value){
                if(!value || getFieldValue('Age') < 60){
                  return Promise.resolve();
                }
                return Promise.reject('อายุมากไป');
              },
            }),
          ]}
          hasFeedback
        >
          <Input/>
        </Form.Item>

        <Form.Item
          name = "email"
          label = "Email"
          rules={[
            {
              required:true,
              message:"Please enter your Email",
            },
            {type:"email", message:'Please enter a valid email'}
          ]}
          hasFeedback
        >
          <Input/>
        </Form.Item>


          <Form.Item
            name="gender"
            label="Gender"
            rules={[
            {
                required: true,
            },
            ]}
            hasFeedback
          >
            <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
          </Form.Item>



        <Form.Item
            name="province"
            label="Province"
            rules={[
            {
                required: true,
            },
            ]}
            hasFeedback
          >
            <Select
                defaultValue="Bangkok"
                style={{
                    span: 8,
                }}
                onChange={handleChange}
                >
                <Option value="bangkok">Bangkok</Option>
                <Option value="rayong">Rayong</Option>
                <Option value="chiangmai">Chiangmai</Option>
                <Option value="udonthani">Udonthani</Option>
                <Option value="khonkean">Khonkean</Option>

                Homework 3.3 เพิ่มตัวเลือกต่างประเทศ ใน field Province
                <Option value="ต่างประเทศ">ต่างประเทศ</Option>
            </Select> 
          </Form.Item>
          
          {/*Homework 3.4 
          เพิ่ม Input Field ชื่อว่า Other ใต้ Field  Province โดย Disable ไว้ แต่ถ้าตัวเลือกใน Field Province เป็น “ต่างประเทศ” จะ enable ให้สามารถใช้งานได้*/}

          <Form.Item
           noStyle
           shouldUpdate={(prevValues, currentValues) => prevValues.province !== currentValues.province}
          >

            
            {({getFieldValue})=>
              getFieldValue('province')=== 'ต่างประเทศ'?(
                <Form.Item
                name="otherCity"
                label="Other City"
                rules={[
                  {
                    required : true,
                  }
                ]}
                >
                  <Input />
                </Form.Item>
              ): null
            } 
          </Form.Item>



            {/* Homework 3.5 Skills Optional  */}
            <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error('At least 2 skills'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Skills(optional)' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input your skills or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input
                    placeholder="input your skills"
                    style={{
                      span: 8,
                    }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{
                  span: 8,
                }}
                icon={<PlusOutlined />}
              >
                Add Skills
              </Button>
              
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
 
    </Form>



          <Form.Item 
          name="datepicker"
          label="Member Period"
          rules={[
          {
              required: true,
          },
          ]}
          hasFeedback
          >
          <DatePicker />
        </Form.Item>
        
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
      

        <Form.Item
          name="acceptterm"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Checkbox>Accept Term</Checkbox>
        </Form.Item>
        
        <Form.Item
             wrapperCol={{
              offset: 8,
              span: 8,
            }}
        >
          <Button type="primary" onClick={showModal}>
       Submit
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
        </Form.Item>
  
    </Form>
   
      

    );
}


export default FormComp;