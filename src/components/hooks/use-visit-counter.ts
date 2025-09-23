import { useEffect } from 'react'
import { useVisitsStore } from '@/lib/store/visits-store'

export const useVisitCounter = () => {
  const { 
    totalVisits, 
    isLoading, 
    hasVisited, 
    loadTotalVisits, 
    incrementVisits, 
    markAsVisited 
  } = useVisitsStore()

  useEffect(() => {
    // Verificar si es una nueva sesión
    const checkAndCountVisit = async () => {
      // Cargar el total actual de visitas
      await loadTotalVisits()
      
      // Verificar si ya se visitó en esta sesión
      if (typeof window !== 'undefined') {
        const alreadyVisited = sessionStorage.getItem('pixan_chenes_visited')
        
        if (!alreadyVisited && !hasVisited) {
          // Es una nueva visita en esta sesión, incrementar contador
          await incrementVisits()
        } else {
          // Ya se visitó, solo marcar como visitado
          markAsVisited()
        }
      }
    }

    checkAndCountVisit()
  }, [loadTotalVisits, incrementVisits, markAsVisited, hasVisited])

  return {
    totalVisits,
    isLoading,
    hasVisited
  }
}
