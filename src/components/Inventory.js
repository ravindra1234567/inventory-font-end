import React, { useEffect, useState } from "react";


const Inventory = () => {

    const [data, setData] = useState();

    useEffect(() => {
        fetch("http://localhost:8081/inventories/all")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error))
            .catch(e => console.error(e))
    }, [])

    console.log(data)

    return (
        <div>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sno.</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
              {
                data? data.map((output,key) =>
                    <tr>
                        <td>{++key}</td>
                        <td>{output.itemName}</td>
                        <td>{output.quantity}</td>
                        <td>{output.type}</td>
                    </tr>
                )
                :
                "Loading.........."
              }
                    
                </tbody>
            </table>

        </div>
    )
}

export default Inventory;