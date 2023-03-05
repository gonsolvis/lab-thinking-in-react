import jsonData from '../data.json'

function ProductRow() {
    return (
        <div className="border border-dark">
            <h1>Product Row</h1>
            <table className="table table-dark ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {jsonData.map((data, index) => (
                        <tr key={data.id}>
                            <th scope="row">{index + 1}</th>
                            <td style={{ color: data.inStock ? 'white' : 'red' }}>{data.name}</td>
                            <td>{data.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductRow
