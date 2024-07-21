import { Text } from "@/components/1_atoms/text/Text";
import { queryClient } from "@/hooks/queries/queryClient";
import { useQueryGetMe } from "@/hooks/queries/useQueryGetMe";
import { router } from "@/router";
import { setTokenAction } from "@/store/authSlice/actions";
import { useLocation } from "react-router-dom";
import { Button } from "../button/Button";

export const LoginLogoutButton = () => {
	const location = useLocation();
	const me = useQueryGetMe();

	const logout = () => {
		setTokenAction({ token: null });
		queryClient.invalidateQueries({ queryKey: ["me"] });
		router.navigate('/login')
	};

	if (me.data === null) {
		if (location.pathname === "/login") {
			return null;
		}
		return (
			<Button variant="primary" onClick={() => router.navigate("/login")}>
				<Text>Log in</Text>
			</Button>
		);
	}
	return (
		<Button variant="transparent" onClick={logout}>
			<Text>Log out</Text>
		</Button>
	);
};
