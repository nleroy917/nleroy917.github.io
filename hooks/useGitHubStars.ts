import { useQuery } from '@tanstack/react-query'
import { fetchStars } from '@/utils/github'

export const useGitHubStars = (repo: string) => {
  return useQuery(['github', repo], () => fetchStars(repo), {
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    refetchOnWindowFocus: false,
  })
}
