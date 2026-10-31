import styles from './ProductCard.module.css';

function ProductCard({ title, price, image, rating, onClick }) {
    return (
        <div className={styles.card}>
            <img
                src={image}
                alt={title}
                className={styles.image}
            />
            <p>{title}</p>
            <p>Цена: {price}</p>
            <span>Рейтинг: {rating} ★</span>
            <button className={styles.button} onClick={onClick}>Купить</button>
        </div>
    );
}

export default ProductCard;