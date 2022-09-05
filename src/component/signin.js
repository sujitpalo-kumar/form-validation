import React, { Fragment, useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schema";
import './signup.css'
import Signinmodal from "./signinmodal";

const initialValues = {
    name: "",
    email: "",
    password: "",
    
};


const Signin = (props) => {
    const [result, setResult] = useState("");
    const click = () => {
        setResult(values)
    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit , isValid} =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                console.log(

                    values
                );
                action.resetForm();
            },
        });

    return (

        <Fragment>
            <div className="conrainer mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-success">
                                <p className="text-white">Login</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group" >
                                        <h6 htmlFor="name" className="input-label">
                                            Name
                                        </h6>
                                        <input
                                            type="name"
                                            autoComplete="off"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}

                                        />
                                        {errors.name && touched.name ? (
                                            <p className="form-error">{errors.name}</p>
                                        ) : null}
                                    </div>
                                    <div className="input-block">
                                        <h6 htmlFor="email" className="input-label">
                                            Email
                                        </h6>
                                        <input
                                            type="email"
                                            autoComplete="off"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.email && touched.email ? (
                                            <p className="form-error">{errors.email}</p>
                                        ) : null}
                                    </div>
                                    
                                    <div className="input-block">
                                        <h6 htmlFor="password" className="input-label">
                                            Password
                                        </h6>
                                        <input
                                            type="password"
                                            autoComplete="off"
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.password && touched.password ? (
                                            <p className="form-error">{errors.password}</p>
                                        ) : null}
                                    </div>
                                  
                                    <div className="modal-buttons">

                                        <button className="input-button " disabled={isValid===false} type="submit" onClick={click}>
                                            Registration
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Signinmodal value={result} />
                    </div>

                </div>
            </div>

        </Fragment>
    )
}
export default Signin;