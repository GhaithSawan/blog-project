import React from 'react';
import { useParams } from 'react-router-dom';
import Postslist from "../component/postslist"

const Catigorypage = () => {
    let {catigory} = useParams()
    return (
        <div className='allpages p-5' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h2 className="title mb-5" style={{ margin: "auto" }}>
                Posts For {catigory}
            </h2>
            <Postslist requestType={"caticory"}  value={catigory}/>

        </div>
    );
}

export default Catigorypage;
