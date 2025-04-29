'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { toast } from '@/hooks/use-toast'
import { signIn } from 'next-auth/react'
import ROUTSE from '@/constants/routes'
import error from 'next/error'

const SocialAuthForm = () => {
    const buttonClass = 'background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5'

    const handleSignIn = async (provider: "github" | "google") => {
        // Handle sign-in logic here
        try {await signIn(provider, {
            callbackUrl: ROUTSE.HOME,
          redirect: false,
          })
        } catch (error){
            console.log(error)
        }
        // Handle error}
        
        console.log(`Sign in with ${provider}`)

        toast({   
            title: 'Sign in failed',
            description:
            error instanceof Error
            ? error.message
            : "An error occured during sign-in",
             variant: 'destructive',
            
        })
    }
  return (
    <div className='flex flex-wrap items-center justify-center gap-2.5'>
    <Button className={buttonClass} onClick={() => handleSignIn('github')}>
       <Image
        src='/icons/google.svg'
        alt='Google'
        width={20}
        height={20}
        className='mr-2 invert-colors object-contain' />
        <span>Sign in with Google</span>
    </Button>
    <Button className={buttonClass} onClick={() => handleSignIn('google')}>
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