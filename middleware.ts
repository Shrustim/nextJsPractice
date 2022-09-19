import { NextResponse } from 'next/server'
import type { NextRequest,NextFetchEvent } from 'next/server'
import * as jose from 'jose'
import {JWTSecret} from "./constants"
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const token: any = request.cookies.get('token')
   console.log("cookie token",token) 
  if(token !== undefined){
  //   //user is logged in
  //   //verify jwt token is valid or not
  
        try {
          const {payload} = await jose.jwtVerify(token, new TextEncoder().encode(JWTSecret));
          // console.log("payload",payload)
          return NextResponse.next();
        } catch(err) {
            // err
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
   
  else{
  //   //user is not logged in 
  return NextResponse.redirect(new URL('/login', request.url))
  }
 
    // console.log("middleware File",request.nextUrl)
    
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/profile',
  // matcher: ['/Profile','/about'],
}