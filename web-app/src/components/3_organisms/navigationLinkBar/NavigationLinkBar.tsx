import { LinkListItem } from "@/components/2_molecules/linkListItem/LinkListItem";
import { navItems } from "@/router";
import type { FC } from "react";
import styles from "./NavigationLinkBar.module.scss";

export const NavigationLinkBar: FC = () => {
	return (
		<nav className={styles.bar}>
			{navItems.map((item, index) => (
				<LinkListItem
					key={`${item.label}-${index}`}
					item={item}
					customClassNames={{
						link: styles.link,
					}}
				/>
			))}
		</nav>
	);
};
