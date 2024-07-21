import type { FC } from "react";

import { CloseIcon } from "../../1_atoms/icons/CloseIcon";
import { Surface } from "../../1_atoms/surface/Surface";
import { Button } from "../../2_molecules/button/Button";

import { TrashIcon } from "@/components/1_atoms/icons/TrashIcon";
import { Text } from "../../1_atoms/text/Text";
import styles from "./ActionsHeader.module.scss";
import { PenIcon } from "@/components/1_atoms/icons/PenIcon";

interface Props {
	title?: string;
	close?: () => void;
	remove?: () => void;
	edit?: () => void;
}

export const ActionsHeader: FC<Props> = ({
	remove,
	edit,
	close,
	title = "",
}) => {
	return (
		<Surface className={styles.headerContainer} background="transparent">
			<Text type="sectionHeading" className={styles.title}>{title}</Text>
			<div className={styles.actionsContainer}>
				{close && (
					<Button aria-label="close" onClick={close}>
						<CloseIcon className={styles.actionIcon} />
					</Button>
				)}
				{remove && (
					<Button variant="error" aria-label="remove" onClick={remove}>
						<TrashIcon className={styles.actionIcon} />
					</Button>
				)}
				{edit && (
					<Button variant="primary" aria-label="edit" onClick={edit}>
						<PenIcon className={styles.actionIcon} />
					</Button>
				)}
			</div>
		</Surface>
	);
};
