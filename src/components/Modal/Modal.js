import { Modal as BSModal } from "react-bootstrap";
import classes from "./Modal.module.css";

const Modal = ({
    isOpen,
    onClose,
    title,
    content
}) => {
    return (
        <BSModal
            show={isOpen}
            onHide={onClose}
            backdrop="static"
            keyboard={false}
            className={classes.modal}>
            <BSModal.Header className={classes.header}>
                <BSModal.Title className={classes.title}>{title}</BSModal.Title>
            </BSModal.Header>
            <BSModal.Body className={classes.body}>
                {content}
            </BSModal.Body>
            <BSModal.Footer className={classes.footer}>
                <button className={classes.footerCloseButton} onClick={onClose}>
                    Close
                </button>
            </BSModal.Footer>
        </BSModal>
    )

}

export default Modal;
