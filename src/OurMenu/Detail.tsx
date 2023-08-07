import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { PrismicRichText, useAllPrismicDocumentsByType } from '@prismicio/react';
import './ourmenu.css';

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [documents] = useAllPrismicDocumentsByType('our_menu');
  useEffect(() => {
    const item = documents?.find((item) => item.id === id);
    if (item) {
      setDetail(item);
      setShowModal(true);
    } else {
    }
  }, [documents, id]);

  const handleClose = () => {
    setShowModal(false);
    navigate("/ourmenu");
  };
  const handleAddcart = () => {
    setShowModal(false);
    alert('mua thành công')
    navigate("/ourmenu");
  };

  return (
    <div>
      {detail ? (
        <div>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> <h4> <PrismicRichText field={detail.data.name}  /></h4></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="detail__img" src={detail.data.image.url} alt={detail.title} />
              <p className='price'> <PrismicRichText field={detail.data.price}/>$</p>
              <p className='Description'><PrismicRichText field={detail.data.desc} /></p>
            </Modal.Body>
            <p className='close'>
            <Modal.Footer>
              <Button className='close' variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
            <Modal.Footer>
              <Button className='add-cart' variant="warning" onClick={handleAddcart}>
              Buy
              </Button>
            </Modal.Footer>
            </p>
          </Modal>
        </div>
      ) : (
        <p>Loading...</p>
      )
      }
    </div>
  );
}

export default Detail;
