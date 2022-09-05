import React, { Fragment, useState } from "react";
import { Button, Modal } from 'react-bootstrap';


const Signinmodal = (props) => {
    const { name, email, password  } = props.value

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (


        <Fragment>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div>
                        <div className="container mt-3">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header">
                                            Details
                                        </div>
                                        <div className="card-body">
                                            <div>
                                            <h6>Name:{name}</h6>
                                            </div>
                                            <div>
                                            <h6>Email:{email}</h6>
                                            </div>
                                            
                                            <div>
                                            <h6>Password:{password}</h6>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>


        </Fragment>
    )

}
export default Signinmodal;