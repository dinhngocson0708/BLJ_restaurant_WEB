import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { data } from './data';
import { useNavigate, useParams } from 'react-router-dom';
import './ourmenu.css';
interface Item {
  id: number;
  title: string;
  img: string;
  price: number;
  desc: string;
}

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<Item | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const item = data.find((item) => item.id === Number(id));
    if (item) {
      setDetail(item);
      setShowModal(true);
    } else {
    }
  }, [id]);

  const handleClose = () => {
    setShowModal(false);
    navigate("/ourmenu");
  };

  return (
    <div>
      {detail ? (
        <div>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> <h4>{detail.title}</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="item__img" src={detail.img} alt={detail.title} />
              <p>Price: {detail.price}$</p>
              <p>Description: {detail.desc}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Add-Cart
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Detail;
