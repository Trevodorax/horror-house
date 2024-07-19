import { useQueryGetEmployees } from "@/hooks/queries/useQueryGetEmployees"


export const Employees = () => {
    const data = useQueryGetEmployees()

    console.log(data.data)

    return (
        <div>
            {data.data?.email ?? 'no email'}
        </div>
    )
}
