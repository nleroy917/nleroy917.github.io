import { FC } from 'react'
import { Publication } from '.'

type PublicationCardProps = {
  entry: Publication
}

const Authors = ({ authors }: { authors: string[] }) => {
  const meMatches = [
    'Nathan LeRoy',
    'Nathan J. LeRoy',
    'Nathan J LeRoy',
    'Nathaniel J. LeRoy',
    'Nathaniel J LeRoy',
    'Nathaniel LeRoy',
  ]
  return (
    <>
      {authors.map((author, index) => {
        const isMe = meMatches.includes(author)
        const isLast = index === authors.length - 1
        const separator = isLast ? '' : ', '
        const bold = isMe ? 'font-bold' : ''
        return (
          <span key={author} className={bold}>
            {author}
            {separator}
          </span>
        )
      })}
    </>
  )
}

export const PublicationCard: FC<PublicationCardProps> = ({ entry }) => {
  return (
    <div
      key={entry.id}
      className="w-full p-2 bg-purple-100 border-2 border-black rounded-md"
    >
      <h2 className="text-base font-bold lg:text-lg">{entry.title}</h2>
      <p className="text-sm lg:text-base">
        <Authors authors={entry.authors} />
      </p>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-row">
          <p className="font-bold">{entry.journal}</p>
          <span className="px-1"></span>
          <p>({entry.year})</p>
        </div>
        <span className="px-1"></span>
        <p className="text-sm lg:text-base">
          DOI: <a href={`https://doi.org/${entry.doi}`}>{entry.doi}</a>
        </p>
      </div>
    </div>
  )
}
