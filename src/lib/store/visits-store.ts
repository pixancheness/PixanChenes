import { create } from 'zustand'
import { siteStatsService } from '../supabase/client'

interface VisitsState {
  totalVisits: number
  isLoading: boolean
  hasVisited: boolean
  
  // Acciones
  loadTotalVisits: () => Promise<void>
  incrementVisits: () => Promise<void>
  markAsVisited: () => void
}

export const useVisitsStore = create<VisitsState>((set, get) => ({
  totalVisits: 0,
  isLoading: false,
  hasVisited: false,

  loadTotalVisits: async () => {
    try {
      set({ isLoading: true })
      const total = await siteStatsService.getTotalVisits()
      set({ totalVisits: total })
    } catch (error) {
      console.error('Error loading total visits:', error)
    } finally {
      set({ isLoading: false })
    }
  },

  incrementVisits: async () => {
    try {
      const newTotal = await siteStatsService.incrementVisits()
      set({ totalVisits: newTotal, hasVisited: true })
      
      // Marcar en sessionStorage que ya se visitó en esta sesión
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('pixan_chenes_visited', 'true')
      }
    } catch (error) {
      console.error('Error incrementing visits:', error)
    }
  },

  markAsVisited: () => {
    set({ hasVisited: true })
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('pixan_chenes_visited', 'true')
    }
  }
}))
