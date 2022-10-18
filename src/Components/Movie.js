import React from 'react'
import { useNavigate } from 'react-router-dom'


function Movie() {
    const navigate = useNavigate();
    return (
        <>
            <div className="mainNav">
                <div className='navChild' id="navOne">Book my seat</div>
                <div className='navChild' onClick={()=>navigate('tickets')}>Book tickets</div>
            </div>
            <div className='movie'>
                <div className='movieChild'>
                    <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NGsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00337775-jfxrxxqnvu-portrait.jpg' alt='movieimg' class="responsive" width="300" height="400"/>
                    <button class="btn" onClick={()=>navigate('tickets')}>Book Tickets</button>
                </div>
                <div className='movieChild'>
                    <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTE1ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00117411-cpjhmvqmfe-portrait.jpg' alt='movieimg' class="responsive" width="300" height="400"/>
                    <button class="btn" onClick={()=>navigate('tickets')}>Book Tickets</button>
                </div>
                <div className='movieChild'>
                    <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA1NGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00076943-pfhbyfrcyz-portrait.jpg' alt='movieimg' class="responsive" width="300" height="400" />
                    <button class="btn" onClick={()=>navigate('tickets')}>Book Tickets</button>
                </div>
                <div className='movieChild'>
                    <img src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA0ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00337077-wvjcpscvuj-portrait.jpg' alt='movieimg' class="responsive" width="300" height="400" />
                    <button class="btn" onClick={()=>navigate('tickets')}>Book Tickets</button>
                </div>
            </div>
        </>
    )
}

export default Movie
