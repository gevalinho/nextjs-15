import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const SocialAuthForm = () => {
    const buttonClass = 'background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5'
  return (
    <div className='flex w-full items-center justify-center gap-2.5'>
    <Button className={buttonClass}>
       <Image
        src='/icons/google.svg'
        alt='Google'
        width={20}
        height={20}
        className='mr-2 invert-colors object-contain' />
        <span>Sign in with Google</span>
    </Button>
    <Button className={buttonClass}>
       <Image
        src='/icons/github.svg'
        alt='Github'
        width={20}
        height={20}
        className='mr-2 invert-colors object-contain' />
        <span>Sign in with Github</span>
    </Button>
    </div>
  )
}

export default SocialAuthForm