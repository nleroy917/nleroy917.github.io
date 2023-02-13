import { FC } from 'react'
import { SoftwareEntry } from '@/utils/cms'
import { Tag } from './tag'
import { useGitHubStars } from '@/hooks/useGitHubStars'

interface Props {
  entry: SoftwareEntry
}

export const SoftwareCard: FC<Props> = ({ entry }) => {
  const { data: stars, isLoading: starsLoading } = useGitHubStars(
    entry.registry
  )

  return (
    <div className="p-2 my-3 bg-purple-200 border-2 border-black rounded-md">
      <div className="flex flex-row items-center">
        <h2 className="text-xl font-bold">{entry.name}</h2>
        <div className="w-16 ml-2 text-sm lg:w-max lg:text-base">
          ★{' '}
          <span>
            {starsLoading ? <span className="animate-pulse">...</span> : stars}
          </span>
        </div>
        <div className="flex flex-row flex-wrap ml-3">
          {entry.tags.map((tag) => (
            <div key={tag} className="ml-2">
              <Tag tag={tag} />
            </div>
          ))}
        </div>
      </div>
      <p className="my-1">{entry.description}</p>
      <div className="flex flex-row">
        <a target="_blank" href={entry.github} rel="noreferrer">
          <i className="mr-1 text-lg text-black bi bi-link-45deg"></i>
          {entry.github}
        </a>
      </div>
    </div>
  )
}
