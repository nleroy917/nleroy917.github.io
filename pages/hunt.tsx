import { NextPage } from 'next'
import { Fragment, useState } from 'react'

const REAL_CODE = 123

const Hunt: NextPage = () => {
  const [code, setCode] = useState('')
  const [unlocked, setUnlocked] = useState(false)

  const handleCodeSubmit = () => {
    if (parseInt(code) === REAL_CODE) {
      setUnlocked(true)
    } else {
      alert('Incorrect code. Try again.')
    }
  }

  return (
    <div className="flex flex-col items-center h-screen p-2">
      <div className="my-auto space-y-4">
        <p className="w-full text-2xl lg:w-94">
          Your next clue… Will be found near a monarch’s frozen delight There,
          we sat uncertain on a Friday night. With spoons in hand, adoption
          forms galore— We expanded our ”family” from 3 to four.
        </p>
        <div className="flex flex-row items-center justify-center space-x-2">
          <input
            onChange={(e) => setCode(e.target.value)}
            value={code}
            type="text"
            placeholder="Got a code?"
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
              You've solved every puzzle, retraced our past, At the home where
              my story in Cville began. Now gather three numbers hidden in view—
              Unlock one final map leading straight to me and you. Our journey
              so far brings you here today, But where it truly ends, who's
              really to say? Enter your numbers, the address revealed, A new
              chapter awaits—our future unsealed.
            </div>
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Hunt
