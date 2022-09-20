import type { NextPage } from 'next'
import {useState} from "react"
import jwt_decode from "jwt-decode";
import { Col, Row, Button, Form, Input,Card  } from 'antd';
import {useRouter} from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
import styles from '../styles/Login.module.scss'
import api from "../src/restApi/index";
import {AppDispatch} from "../src/store/store"
import { NextResponse } from 'next/server'
import {setLogin,fetchUserById} from "../src/store/reducers/loginSlice"
import ForgotPasswordModal from "../src/components/ForgotPasswordModal"
import Cookies from 'js-cookie'
const apiobj = new api();
const Login: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>();
  const [errorMessage,setErrorMessage] = useState("");
  const [isForgotPasswordModal,setIsForgotPasswordModal] = useState(false);
  const [forgotpasswordEmail,setIsForgotPasswordEmail] = useState("");

  const onFinish = async(values: any) => {
    // console.log('Success:', values);
    
    try {
      const response: any = await apiobj.requestWithoutToken("users/authenticate", values, "post");
      var token_data: any = jwt_decode(response.data.token);
      const responsee = NextResponse.next()
      Cookies.set('token', response.data.token, { expires: 30 })
      await dispatch(setLogin())
      await dispatch(fetchUserById(parseInt(token_data.sub)))
      setErrorMessage("")
      router.push('/');
    }catch(error: any){
      // console.log(error);
      // console.log(error.message)
      setErrorMessage(error.message)
    }
    
  };
  return (
    <div>
    <Row>
        <Col xs={{ span: 24}} sm={{ span: 24 }} md={{ span: 6 }} 
        lg={{ span: 7 }}  xl={{ span: 8 }} xxl={{ span: 8 }}>
          
        </Col>
        <Col xs={{ span: 24}} sm={{ span: 24 }} md={{ span: 12 }} 
        lg={{ span: 10 }}  xl={{ span: 8 }} xxl={{ span: 8 }}>
          <br/>
          <br/>
          <Card title="Sign In" style={{ width: '100%' }}>
             <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  label="Email"
                  name="email"
                
                  rules={[{ required: true, message: 'Please enter your email.' },
                  {
                    type: 'email',
                    message: 'The input is not valid email.',
                  },]}
                >
                  <Input  onChange={(e)=>setIsForgotPasswordEmail(e.target.value) } />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                
                  rules={[{ required: true, message: 'Please enter your password.' },
                  
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || value.length > 5 ) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Password must contain a minimum of 6 characters.'));
                         
                    },
                  }),]}
                >
                  <Input.Password   />
                
                </Form.Item>
                {errorMessage ? 
                 <>
                  <span className='ant-form-item-explain-error'>{errorMessage}</span>
                  <br/>
                 </>:null}
               
                <Form.Item>
                 
                  <a className={styles.login_form_forgot} href="#" onClick={() => setIsForgotPasswordModal(true)} >
                    Forgot password
                  </a>
                </Form.Item>
                <Form.Item >
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                  <Button htmlType="button" className={styles.CancelButton} onClick={() => router.push('/')}>
                    Cancel
                  </Button>
                  <Button type="link" htmlType="button" onClick={() => router.push('/signup')}>
                  Sign Up
                  </Button>
                </Form.Item>
              </Form>
        </Card>
        <ForgotPasswordModal
         isModalShow={isForgotPasswordModal} 
         forgotpasswordEmail={forgotpasswordEmail}
         setIsForgotPasswordModal={setIsForgotPasswordModal}
        />
          {/* <h2>Login</h2> */}
         
        </Col>
        <Col xs={{ span: 24}} sm={{ span: 24 }} md={{ span: 6 }} 
        lg={{ span: 7 }}  xl={{ span: 8 }} xxl={{ span: 8 }}>
          
        </Col>
     </Row>

      {/* <h1>Login</h1>
     <Link href="/" >
              <a >Home</a>
            </Link><br/>
            <Link href="/login" >
              <a >Login</a>
            </Link><br/>
            <Link href="/about" >
              <a >About</a>
            </Link> */}
            </div>
  )
}

export default Login