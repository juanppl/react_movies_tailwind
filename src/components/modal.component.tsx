import { FC, ReactNode } from "react";
import { useModalContext } from "../contexts/modal.context";

type Props = {
    children: ReactNode
}

const Modal: FC<Props> = ({ children }: Props) => {

    const { showModal, setShowModal } = useModalContext();

    return (
        <>
            {
                showModal ?
                    (
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                    </div>            
                                </div>
                            </div>
                        </div>
                    )
                    : null

            }
        </>
    );
};

export default Modal;