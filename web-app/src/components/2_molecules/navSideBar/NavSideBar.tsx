import type { FC } from "react";
import { SideBar } from "../../4_templates/sideBar/SideBar";
import { LinkListItem } from "../linkListItem/LinkListItem";
import styles from './NavSideBar.module.scss';

interface Props {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "About",
    path: "/about"
  },
  {
    label: "Contact",
    path: "/contact"
  }
]

export const NavSideBar: FC<Props> = ({open, onClose}) => {
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
}
