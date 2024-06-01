'use client'

import { FC } from "react"

const error = ({
    error,
    reset
}: {
    error: Error,
    reset: () => void
}) => {
    return ( 
        <button onClick={reset}>Try again</button>
    )
}

export default error