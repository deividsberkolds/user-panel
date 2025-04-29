import React, { useState } from 'react'
import { User } from '../types/User'
import UserCard from './UserCard'
import UserDetails from './UserDetails'
import Loading from './Loading'

interface UserCardListProps {
  users: User[]
  loading: boolean
  error: string | null
}

const UserCardList: React.FC<UserCardListProps> = ({
  users,
  loading,
  error,
}) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className="cursor-pointer"
          >
            <UserCard user={user} />
          </div>
        ))}
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

export default UserCardList
