import { MouseEventHandler } from 'react'
import { authClient } from '../lib/auth-client'
import { useRouter } from 'next/router'

export default function SignIn() {
  const router = useRouter()

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()
    await authClient.signOut()
    router.push('/')
  }

  return (
    <>
      <h2>logout</h2>
      <button type='button' onClick={handleClick}>
        logout
      </button>
    </>
  )
}
