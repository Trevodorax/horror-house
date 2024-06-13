import type { FC } from "react";

import { Surface } from "@/components/1_atoms/surface/Surface";

import { Text } from "@/components/1_atoms/text/Text";
import { ContactForm } from "@/components/3_organisms/contactForm/ContactForm";
import styles from "./Contact.module.scss";

export const Contact: FC = () => {
	return (
		<Surface className={styles.container}>
			<Surface className={styles.contactInfo}>
				<Text type="sectionHeading">Contact us by any means ...</Text>
				<Surface>
					<Text>+33682579783</Text>
					<Text>phvcgdx@gmail.com</Text>
					<Text>1 rue du pain</Text>
				</Surface>
			</Surface>
			<Surface className={styles.contactForm}>
				<Text type="sectionHeading">... or send us a message here !</Text>
				<ContactForm />
			</Surface>
		</Surface>
	);
};
