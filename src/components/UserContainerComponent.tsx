import { useEffect, useState } from "react"
import type { UserType } from "../types/UserType"
import UsersListComponent from "./UsersListComponent"
import AddUserComponent from "./AddUserComponent"

const UserContainerComponent = () => {
    const [users, setUsers] = useState<Partial<UserType>[]>([])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const addUser = (user: Partial<UserType>) => {
        setUsers((prev) => [{ ...user, id: prev.length + 1 }, ...prev])
    }

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setUsers([...data]);
        } catch (error) {
            console.error("Error fetching user:", error)
            setError("Error fetching user");
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <AddUserComponent onAddUser={addUser} />
            <div className="flex justify-between px-10 mt-10 mb-8">
                <h1>Users</h1>
                <h2>{users.length} total</h2>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <UsersListComponent users={users} />
        </div>
    )
}

export default UserContainerComponent
