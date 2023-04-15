import DataViewer from "@/pages/components/data-viewer";

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.publicapis.org/entries`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default function StaticSiteGeneration({data}) {
    return DataViewer({data})
}