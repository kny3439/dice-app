import React, { useState } from 'react'

import Button from './components/Button'
import Board from './components/Board';


function App() {

  const [MygameHistory, setMygameHistory] = useState([])//[]의 의미는 clear
  const [YourgameHistory, setYourgameHistory] = useState([])

  const randomNumber = () => {
    return Math.ceil(Math.random() * 6)
  }


  const handleRollClick = () => {
    const nextNum = randomNumber()
    const nextYouNum = randomNumber()

    setMygameHistory([...MygameHistory, nextNum])
    setYourgameHistory([...YourgameHistory, nextYouNum])
  }

  const handleClearClick = () => {
    setMygameHistory([])
    setYourgameHistory([])
  }



  return (
    <div className='App-container'>
      <div className='App_btn'>
        <Button onClick={handleRollClick} color='blue'>던지기</Button>
        <Button onClick={handleClearClick} color='red'>처음부터</Button>
      </div>
      <div className='App-board'>
        <Board name='me' color='blue' gamehistory={MygameHistory} />
        <Board name='you' color='red' gamehistory={YourgameHistory} />
      </div>

    </div>
  )
}

export default App