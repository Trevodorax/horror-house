import { navItems } from "@/router";
import type { FC } from "react";
import { LinkListItem } from "../../2_molecules/linkListItem/LinkListItem";
import { SideBar } from "../../4_templates/sideBar/SideBar";
import styles from "./NavSideBar.module.scss";

interface Props {
	open: boolean;
	onClose: () => void;
}

export const NavSideBar: FC<Props> = ({ open, onClose }) => {
	return (
		<SideBar open={open} onClose={onClose}>
			<nav>
				<ul className={styles.navList}>
					{navItems.map((item, index) => (
						<LinkListItem
							key={`${item.label}-${index}`}
							item={item}
							customClassNames={{
								linkListItem: styles.linkListItem,
							}}
						/>
					))}
				</ul>
			</nav>
		</SideBar>
	);
};
