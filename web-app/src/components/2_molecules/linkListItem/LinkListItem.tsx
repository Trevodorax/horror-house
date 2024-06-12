import { Text } from "@/components/1_atoms/text/Text";
import classNames from "classnames";
import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./LinkListItem.module.scss";

interface Props {
	item: {
		label: string;
		path: string;
	};
	customClassNames?: {
		link?: string;
		linkListItem?: string;
		linkText?: string;
	};
}

export const LinkListItem: FC<Props> = ({ item, customClassNames }) => {
	return (
		<Link
			to={item.path}
			className={classNames(customClassNames?.link, styles.link)}
		>
			<li
				className={classNames(
					customClassNames?.linkListItem,
					styles.linkListItem,
				)}
			>
				<Text
					className={classNames(customClassNames?.linkText, styles.linkText)}
				>
					{item.label}
				</Text>
			</li>
		</Link>
	);
};
