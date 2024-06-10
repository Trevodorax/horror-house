import { Text } from "@/components/1_atoms/text/Text";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { SideBar } from "../../4_templates/sideBar/SideBar";
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
          {
            navItems.map((item, index) => (
              <Link to={item.path} key={`${item.label}-${index}`} className={styles.link}>
                <li className={styles.linkListItem}>
                  <Text className={styles.linkText}>{item.label}</Text>
                </li>
              </Link>
            ))
          }
        </ul>
      </nav>
    </SideBar>
  );
}
