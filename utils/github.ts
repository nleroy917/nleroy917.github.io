import { Octokit } from 'octokit'

const octokit = new Octokit()

export const fetchStars = async (registry: string) => {
  const res = await octokit.request(`GET /repos/${registry}`, {
    owner: registry.split('/')[0],
    repo: registry.split('/')[1],
  })
  const data = await res.data
  const stars = await data.stargazers_count
  return stars
}
