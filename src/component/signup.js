import React, { Fragment, useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schema";
import './signup.css'


import Modals from "./modal";

const initialValues = {
    name: "",
    email: "",
    number: "",
    password: "",
    confirm_password: "",
};


const Reg = (props) => {
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
                            <div className="card-header bg-secondary">
                                <p className="text-white">Welcome to Resgistraion</p>
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
                                        <h6 htmlFor="number" className="input-label">
                                            Number
                                        </h6>
                                        <input
                                            maxLength="10"
                                            minLength="6"
                                            type="text"
                                            autoComplete="off"
                                            name="number"
                                            id="number"
                                            placeholder="Number"
                                            value={values.number}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.number && touched.number ? (
                                            <p className="form-error">{errors.number}</p>
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
                                    <div className="input-block">
                                        <h6 htmlFor="confirm_password" className="input-label">
                                            Conform Password
                                        </h6>
                                        <input
                                            type="password"
                                            autoComplete="off"
                                            name="confirm_password"
                                            id="confirm_password"
                                            placeholder="Confirm Password"
                                            value={values.confirm_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.confirm_password && touched.confirm_password ? (
                                            <p className="form-error">{errors.confirm_password}</p>
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
                        <Modals value={result} />
                    </div>

                </div>
            </div>

        </Fragment>
    )
}
export default Reg;