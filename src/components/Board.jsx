import Dice from './Dice'
import '../styles/Board.css'

function Board({ name, color, gamehistory }) {
    const num = gamehistory[gamehistory.length - 1] || 1
    const sum = gamehistory.reduce((sum, i) => sum + i, 0)//return 값이 하나 일 경우 {} 생략 가능


    return (
        <div>
            <h2>{name}</h2>
            <Dice color={color} num={3} />
            <h3>총점</h3>
            <p>{sum}</p>
            <h3>기록</h3>
            <p>{gamehistory.join(', ')}</p>
        </div>
    )
}

export default Board