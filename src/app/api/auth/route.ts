export async function POST(request: Request) {
  const result = await request.json() // result từ server Next.js

  const sessionToken = result.payload?.data?.token

  if (!sessionToken) {
    return Response.json({ message: 'No token' }, { status: 400 })
  }

  return Response.json(result.payload, {
    status: 200,
    headers: {
      'Set-Cookie': `token=${sessionToken}; Path=/; HttpOnly; SameSite=Strict`
    }
  })
}
