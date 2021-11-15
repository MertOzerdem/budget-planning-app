import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	const { children, className, onClose, show, title, ...rest } = props;
	const modalClasses = classNames("modal", className);
	const modalDialogClasses = classNames("modal-dialog", {
		"modal-dialog-centered": true,
	});

    const BackDrop = (props) => {
        return null;
    }

    const ModalDOM = () => {
        return (<div className={modalClasses} {...rest}>
            <div className={modalDialogClasses}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>)
    }

	return (
        <React.Fragment>
            {ReactDOM.createPortal(<ModalDOM></ModalDOM>, document.getElementById("modal-root"))}
            {ReactDOM.createPortal(<BackDrop></BackDrop>, document.getElementById("backdrop-root"))}            
        </React.Fragment>
	);
};

const classNames = (...args) => {
    let classes = [];
    for (let arg of args) {
        if (arg) {
            classes.push(arg);
        }
    }
    return classes.join(" ");
}

export default Modal;