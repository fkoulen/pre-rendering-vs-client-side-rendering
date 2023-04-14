export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.publicapis.org/entries`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default function ServerSideRendering({data}) {
    return (
        <div>
            <h1>{data.count}</h1>
        </div>
    )
}