import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css';

function Modal18() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>

        <Modal.Body>
        <div className="modal-image-container">
            <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=96&q=75" alt="Logo Zé Delivery" className="modal-image"/>
          </div>

          <p>Você tem 18 anos ou mais?</p>

          <Button className="button" variant="outline-warning" onClick={handleClose}>Sim</Button>
          <Button variant="outline-warning">Não</Button>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default Modal18;
