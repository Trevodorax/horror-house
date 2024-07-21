import { useQueryGetMe } from "@/hooks/queries/useQueryGetMe"
import { Button } from "../button/Button"
import { queryClient } from "@/hooks/queries/queryClient"
import { setTokenAction } from "@/store/authSlice/actions"
import { router } from "@/router"
import { useLocation } from "react-router-dom"

export const LoginLogoutButton = () => {
    const location = useLocation()
    const me = useQueryGetMe()

    const logout = () => {
        setTokenAction({token: null})
        queryClient.invalidateQueries({queryKey: ['me']})
    }

    if(me.data === null) {
        if(location.pathname === '/login') {
            return null
        }
        return (
            <Button
                variant="primary"
                onClick={() => router.navigate('/login')}
            >
                Log in
            </Button>
        )
    } else {
        return (
            <Button
                variant="transparent"
                onClick={logout}
            >
                Log out
            </Button>
        )
    }
}
