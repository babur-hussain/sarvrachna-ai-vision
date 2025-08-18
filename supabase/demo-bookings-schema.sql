-- Demo Bookings Table Schema for Supabase
-- Run this SQL in your Supabase SQL Editor

-- Create the demo_bookings table
CREATE TABLE IF NOT EXISTS public.demo_bookings (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now(),

  name              TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  email             TEXT NOT NULL CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone             TEXT,
  company           TEXT,
  message           TEXT,

  preferred_date    DATE NOT NULL,
  preferred_time    TIME NOT NULL,
  service           TEXT NOT NULL CHECK (service IN ('ai-solutions', 'web-development', 'custom-solution')),
  
  status            TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'scheduled', 'contacted', 'cancelled')),
  metadata          JSONB NOT NULL DEFAULT '{}'::jsonb
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS demo_bookings_created_at_idx ON public.demo_bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS demo_bookings_email_idx ON public.demo_bookings (email);
CREATE INDEX IF NOT EXISTS demo_bookings_date_service_idx ON public.demo_bookings (preferred_date, service);

-- Create unique constraint to prevent double bookings
CREATE UNIQUE INDEX IF NOT EXISTS demo_bookings_unique_slot_idx 
ON public.demo_bookings (email, preferred_date, preferred_time, service);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS trg_demo_bookings_updated_at ON public.demo_bookings;
CREATE TRIGGER trg_demo_bookings_updated_at
  BEFORE UPDATE ON public.demo_bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

-- Enable Row Level Security (RLS)
ALTER TABLE public.demo_bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert (for website visitors)
DROP POLICY IF EXISTS "allow insert from anon" ON public.demo_bookings;
CREATE POLICY "allow insert from anon"
ON public.demo_bookings FOR INSERT
TO anon
WITH CHECK (true);

-- Policy: Allow service role to read all bookings (for admin/backend)
DROP POLICY IF EXISTS "allow select to service_role" ON public.demo_bookings;
CREATE POLICY "allow select to service_role"
ON public.demo_bookings FOR SELECT
TO service_role
USING (true);

-- Policy: Allow service role to update bookings
DROP POLICY IF EXISTS "allow update to service_role" ON public.demo_bookings;
CREATE POLICY "allow update to service_role"
ON public.demo_bookings FOR UPDATE
TO service_role
USING (true) WITH CHECK (true);

-- Policy: Allow service role to delete bookings
DROP POLICY IF EXISTS "allow delete to service_role" ON public.demo_bookings;
CREATE POLICY "allow delete to service_role"
ON public.demo_bookings FOR DELETE
TO service_role
USING (true);

-- Insert some sample data for testing (optional)
-- INSERT INTO public.demo_bookings (name, email, preferred_date, preferred_time, service) 
-- VALUES 
--   ('John Doe', 'john@example.com', '2024-01-15', '10:00:00', 'ai-solutions'),
--   ('Jane Smith', 'jane@example.com', '2024-01-15', '14:00:00', 'web-development');

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT ALL ON public.demo_bookings TO anon;
GRANT ALL ON public.demo_bookings TO service_role;
