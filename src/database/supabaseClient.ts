import { createClient } from '@supabase/supabase-js'
import { SUPABASE_PROJECT_URL, SUPABASE_API_KEY } from '@/constants'
import type { Database } from '../../database.types'

export const supabase = createClient<Database>(SUPABASE_PROJECT_URL, SUPABASE_API_KEY)
