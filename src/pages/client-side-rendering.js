import {useEffect, useState} from "react";

export default function ClientSideRendering() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://api.publicapis.org/entries')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    if (!data) return

    return (
        <div>
            <h1>{data.count}</h1>
        </div>
    )
}