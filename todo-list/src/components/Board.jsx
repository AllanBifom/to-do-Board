import React from 'react'

function Board({task}) {
    return (
    <>
    <div className='max-w-xl flex flex-col items-center justify-center border'>
        <p>{task}</p>
    </div>
    </>
    )
}

export default Board