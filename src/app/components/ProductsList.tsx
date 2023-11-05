import Image from "next/image";
import "./productsList.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const getData = async () => {
  const url = "https://fakestoreapi.com/products";
  const cacheOptions = {
    next: {
      revalidate: 5,
    },
  };

  const response = await fetch(url, cacheOptions);

  if (!response.ok) throw new Error("Запрос неверный!");

  return response.json();
};

const ProductsList = async () => {
  const products = await getData();

  return (
    <div className="apartments-items">
      {products.map((product: any) => (
        <div key={product.id} className="apartment item">
          <div className="item__img">
            <Image
              src={product.image}
              alt="apart"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="item__content">
            <div className="item__content-top">
              <div className="item__content-top__head">
                <Link
                  href={`/products/${product.id}`}
                  className="item__content-title"
                >
                  {product.title}
                </Link>
                <div className="item__content-rating">
                  <FontAwesomeIcon icon={faStar} className="star-icon" />
                  <span className="rating-value">{product.rating.rate}</span>
                </div>
              </div>
              <span className="item__views">
                Просмотров: {product.rating.count}
              </span>
            </div>
            <span className="item__price">Цена: {product.price}$</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
