import React, { useState } from 'react'
import { useNavigate, } from 'react-router-dom'

function Tickets() {
    const navigate = useNavigate();

    const [count, setCount] = useState(0);
    // const [ticketType,setTicketType] = useState(false);
    const [isActive, setIsActive] = useState(false);

    // const handleClick = () => {
    //     setIsActive(current => !current);
    // };

    const [type, setType] = useState("");
    const [price, setprice] = useState(100);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log(isActive)
    };

    // ticket type
    const selectStandard = (value) => {
        if (value === 'standard') {
            console.log("hi")  ;
            setType("Standard seat selected") ; 
            setprice(100 * count)
        }else if(value === 'premium'){
            console.log('hey')
            setType('Premium seat selected')
            setprice(100 * count)
        }
        // value === 'standard' && 'premium' ? setType('Standard seat selected ') : setType('Premium seat selected ')
    }

    // ticket count
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const seatFive = () => {
        if (count === count) {
            // console.log(array.slice(0, count).length * 100);
            var price = 100;
            var toatlAmount = array.slice(0, count).length * price;
            console.log(toatlAmount)
        }
    }
    seatFive();
    return (
        <>
            <div className='mainTickets'>
                <div className="mainNav">
                    <div className='navChild' id="navOne">Book my seat</div>
                    <div className='navChild' onClick={() => navigate(-1)}> ← Go back</div>

                </div>
                <div className='ticketSelect' >
                    <div className='abc'>
                        <div>
                            <select className='typeSelection' onChange={(e) => selectStandard(e.target.value)}>
                                <option value=''>Ticket type</option>
                                <option value='standard' onClick={handleClick}>Standard</option>
                                <option value='premium' onClick={handleClick}>Premium</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={() => setCount(count - 1)}>-</button>
                            <span> QTY : {count}</span>
                            <button onClick={() => setCount(count + 1)}>+</button>
                        </div>
                    </div>
                </div>
                <div className='standard'>
                    <p className='type'>{type}</p>
                    <div className='row' >
                        <div className='seat' >1</div>
                        <div className='seat'>2</div>
                        <div className='seat'>3</div>
                        <div className='seat'>4</div>
                        <div className='seat' >5</div>
                        <div className='seat'>6</div>
                        <div className='seat'>7</div>
                        <div className='seat'>8</div>
                        <div className='seat'>9</div>
                        <div className='seat'>10</div>
                    </div>
                    <div className='row'>
                        <div className='seat'>1</div>
                        <div className='seat'>2</div>
                        <div className='seat'>3</div>
                        <div className='seat'>4</div>
                        <div className='seat'>5</div>
                        <div className='seat'>6</div>
                        <div className='seat'>7</div>
                        <div className='seat'>8</div>
                        <div className='seat'>9</div>
                        <div className='seat'>10</div>
                    </div>
                    <div className='row'>
                        <div className='seat'>1</div>
                        <div className='seat'>2</div>
                        <div className='seat'>3</div>
                        <div className='seat'>4</div>
                        <div className='seat'>5</div>
                        <div className='seat'>6</div>
                        <div className='seat'>7</div>
                        <div className='seat'>8</div>
                        <div className='seat'>9</div>
                        <div className='seat'>10</div>
                    </div>
                    <div className='row'>
                        <div className='seat'>1</div>
                        <div className='seat'>2</div>
                        <div className='seat'>3</div>
                        <div className='seat'>4</div>
                        <div className='seat'>5</div>
                        <div className='seat'>6</div>
                        <div className='seat'>7</div>
                        <div className='seat'>8</div>
                        <div className='seat'>9</div>
                        <div className='seat'>10</div>
                    </div>
                    <div className='row'>
                        <div className='seat'>1</div>
                        <div className='seat'>2</div>
                        <div className='seat'>3</div>
                        <div className='seat'>4</div>
                        <div className='seat'>5</div>
                        <div className='seat'>6</div>
                        <div className='seat'>7</div>
                        <div className='seat'>8</div>
                        <div className='seat'>9</div>
                        <div className='seat'>10</div>
                    </div>
                </div>
                <div className='premium'>
                    {/* <p>Premium</p> */}
                    <div className='row'>
                        <div className='seat'>1</div>
                        <div className='seat'>2</div>
                        <div className='seat'>3</div>
                        <div className='seat'>4</div>
                        <div className='seat'>5</div>
                        <div className='seat'>6</div>
                        <div className='seat'>7</div>
                        <div className='seat'>8</div>
                        <div className='seat'>9</div>
                        <div className='seat'>10</div>
                    </div>
                    <div className='row'>
                        <div className='seat'>1</div>
                        <div className='seat'>2</div>
                        <div className='seat'>3</div>
                        <div className='seat'>4</div>
                        <div className='seat'>5</div>
                        <div className='seat'>6</div>
                        <div className='seat'>7</div>
                        <div className='seat'>8</div>
                        <div className='seat'>9</div>
                        <div className='seat'>10</div>
                    </div>
                    <div className='row'>
                        <div className='seat'>1</div>
                        <div className='seat'>2</div>
                        <div className='seat'>3</div>
                        <div className='seat'>4</div>
                        <div className='seat'>5</div>
                        <div className='seat'>6</div>
                        <div className='seat'>7</div>
                        <div className='seat'>8</div>
                        <div className='seat'>9</div>
                        <div className='seat'>10</div>
                    </div>
                    <div className='row'>
                        <div className='seat'>1</div>
                        <div className='seat'>2</div>
                        <div className='seat'>3</div>
                        <div className='seat'>4</div>
                        <div className='seat'>5</div>
                        <div className='seat'>6</div>
                        <div className='seat'>7</div>
                        <div className='seat'>8</div>
                        <div className='seat'>9</div>
                        <div className='seat'>10</div>
                    </div>
                    <div className='row'>
                        <div className='seat'>1</div>
                        <div className='seat'>2</div>
                        <div className='seat'>3</div>
                        <div className='seat'>4</div>
                        <div className='seat'>5</div>
                        <div className='seat'>6</div>
                        <div className='seat'>7</div>
                        <div className='seat'>8</div>
                        <div className='seat'>9</div>
                        <div className='seat'>10</div>
                    </div>
                </div>
                <div className='mainScreen'>
                    <div className='screen'>All eyes this way please!</div>
                </div>
            </div>
            <div>
                <p><strong>Total QTY : {count} <span style={{color : 'black'}}>Total Amount : {price}</span></strong></p>
            </div>
        </>
    )
}
export default Tickets
