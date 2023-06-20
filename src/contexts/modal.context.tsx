import { ReactNode, createContext, useContext, useState } from "react";

type ContextProps = {
    showModal: boolean,
    setShowModal: Function,
};

export const ModalContext = createContext<ContextProps>({
    showModal: false,
    setShowModal: () => null
});

type ProviderProps = {
    children: ReactNode
};

export const ModalProvider = ( { children } : ProviderProps ) => {
    const [showModal, setShowModal] = useState(false);
    const value = { showModal, setShowModal };
    return (
        <ModalContext.Provider value={value}>
            { children }
        </ModalContext.Provider>
    );
}

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (context === undefined) {
        throw new Error('[SerieDetailContext] is undefined');
    }

    return context;
}
