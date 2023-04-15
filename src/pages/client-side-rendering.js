import {useEffect, useState} from "react";
import DataViewer from "@/pages/components/data-viewer";

export default function ClientSideRendering() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://api.publicapis.org/entries')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    return DataViewer({data})
}