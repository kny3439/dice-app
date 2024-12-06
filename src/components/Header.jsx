import Gnb from './Gnb'
function Header() {
    return (
        <div>
            <h2>Header 영역</h2>
            <ul>
                <li>Home</li>
                <li>Project</li>
                <li>Work</li>
                <li>UX/UI</li>
                <li>About</li>
            </ul>
            <Gnb />
        </div>
    )
}

export default Header