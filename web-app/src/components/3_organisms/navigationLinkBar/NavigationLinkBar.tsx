import { LinkListItem } from "@/components/2_molecules/linkListItem/LinkListItem";
import { useQueryGetMe } from "@/hooks/queries/useQueryGetMe";
import { navItems } from "@/router";
import type { FC } from "react";
import styles from "./NavigationLinkBar.module.scss";

export const NavigationLinkBar: FC = () => {
	const me = useQueryGetMe();

	return (
		<nav className={styles.bar}>
			{navItems.map((item, index) => {
				if (
					!item.acceptedRoles ||
					(me.data && item.acceptedRoles.includes(me.data?.role))
				) {
					return (
						<LinkListItem
							key={`${item.label}-${index}`}
							item={item}
							customClassNames={{
								link: styles.link,
							}}
						/>
					);
				}
			})}
		</nav>
	);
};
