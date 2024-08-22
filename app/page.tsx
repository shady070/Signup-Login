import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='flex items-center justify-center flex-col min-h-screen '>
      <Link href='/login'>
        <button className='bg-black text-white md:px-[200px] px-[100px] py-[20px] rounded-md'>Login</button>
      </Link>
      <Link className='pt-[10px]' href='/signup'>Dont have an Account? <span className='text-[blue] underline'>Signup</span></Link>
    </main>
  )
}

export default page