import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { authClient } from '@/lib/auth-client'

export default function TopPage() {
  const { data } = authClient.useSession()

  return (
    <>
      <Header />
      <Main>{data?.user.email}</Main>
    </>
  )
}
