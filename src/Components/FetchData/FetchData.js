import  { useState, useEffect } from 'react';
import styles from './FetchData.module.css';
const FetchData = () => {
const [data, setData] = useState(null);

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
}, []);
console.log(data)
if (!data) {
    return <p>Loading...</p>;
}



return (
    <div>
       <ul className={styles.listStyles}>
        {data.map((item) => (
          <li className={styles.itemStyles} key={item.id} >
            <div>{item.title}  </div>
            <div>{item.price}$ </div>
            <img src={item.image} alt="im"/>
            <button className={styles.button}>Buy Now!</button>

          </li>
        ))}
      </ul>
    </div>
);
};
export default FetchData