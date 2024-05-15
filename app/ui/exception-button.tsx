"use client"

import { useState } from 'react'

export default function ExceptionButton() {
    const [condition, setCondition] = useState(false);

    return (
        <main>
            <button onClick={() => setCondition(true)}>Test Exception</button>
            {condition && (
                <>
                    <div className={fakeError()} />
                </>
            )}
        </main>
   )
}

const fakeError = () => {
    console.log('Throwing a fake error!')
    throw new Error('Whoops!')
}