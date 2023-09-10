import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalCustom = (props) => {
    const [modal, setModal] = useState(false)
    const toggle = () => {
        setModal(!modal)
    }

    return (
        <div>
            <Button color="danger" onClick={toggle}>{props.buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={props.className}>
                <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
                <ModalBody>
                   {props.Comp}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={()=>props.onSubmitFun(toggle)}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalCustom;