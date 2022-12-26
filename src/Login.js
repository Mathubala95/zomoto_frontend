import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from './api/user'
import { config } from './config'



function Login() {
    const navigate = useNavigate()

    useEffect(() => {
        alert("Email : admin@123")
      }, [])

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },


        
        validate: (values) => {
            let errors = {}

            if (!values.email) {
                errors.email = "Required"
            }

            if (!values.password) {
                errors.password = "Required"
            }

            return errors;
        },

        onSubmit: async (values) => {
            console.log(values)
            try{
                let loginreq = await login(values)
                localStorage.setItem(`${config.storage_key}`, loginreq.data.token)
                // await login(values)
                navigate("/zomato/portal/list-restraunts")
                console.log(loginreq);
                
            }catch(error){
                alert("Something went wrong")
            }

        }
    })

    return (
        <div class="container">

            <div class="row justify-content-center">

                <div class="col-xl-10 col-lg-12 col-md-9">

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form class="user" onSubmit={formik.handleSubmit}>
                                            <div class="form-group">
                                                <input
                                                type="email" 
                                                name='email'
                                                class="form-control form-control-user"
                                                value={formik.values.email}    
                                                onChange={formik.handleChange}    
                                                placeholder="Enter Email Address..." />
                                                {
                                                 formik.errors.email && <span>Required</span>
                                                }
                                            </div>
                                            <div class="form-group">
                                                <input 
                                                type="password" 
                                                name='password'
                                                class="form-control form-control-user"
                                                id="exampleInputPassword" 
                                                value={formik.values.password}    
                                                onChange={formik.handleChange}    
                                                placeholder="Password" />
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                    <label class="custom-control-label" for="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <input
                                            type={"submit"}
                                            class="btn btn-primary btn-user btn-block"
                                            value={"Login"}
                                            Login
                                       
                                            />
                                            
                                            <hr />
                                            <a href="index.html" class="btn btn-google btn-user btn-block">
                                                <i class="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                                <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div class="text-center">
                                            <a class="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div class="text-center">
                                            <a class="small" href="register.html">Create an Account!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Login