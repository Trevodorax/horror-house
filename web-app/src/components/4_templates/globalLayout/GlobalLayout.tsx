import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from './GlobalLayout.module.scss'

export const GlobalLayout: FC = () => {
  return (
    <div className={styles.globalLayoutContainer}>
      <Outlet />
    </div>
  )
}
