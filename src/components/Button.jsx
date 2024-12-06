import '../styles/Button.css'

function Button({ children,onClick,color}) {
    const classNames=`button ${color}`;
    return (
        <div className="Button">
            <button onClick={onClick} className={classNames}> {children}</button>
        </div>
    )
}

export default Button