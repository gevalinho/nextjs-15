import { use } from 'react';
import {z} from 'zod';

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({
      message: 'Invalid email address',
    }),
  password: z
    .string()
    .min(1, {
      message: 'Password is required',
    })
    .min(8, {
      message: 'Password must be at least 8 characters long',
    })
    .max(32, {
      message: 'Password must be at most 32 characters long',
    }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    }),
  rememberMe: z.boolean(),
  
});

export const SignUpSchema = SignInSchema.extend({
    username: z
    .string()
    .min(1, {
      message: 'Username is required',
    })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: 'Username must contain only letters and numbers',
    })
    .max(32, {
      message: 'Username must be at most 32 characters long',
    }),
  name: z
    .string()
    .min(1, {
      message: 'Name is required',
    }).regex(/^[a-zA-Z0-9]+$/, {
      message: 'Name must contain only letters and numbers',
    })
    .max(32, {
      message: 'Name must be at most 32 characters long',
    }),
  confirmPassword: z
    .string()
    .min(1, {
      message: 'Confirm password is required',
    })
    .min(8, {
      message: 'Password must be at least 8 characters long',
    })
    .max(32, {
      message: 'Password must be at most 32 characters long',
    }),
});
export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({
      message: 'Invalid email address',
    }),
});
export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, {
        message: 'Password is required',
      })
      .min(8, {
        message: 'Password must be at least 8 characters long',
      })
      .max(32, {
        message: 'Password must be at most 32 characters long',
      }),
    confirmPassword: z
      .string()
      .min(1, {
        message: 'Confirm password is required',
      })
      .min(8, {
        message: 'Password must be at least 8 characters long',
      })
      .max(32, {
        message: 'Password must be at most 32 characters long',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',          path: ['confirmPassword'],
  });
export const ChangePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, {
        message: 'Current password is required',
      })
      .min(8, {
        message: 'Password must be at least 8 characters long',
      })
      .max(32, {
        message: 'Password must be at most 32 characters long',
      }),
    newPassword: z
      .string()
      .min(1, {
        message: 'New password is required',
      })
      .min(8, {  message: 'Password must be at least 8 characters long',
      })
  })
