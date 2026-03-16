import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL
const supabaseServerKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.SUPABASE_SERVICE_KEY ??
  process.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseServerKey) {
  throw new Error(
    'Missing Supabase server env vars. Set SUPABASE_URL/VITE_SUPABASE_URL and preferably SUPABASE_SERVICE_ROLE_KEY.',
  )
}

export const supabaseServer = createClient(supabaseUrl, supabaseServerKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})
