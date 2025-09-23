import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// Funciones específicas para el contador de visitas
export const siteStatsService = {
  // Incrementar el contador de visitas usando la función SQL
  async incrementVisits(): Promise<number> {
    const supabase = createClient()
    
    const { data, error } = await supabase.rpc('increment_total_visits')
    
    if (error) {
      console.error('Error incrementing visits:', error)
      throw error
    }
    
    return data as number
  },

  // Obtener el total actual de visitas
  async getTotalVisits(): Promise<number> {
    const supabase = createClient()
    
    const { data, error } = await supabase
      .from('site_stats')
      .select('total_visits')
      .eq('id', 1)
      .single()
    
    if (error) {
      console.error('Error getting total visits:', error)
      return 0
    }
    
    return data?.total_visits || 0
  }
}