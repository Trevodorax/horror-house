import { Surface } from "@/components/1_atoms/surface/Surface";
import { Text } from "@/components/1_atoms/text/Text";
import classNames from "classnames";
import type { FC } from "react";
import styles from './AlternatingImageTextsSection.module.scss';

type ImageText = {
  imageUrl: string;
  text: string;
}

interface Props {
  imageTexts: ImageText[];
}

export const AlternatingImageTextsSection: FC<Props> = ({ imageTexts }) => {
  return (
    <section>
      <Surface background="transparent" className={styles.sectionsContainer}>
        {imageTexts.map(({ imageUrl, text }, index) => (
          <Surface background="transparent" key={`${imageUrl}-${text.slice(0, 3)}`} className={classNames(styles.textImageSection, {[styles.reversed]: index % 2 === 1})}>
            <img 
              className={styles.image}
              src={imageUrl}
              alt="sectionImage"
            />
            <Text type="simpleText" className={styles.text}>{text}</Text>
          </Surface>
        ))}
      </Surface>
    </section>
  );
}
