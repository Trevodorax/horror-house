import { Surface } from "@/components/1_atoms/surface/Surface";
import classNames from "classnames";
import { type ReactNode, createContext, useContext, useState } from "react";
import styles from "./ModalContext.module.scss";

interface ModalContextProps {
	isOpen: boolean;
	openModalWith: (content: ReactNode) => void;
	clearModal: () => void;
	closeModal: () => void;
	openModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setOpen] = useState(false);
	const [modalContent, setModalContent] = useState<ReactNode>(
		<div>Coucou</div>,
	);

	const openModalWith = (content: ReactNode) => {
		setModalContent(content);
		setOpen(true);
	};

	const clearModal = () => {
		setModalContent(null);
	};

	const closeModal = () => {
		setOpen(false);
	};

	const openModal = () => {
		setOpen(true);
	};

	return (
		<ModalContext.Provider
			value={{ isOpen, openModalWith, clearModal, closeModal, openModal }}
		>
			<div
				className={classNames(styles.modalOverlay, {
					[styles.closed]: !isOpen,
				})}
				onClick={closeModal}
			>
				<Surface
					className={styles.modalContainer}
					onClick={(e) => e.stopPropagation()}
				>
					{modalContent}
				</Surface>
			</div>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = (): ModalContextProps => {
	const context = useContext(ModalContext);
	if (context === undefined) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};
