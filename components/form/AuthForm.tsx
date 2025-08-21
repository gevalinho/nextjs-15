'use client'
import React from 'react'
import {zodResolver} from '@hookform/resolvers/zod'
import {DefaultValues, FieldValues, Path, SubmitHandler, useForm} from 'react-hook-form'
import {z, ZodType} from 'zod'
import { Button } from '../ui/button'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '../ui/form'

const AuthForm = () => {
  return (
    <div>AuthForm</div>
  )
}

export default AuthForm