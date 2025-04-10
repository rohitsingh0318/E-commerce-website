import React from 'react'

const ProductList = ({product, addCard}) => {
    
    
  return (
    <div className='container my-5'>
        <h1 className="text-primary my-5">Feature Product</h1>
        <div className="row p-4">
            {product.map(product => 
                <div key={product.id} className="col-md-4 my-4">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={`/E-commerce-website/${product.image}`} className="card-img-top img-fluid object-fit-cover" style={{height:'20rem'}} alt="..."/>
                        <div className="card-body d-flex flex-column justify-content-between">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text fw-bold">&#8377; {product.price}</p>
                            <div className="btn-container d-flex gap-3">
                             <a href="#" onClick={()=> addCard(product)} className="btn btn-light">Add to Card</a>
                             <a href="#" className="btn btn-dark">Buy Now</a>
                            </div>
                        </div>
                        </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default ProductList