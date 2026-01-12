import './ProductDetails.css';

const Card = (props) => {
    return (
        <div className='card-container'>
            <div className="card">
                <div className="product-name">
                   <span>Product Name :</span> {props.productName}
                </div>
                <div className="price">
                   <span>Price :</span> {props.price}
                </div>
                <div className="category">
                   <span>Category Name : </span> {props.category}
                </div>
                <div className="rating">
                   <span>Rating :</span>  <span>{props.rating >= 4.5 ? "⭐ Excellence" : props.rating >= 4 ? "⭐ Good " : props.rating < 4 ? "⭐ Average" : ''}</span> <span>({props.rating})</span>
                </div>
                <div className="stock">
                   <span>Stock Status :</span> <span style={{color: props.stock ? "#27ae60" : "#e74c3c"}}>{props.stock ? "In Stock" : "Out of Stock"}</span>
                </div>
                {props.discount > 0 && 

                    <div className="discount">
                        <span>Discount :</span> {props.discount} % Off
                    </div>
                }
            </div>
        </div>
    )
}

export default Card
