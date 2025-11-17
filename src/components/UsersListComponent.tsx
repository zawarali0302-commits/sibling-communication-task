import type { UserType } from "../types/UserType"

type Data = Partial<UserType>;

interface UserCardComponentProps {
    user: Data
}
const UserCardComponent = ({ user }: UserCardComponentProps) => {
    const { username, id, email, phone } = user
    return (
        <div className="flex flex-col w-96 items-center shadow gap-4 p-4 mb-4">
            <div className="flex flex-col items-center">
                <h1><strong>Username:</strong> {username}</h1>
                <h1><strong>ID:</strong> {id}</h1>
            </div>
            <div className="flex flex-col items-center">
                <h1><strong>Email:</strong> {email}</h1>
                <h1><strong>Phone:</strong> {phone}</h1>
            </div>
        </div>
    )
}


interface UsersListComponentProps {
    users: Data[]
}
const UsersListComponent = ({ users }: UsersListComponentProps) => {

    return (
        <div>
            <ul className="flex flex-wrap gap-4">
                {users.map((user) => (

                    <li key={user.id}>
                        <UserCardComponent user={user} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UsersListComponent
