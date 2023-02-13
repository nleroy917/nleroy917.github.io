import { FC, useState, useEffect } from 'react'
import { SoftwareEntry } from '@/utils/cms'
import { fetchStars } from '@/utils/github'

interface Props {
  entry: SoftwareEntry
}

export const SoftwareCard: FC<Props> = ({ entry }) => {
  const [stars, setStars] = useState(0)
  useEffect(() => {
    fetchStars(entry.registry).then((stars) => {
      setStars(stars)
    })
  }, [entry.registry])
  return (
    <div className="p-2 border-2 border-black rounded-md my-3">
      <div className="flex flex-row items-center">
        <h2 className="font-bold text-xl">{entry.name}</h2>
        <div className="ml-2">
          ★ <span>{stars}</span>
        </div>
      </div>
      <p className="mb-1">{entry.description}</p>
      <div className="flex flex-row">
        <a href={entry.github}>{entry.github}</a>
      </div>
    </div>
  )
}
