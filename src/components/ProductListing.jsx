
import ProductDetails from './ProductDetails';

const ProductListing = (props) => {
    
  return (
        <div className="app-container">
            {props.products.map((elem) => (
                <ProductDetails
                key={elem.id}
                productName={elem.name}
                price={elem.price}
                category={elem.category}
                rating={elem.rating}
                stock={elem.stock}
                discount={elem.discount}
                />
            ))}
        </div>
  )
}

export default ProductListing;