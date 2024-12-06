

function Gnb() {
    const menuData = ['Home', 'Project', 'Work', 'UX/UI', 'ABOUT']
    return (
        <div>
            <ul>
                {
                    menuData.map((item,i) => {
                        return (
                            <li key={i}>{item}</li>
                        )

                    })
                }
            </ul>
        </div>
    )
}

export default Gnb