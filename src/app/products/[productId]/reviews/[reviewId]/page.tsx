import { notFound } from 'next/navigation'

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetail({ params } : { params: { productId: string, reviewId: string } }) {

    const random = getRandomInt(2);

    if(random === 1) {
        throw new Error("Error loading review");
    }

    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    
    else return <h1>This is {params.productId} and review { params.reviewId }</h1>
}