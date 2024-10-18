import React from 'react';
import { Modal, Spinner, Button } from 'react-bootstrap';

interface StatusModalProps {
  showModal: boolean;
  loading: boolean;
  modalMessage: string;
  photoLinks: Array<{ cid: string; name: string }>;
  handleClose: () => void;
}

const StatusModal: React.FC<StatusModalProps> = ({ showModal, loading, modalMessage, photoLinks, handleClose }) => {
    const handleReload = () => {
      window.location.reload(); // Перезагрузка страницы
    };
  
    return (
      <Modal show={showModal} onHide={handleReload} centered>
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '200px' }}>
          <h3 className="lead fw-normal">{modalMessage}</h3>
          {loading && <Spinner animation="border" role="status" className="text-primary mt-3" />}
          {!loading && photoLinks.length > 0 && (
            <div>
              <p>Загруженные фото:</p>
              {photoLinks.map((photo) => (
                <a key={photo.cid} href={`https://peach-convincing-gerbil-650.mypinata.cloud/ipfs/${photo.cid}`} target="_blank" rel="noopener noreferrer">
                  {photo.name}
                </a>
              ))}
            </div>
          )}
          <Button variant="primary" className="mt-3" onClick={handleReload}>
            Закрыть окно
          </Button>
        </Modal.Body>
      </Modal>
    );
  };

export default StatusModal;