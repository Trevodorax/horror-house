import { FC } from "react";

import styles from './Home.module.scss';
import { Surface } from "../../1_atoms/surface/Surface";

export const Home: FC = () => {
  return (
    <Surface className={styles.homeContainer}>
      <Surface background='primary' className={styles.myAppText}>
        This is my app
      </Surface>
    </Surface>
  )
}
