
const Coin = (props) => {
    const {name,image,symbol,current_price,market_cap,price_change_percentage_24h,total_volume } = props.coindata;
    const price_change = price_change_percentage_24h;
  return (
    <div className='coin-container'>
        <div className="coin-row">
            <div className="coin">
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">₹{current_price.toLocaleString()}</p>
                <p className="coin-volume">{total_volume.toLocaleString()} </p>
                {price_change < 0?(
                    <p className='coin-percent red'>{price_change.toFixed(2)}% </p>
                ):(
                    <p className='coin-percent green'>{price_change.toFixed(2)}% </p>
                )}
                <p className="coin-market-cap">{market_cap.toLocaleString()}</p>
            </div>
        </div>
    </div>
  )
}

export default Coin