import { useQueryGetUsers } from "@/hooks/queries/useQueryGetUsers"


export const Employees = () => {
    const users = useQueryGetUsers()

    return (
        <div>
            {users.data?.map((user) => (
                <div key={user.email}>{user.email} {user.fullName} {user.role}</div>
            )) ?? 'no data'}
        </div>
    )
}
