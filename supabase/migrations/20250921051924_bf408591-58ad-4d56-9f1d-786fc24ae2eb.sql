-- Remove the foreign key constraint temporarily to allow sample data
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_user_id_fkey;

-- Make user_id nullable for sample data
ALTER TABLE public.profiles ALTER COLUMN user_id DROP NOT NULL;