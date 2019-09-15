import React from "react";
import { Modal, Button } from "react-bootstrap";
const ConfirmModal = props => {
  return (
    <Modal show={props.showModal}>
      <Modal.Header>
        <h4>Confirm</h4>
      </Modal.Header>
      <Modal.Body>
        {props.value.body} {props.value.target}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button
          variant="danger"
          onClick={() => props.handleConfirm(props.value.id)}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
