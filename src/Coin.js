import React from 'react'

const Coin = (props) => {
    const {name,image,symbol,current_price,total_volume} = props.coindata;
  return (
    <div className='coin-container'>
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">{current_price}</p>
                <p className="coin-volume">{total_volume}</p>
            </div>
        </div>
    </div>
  )
}

export default Coin