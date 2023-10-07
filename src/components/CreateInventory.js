import React, { useState } from "react";

const CreateInventory = () => {

    const [itemName, setItemName] = useState();
    const [quantity, setQuantity] = useState();
    const [type, setType] = useState();
    const [message, setMessage] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            
            let res = await fetch("http://localhost:8081/inventories/create",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ itemName: itemName, quantity: quantity, type:type }),
                }

            )

            // let resJson = await res.json();

            if (res.status === 201) {
                setItemName("");
                setQuantity("");
                setType("")
                setMessage("Inventory created successfully");
            } else {
                setMessage("Some error occured");
            }

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
        
            <div class="cotainer">
                <div class="row">
                    <div class="col-sm-3"></div>


                    <div class="col-sm-6">

                        <form onSubmit={submitHandler}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Item Name</label>
                                <input type="text" onChange={(e) => setItemName(e.target.value)} class="form-control" value={itemName} id="item" aria-describedby="itemHelp" placeholder="Enter Item Name" />
                            </div>
                            <div class="form-group">
                                <label for="quantity">Quantity</label>
                                <input type="number" class="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} id="quantity" placeholder="Enter Quantity" />
                            </div>
                            <div class="form-group">
                                <label for="type">Type</label>
                                <input type="text" value={type} onChange={(e) => setType(e.target.value)} class="form-control" id="type" placeholder="Enter Type" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>

                            <div className="message">{message ? <p style={{ color: 'green',fontSize:"50px"}}>{message}</p> : null}</div>
                        </form>

                    </div>

                    <div class="col-2"></div>
                </div>
            </div>
        </div>

    )
}

export default CreateInventory;