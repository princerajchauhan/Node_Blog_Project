import React from "react";
import loading from "./loadingball.gif"
import gify from "./giphy.gif"

const Spinner = () => {
    return (
        <div style={{ height: '100vh', display: 'flex' ,alignItems: 'center', flexDirection:"column", position:'relative' }}>
                <img src={loading} alt="loading" />
                <img src={gify} alt="loading" style={{width:'200px', position:'absolute', top:"65px"}}/>
            </div>
    )
}

export default Spinner