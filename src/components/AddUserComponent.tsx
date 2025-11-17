import { useForm } from "react-hook-form";
import type { UserType } from "../types/UserType";

type FormData = Pick<UserType, 'username' | 'email'>;

interface AddUserComponentProps {
    onAddUser: (user: FormData) => void;
}

const AddUserComponent = ({ onAddUser }: AddUserComponentProps) => {
    const { register, handleSubmit } = useForm<FormData>();

    const handleAddUser = (data: FormData) => {
        console.log("New User Data:", data);
        // Here you can also call a prop function to pass the new user data to the parent component
        onAddUser(data);
    }

  return (
    <div>
      <form className="flex flex-col items-center mt-10 gap-4" onSubmit={handleSubmit(handleAddUser)}>
        <h1 className="text-3xl font-semibold underline">Add User</h1>
        <div className="flex flex-col gap-4">
          <div>
            <label><strong>Username:</strong></label>
            <input className="ml-2 border rounded px-2 focus-within:outline-blue-500 p-1"
            type="text"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
            />
          </div>
          <div className="flex justify-end">
            <label><strong>Email:</strong></label>
            <input className="ml-2 border rounded px-2 focus-within:outline-blue-500 p-1"
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            />
        </div>

          <button className="mx-15 border rounded px-4 py-2 bg-blue-500 text-white shadow font-medium cursor-pointer" type="submit">Add User</button>
        </div>
      </form>
    </div>
  )
}

export default AddUserComponent
