const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>Thank You!</h2>
        <p>
          You rated us {rating} star{rating > 1 ? 's' : ''}
        </p>
        <button className='close-btn' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
