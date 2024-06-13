import { RightCaretIcon } from "@/components/1_atoms/icons/RightCaretIcon";
import { Surface } from "@/components/1_atoms/surface/Surface";
import { Button } from "@/components/2_molecules/button/Button";
import classNames from "classnames";
import { type FC, type ReactNode, useState } from "react";
import styles from "./Carousel.module.scss";

interface Props {
	items: ReactNode[];
	className?: string;
}

export const Carousel: FC<Props> = ({ items, className }) => {
	const [currentItemIndex, setCurrentItemIndex] = useState(0);

	const decrementIndex = () => {
		setCurrentItemIndex(
			(prevIndex) => (prevIndex - 1 + items.length) % items.length,
		);
	};

	const incrementIndex = () => {
		setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
	};

	return (
		<section>
			<Surface className={classNames(className, styles.carouselBackground)}>
				<Button
					variant="transparent"
					className={classNames(styles.button, styles.prevButton)}
					onClick={decrementIndex}
					aria-label="previous item"
				>
					<RightCaretIcon className={styles.flipped} />
				</Button>
				{items[currentItemIndex]}
				<Button
					variant="transparent"
					className={classNames(styles.button, styles.nextButton)}
					onClick={incrementIndex}
					aria-label="next item"
				>
					<RightCaretIcon />
				</Button>
			</Surface>
		</section>
	);
};
