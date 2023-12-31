import {createContext, useState} from "react";

const ModalContext = createContext();
const ModalState = (props) => {
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState("winner");

    const showModal = () => setShow(true);
    const hideModal = () => setShow(false);

    return (<ModalContext.Provider
        value={{
            show,
            modalModel: mode,
            showModal,
            hideModal,
            setModalMode: setMode,
          }}>
        {props.children}
    </ModalContext.Provider>)
}

export { ModalContext, ModalState };