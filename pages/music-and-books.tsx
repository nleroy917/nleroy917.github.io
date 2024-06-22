import { Layout } from '@/components/layout/layout'
import { GenreTag } from '@/components/music/genre-tag'
import { SpotifyAlbumPreview } from '@/components/music/spotify-album-preview'
import { fetchContent, getBooks, getMusic } from '@/utils/cms'
import { InferGetStaticPropsType, NextPage } from 'next'
import ReactMarkdown from 'react-markdown'

export const getStaticProps = async () => {
  const music = getMusic()
  const books = getBooks()
  return {
    props: {
      musicMarkdown: fetchContent('./data/cms/interests/music.md'),
      music: music,
      bookMarkdown: fetchContent('./data/cms/interests/books.md'),
      books: books,
    },
  }
}

const Interests: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  musicMarkdown,
  music,
  bookMarkdown,
  books,
}) => {
  return (
    <Layout>
      <div className="mt-4 border-b border-gray-400 markdown">
        <ReactMarkdown>{bookMarkdown}</ReactMarkdown>
      </div>
      <div className="flex flex-col mb-8">
        <ul>
          {books.books.map((book) => (
            <li key={book.id} className="p-2">
              <span className="font-bold">{book.title}</span> by{' '}
              <span className="italic">{book.author}</span> ({book.year}) -{' '}
              <span>{book.genre}</span>
              {/* Rating out of 5 (show stars) */}
              <a
                className="ml-2 text-black no-underline"
                href={book.goodreads_review}
              >
                (
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`${
                      index < book.goodreads_number_of_stars
                        ? 'text-yellow-500'
                        : 'text-gray-400'
                    }`}
                  >
                    ★
                  </span>
                ))}
                )
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b border-gray-400 markdown">
        <ReactMarkdown>{musicMarkdown}</ReactMarkdown>
      </div>
      <div className="flex flex-col mt-2 md:grid md:grid-cols-3 md:gap-4">
        {music.albums.map((album) => (
          <div
            key={album.id}
            className="p-2 my-2 border-2 border-black shadow-md md:my-0 rounded-xl"
          >
            <div className="flex flex-row items-center justify-between">
              <h2 className="mb-0 text-2xl font-bold">{album.title}</h2>
              <GenreTag genre={album.genre} />
            </div>
            <h3 className="mb-1 italic">{album.artist}</h3>
            <SpotifyAlbumPreview albumId={album.spotify_album_id} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Interests
