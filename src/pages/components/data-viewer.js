export default function DataViewer({data}) {
    if (data) {
        const APIEntries = data.entries.slice(0, 50)
        return <div>
            <h1>{data.count} entries. Here are the first 50:</h1>
            <table>
                <thead>
                <tr>
                    <th>API</th>
                    <th>Description</th>
                    <th>Auth</th>
                    <th>HTTPS</th>
                    <th>Cors</th>
                    <th>Link</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {
                    APIEntries.map((entry, id) => {
                        return <tr key={id}>
                            <td>{entry.API}</td>
                            <td>{entry.Description}</td>
                            <td>{entry.Auth}</td>
                            <td>{entry.HTTPS}</td>
                            <td>{entry.Cors}</td>
                            <td>{entry.Link}</td>
                            <td>{entry.Category}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>

        </div>
    }
}
