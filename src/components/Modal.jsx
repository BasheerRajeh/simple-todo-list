const Modal = (props) => {
    const { id, title, onCancel, onAction, children } = props;
    return (
        <div
            className="modal fade"
            id={id}
            tabIndex="-1"
            aria-labelledby="ModalLabel"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            {title}
                        </h1>
                        <button
                            onClick={onCancel}
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        <button
                            onClick={onCancel}
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button onClick={onAction} data-bs-dismiss="modal" type="button" className="btn btn-primary">
                            {title}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
