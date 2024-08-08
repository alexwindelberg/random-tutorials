import { Metadata } from 'next'

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100)
    })
    
    return {
        title : `Product ${title}`
    }
}

export default function ProductDetails({ params }: Props) {
    return <>
    <h1>Product {params.productId}</h1>
    <h2>Product Name</h2>
    <h2>Product Cost</h2>
    <h2>Product Details</h2>
    </>

}