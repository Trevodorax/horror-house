import type { FC } from "react";

import { CloseIcon } from "../../1_atoms/icons/CloseIcon";
import { Surface } from "../../1_atoms/surface/Surface";
import { Button } from "../../2_molecules/button/Button";

import { Text } from "../../1_atoms/text/Text";
import styles from "./ActionsHeader.module.scss";
import { TrashIcon } from "@/components/1_atoms/icons/TrashIcon";

interface Props {
	title?: string;
	close?: () => void;
	remove?: () => void;
}

export const ActionsHeader: FC<Props> = ({ remove, close, title = "" }) => {
	return (
		<Surface className={styles.headerContainer} background="transparent">
			<Text type="sectionHeading">{title}</Text>
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
		</Surface>
	);
};
