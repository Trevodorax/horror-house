import { NavSideBar } from "@/components/3_organisms/navSideBar/NavSideBar";
import { type ReactNode, createContext, useContext, useState } from "react";

interface SidebarContextProps {
	isOpen: boolean;
	toggleSidebar: () => void;
	closeSidebar: () => void;
	openSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
	undefined,
);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => setIsOpen(!isOpen);
	const closeSidebar = () => setIsOpen(false);
	const openSidebar = () => setIsOpen(true);

	return (
		<SidebarContext.Provider
			value={{ isOpen, toggleSidebar, closeSidebar, openSidebar }}
		>
			<NavSideBar open={isOpen} onClose={closeSidebar} />
			{children}
		</SidebarContext.Provider>
	);
};

export const useSidebar = (): SidebarContextProps => {
	const context = useContext(SidebarContext);
	if (context === undefined) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
};
