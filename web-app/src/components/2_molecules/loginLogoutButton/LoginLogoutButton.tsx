import { useQueryGetMe } from "@/hooks/queries/useQueryGetMe"
import { Button } from "../button/Button"
import { useMutationLogIn } from "@/hooks/queries/useMutationLogIn"
import { queryClient } from "@/hooks/queries/queryClient"
import { setTokenAction } from "@/store/authSlice/actions"

export const LoginLogoutButton = () => {
    const me = useQueryGetMe()
    const {mutate: logIn} = useMutationLogIn({email: 'test@test.com', password: 'password'})

    const logout = () => {
        setTokenAction({token: null})
        queryClient.invalidateQueries({queryKey: ['me']})
    }

    if(me.data === null) {
        return (
            <Button
                variant="primary"
                onClick={() => logIn({email: 'test@test.com', password: 'password'})}
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
