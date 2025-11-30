import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { auth } from './auth'

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    console.log('redirect to signin')
    return NextResponse.redirect(new URL('/signin', request.url))
  }
  return NextResponse.next()
}

export const config = {
  runtime: 'nodejs',
  matcher: ['/'],
}
