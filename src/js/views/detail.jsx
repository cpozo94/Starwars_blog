import React from "react";
import { useParams } from "react-router-dom";



const Detail = () => {

    const params = useParams();
    console.log("params",params)

    return(
        <div>
            <h1>Detail Todo</h1>
            <p>title : {params.title}</p>
            <p>description: {params.description}</p>
        </div>

    )
}

export default Detail;