import React from "react";
import loading from "./loadingball.gif"
import gify from "./giphy.gif"

const Spinner = () => {
    return (
        <div style={{ height: '100vh', display: 'flex' ,alignItems: 'center', flexDirection:"column" }}>
                <img src={loading} alt="loading" />
                <img src={gify} alt="loading" style={{marginTop:'-130px', width:'12%'}}/>
            </div>
    )
}

export default Spinner