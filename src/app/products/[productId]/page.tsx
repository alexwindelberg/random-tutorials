

export default function ProductDetails({ params }: { params: { productId: string} }) {
    return <>
    <h1>Product {params.productId}</h1>
    <h2>Product Name</h2>
    <h2>Product Cost</h2>
    <h2>Product Details</h2>
    </>

}