import { Surface } from "@/components/1_atoms/surface/Surface";

import { InstagramIcon } from "@/components/1_atoms/icons/InstagramIcon";
import { TwitterIcon } from "@/components/1_atoms/icons/TwitterIcon";
import { Text } from "@/components/1_atoms/text/Text";
import { LinkListItem } from "@/components/2_molecules/linkListItem/LinkListItem";
import { navItems } from "@/router";
import { Link } from "react-router-dom";
import styles from "./GlobalFooter.module.scss";

export const GlobalFooter = () => {
	return (
		<footer className={styles.footerContainer}>
			<Surface className={styles.footerSurface} background="secondary">
				<Surface background="transparent" className={styles.footerNav}>
					{navItems.map((item, index) => (
						<LinkListItem
							key={`${item.label}-${index}`}
							customClassNames={{ link: styles.link }}
							item={item}
						/>
					))}
				</Surface>
				<Surface className={styles.copyrightContainer} background="transparent">
					<Text type="simpleText">Paul GAUDEAUX</Text>
					<Text type="simpleText">© Horror House 2024</Text>
				</Surface>
				<Surface className={styles.socialsContainer} background="transparent">
					<Link to="https://www.instagram.com">
						<InstagramIcon className={styles.instagramIcon} />
					</Link>
					<Link to="https://www.twitter.com">
						<TwitterIcon className={styles.twitterIcon} />
					</Link>
					<Text>+336 82 57 97 83</Text>
					<Text>phvcgdx@gmail.com</Text>
				</Surface>
			</Surface>
		</footer>
	);
};
