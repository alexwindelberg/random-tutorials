
export default function ReviewDetail({ params } : { params: { productId: string, reviewId: string } }) {
    return <h1>This is {params.productId} and review { params.reviewId }</h1>
}