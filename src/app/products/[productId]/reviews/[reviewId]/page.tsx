import { notFound } from 'next/navigation'

export default function ReviewDetail({ params } : { params: { productId: string, reviewId: string } }) {

    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    else return <h1>This is {params.productId} and review { params.reviewId }</h1>
}