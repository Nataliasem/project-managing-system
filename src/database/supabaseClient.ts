import { createClient } from '@supabase/supabase-js'
import { SUPABASE_PROJECT_URL, SUPABASE_API_KEY } from '@/constants'

export const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_API_KEY)
