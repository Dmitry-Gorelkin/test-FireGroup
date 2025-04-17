import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    zIndex: 10,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // borderRadius: '16px',
    border: 'none',
    padding: '0px',
    maxWidth: '90vw',
    zIndex: 11,
  },
};

const NewPostModal = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};

export default NewPostModal;
