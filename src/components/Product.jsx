import React, { useState, useEffect } from 'react'
import { getProduct } from '../services/userapi';

export default function Product() {
    const defaultData = { title: '', description: '', price: '', discountPercentage: '', rating: '', brand: '', category: '', thumbnail: '', images: [] };
    const [product, setProduct] = useState(defaultData);
    const { title, description, price, discountPercentage, rating, brand, category, images, thumbnail } = product;
    useEffect(async () => {
        setProduct(await getProduct());
    });
    return (
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <p>Rs. {price} discountPercentage - {discountPercentage}</p>
            <p>rating - {rating} with bbrand - {brand} category {category} </p>
            <img src={thumbnail} />
            {images.map(e => (
                <img src={e} />
            ))}
        </div>
    )
}
