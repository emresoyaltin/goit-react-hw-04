import Modal from 'react-modal';
import css from './ImageModal.module.css'
Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, imageUrl }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            overlayClassName= {css.overlay}
            className = {css.content}
        >
        <img 
        src={imageUrl} 
        alt="Enlarged" 
        style={{ 
            maxWidth: '100%', 
            maxHeight: '90vh', 
            height: 'auto', 
            width: 'auto', 
            display: 'block' 
        }} 
        />

        </Modal>
    );
}
