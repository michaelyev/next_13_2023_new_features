import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata:Metadata = {
    title: 'users'

}

const Users = async () => {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData

    const content = (
        <section>
            <h2>
                <Link href='/'>Home</Link>
            </h2>
            {users.map(user => {
                return(
                    <>
                    <p key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                        <br />

                    </p>
                    </>
                )
            })}
        </section>
    )


  return (
    content
  )
}

export default Users
