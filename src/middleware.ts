import { NextResponse, NextRequest } from 'next/server'

const privatePaths = ['/me']
const authPaths = ['/login', '/register']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  // nếu chưa đăng nhập mà truy cập vào privatePaths thì chuyển hướng về trang login
  if (privatePaths.includes(pathname) && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if (authPaths.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/me', request.url))
  }

  return NextResponse.next() // cho phép tiếp tục
}

// đây là phần định nghĩa các đường dẫn mà middleware sẽ áp dụng
export const config = {
  matcher: [...privatePaths, ...authPaths]
}
