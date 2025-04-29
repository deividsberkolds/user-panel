import React, { useState } from 'react'
import { User } from '../types/User'
import UserDetails from './UserDetails'
import Loading from './Loading'

interface UserListProps {
  users: User[]
  loading: boolean
  error: string | null
}

const UserList: React.FC<UserListProps> = ({ users, loading, error }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p className="text-red-500 my-4">Error: {error}</p>
  }

  if (users.length === 0) {
    return <p className="text-light-500 my-4">No users found.</p>
  }

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-4 font-medium text-left">Name</th>
              <th className="py-3 px-4 font-medium text-left">Email</th>
              <th className="py-3 px-4 font-medium text-left">Phone</th>
              <th className="py-3 px-4 font-medium text-left">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.phone}</td>
                <td className="py-2 px-4">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <UserDetails
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </>
  )
}

export default UserList
