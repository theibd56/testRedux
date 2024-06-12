const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div id="" className="jumbotron">
            <h1 className="counter">{counter}</h1>
            <button onClick={inc} className="btn btn-primary">DEC</button>
            <button onClick={dec} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    )
}

export default Counter