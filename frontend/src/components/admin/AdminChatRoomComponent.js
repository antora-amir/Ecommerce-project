
import { ToastBody, ToastHeader, Toast, Form, Button } from "react-bootstrap";
import { Fragment, useState } from "react";

const AdminChatRoomPage = () => {
    const [toast1, closeToast1] = useState(true)
    const close1 = () => closeToast1(false)

    const [toast2, closeToast2] = useState(true)
    const close2 = () => closeToast2(false)
    return (
        <>
            <Toast show={toast1} onClose={close1} className=" ms-4 mb-5">
                <ToastHeader>
                    <strong className="me-auto">Chat with Antora

                    </strong>
                </ToastHeader>
                <ToastBody>
                    <div style={{ maxHeight: "500px", overflow: "auto" }}>
                        {Array.from({ length: 30 }).map((_, idx) => (
                            <Fragment key={idx} >

                                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                                    <b>User wrote:</b> Hello,world! This is a chat message.</p>
                                <p>
                                    <b>Admin:</b> Hello,world! This is a chat message.</p>
                            </Fragment>
                        ))}
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write a message </Form.Label>
                            <Form.Control asa="textarea" rows={2} />

                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </ToastBody>
            </Toast>



            <Toast show={toast1} onClose={close1} className=" ms-4 mb-5">
                <ToastHeader>
                    <strong className="me-auto">Chat with Antora

                    </strong>
                </ToastHeader>
                <ToastBody>
                    <div style={{ maxHeight: "500px", overflow: "auto" }}>
                        {Array.from({ length: 30 }).map((_, idx) => (
                            <Fragment key={idx} >

                                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                                    <b>User wrote:</b> Hello,world! This is a chat message.</p>
                                <p>
                                    <b>Admin:</b> Hello,world! This is a chat message.</p>
                            </Fragment>
                        ))}
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write a message </Form.Label>
                            <Form.Control asa="textarea" rows={2} />

                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </ToastBody>
            </Toast>

        </>
    )
}
export default AdminChatRoomPage; 
