function ProductInfo({ productData}) {
  return (
    <div className=" font-primary max-w-[400px]">
      <h1 className="leading-relaxed font-extrabold text-5xl text-text-primary py-2 sm:py-4">
        {productData.title}
      </h1>
      <p className="font-medium text-base text-text-primary/70">
      {'description will be added later'} 
      </p>
      <div className="text-xl lg:text-3xl text-palette-primary font-bold py-4 px-1">
       <span>Rs. {productData.price}</span>  
      </div>
    </div>
  )
}

export default ProductInfo
