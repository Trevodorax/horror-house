import type { FC } from "react";
import { SideBar } from "../../4_templates/sideBar/SideBar";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const NavSideBar: FC<Props> = ({open, onClose}) => {
  return (
    <SideBar open={open} onClose={onClose}>
      <h1>NavSideBar</h1>
    </SideBar>
  );
}
