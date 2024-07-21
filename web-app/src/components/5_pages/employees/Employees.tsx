import { Button } from "@/components/2_molecules/button/Button"
import { CreateUserForm } from "@/components/3_organisms/createUserForm/CreateUserForm"
import { useModal } from "@/components/3_organisms/modalContext/ModalContext"
import { useQueryGetUsers } from "@/hooks/queries/useQueryGetUsers"


export const Employees = () => {
    const users = useQueryGetUsers()
    const {openModalWith} = useModal()

    return (
        <div>
            {users.data?.map((user) => (
                <div key={user.email}>{user.email} {user.fullName} {user.role}</div>
            )) ?? 'no data'}
            <Button onClick={() => openModalWith(<CreateUserForm />)}>New user</Button>
        </div>
    )
}
