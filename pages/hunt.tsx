import { NextPage } from 'next'
import { Fragment, useState } from 'react'

const Hunt: NextPage = () => {
  const [code, setCode] = useState('')
  const [unlocked, setUnlocked] = useState(false)

  const handleCodeSubmit = () => {
    // just take if the code is 4 digits long
    if (code.length === 4) {
      setUnlocked(true)
    } else {
      alert('Please enter a valid code')
    }
  }

  return (
    <div className="flex flex-col items-center h-screen p-2">
      <div className="my-auto space-y-4">
        <p className="w-full text-2xl lg:w-94">
          Your next clue… Will be found near a monarch’s frozen delight There,
          we sat uncertain on a Friday night. With spoons in hand, adoption
          forms galore— We expanded our ”family” from 3 to 4.
        </p>
        <div className="flex flex-row items-center justify-center space-x-2">
          <input
            onChange={(e) => setCode(e.target.value)}
            value={code}
            type="text"
            placeholder="Got a code? Not yet? Just ignore :)"
            className="w-full p-2 border-2 border-gray-300 rounded-md lg:w-96"
          />
          <button
            onClick={handleCodeSubmit}
            type="button"
            disabled={!code}
            className="p-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Enter
          </button>
        </div>
        {unlocked && (
          <Fragment>
            <div className="mt-4 text-green-600">
              Congratulations! You have unlocked your final clue.
            </div>
            <div className="mt-4">
              A lake in the mountains, peaceful and wide, Where triathlon
              strokes and laughter collide. Find the shore where calm waters
              wake— The journey ends at our favorite lake.
            </div>
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Hunt
