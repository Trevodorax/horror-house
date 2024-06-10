import { type FC, useState } from "react"
import { MenuIcon } from "../../1_atoms/icons/MenuIcon";
import { Button } from "../../2_molecules/button/Button";
import { NavSideBar } from "../../2_molecules/navSideBar/NavSideBar";
import styles from './Navigation.module.scss';

export const Navigation: FC = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <Button className={styles.menuButton} variant="transparent" onClick={() => setIsOpen((open) => !open)}>
        <MenuIcon open={false} className={styles.menuIcon} />
      </Button>
      <NavSideBar open={open} onClose={() => setIsOpen(false)} />
    </>   
  )
}
