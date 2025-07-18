import { z } from 'zod';

export const loginSchema = z.object({
	email: z.union([z.string().email(), z.literal('')]),
	password: z.union([z.string().min(6), z.literal('')])
});
export const resetSchema = z.object({
	email: z.union([z.string().email(), z.literal('')])
});

export type ResetSchema = typeof resetSchema;
export type LoginSchema = typeof loginSchema;
