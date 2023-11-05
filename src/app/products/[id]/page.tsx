import Image from "next/image";
import "../products.scss";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

const getData = async (id: string) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const cacheOptions = {
    next: {
      revalidate: 30,
    },
  };

  const response = await fetch(url, cacheOptions);

  return response.json();
};

export function generateMetadata({ params: { id } }: Props) {
  return {
    title: id,
  };
}

const ProductsPage = async ({ params: { id } }: Props) => {
  const product = await getData(id);

  return (
    <div className="product-single">
      <h1>{product.title}</h1>
      <Image
        src={product.image}
        alt="apart"
        width={0}
        height={0}
        sizes="100vw"
      />
      <p>{product.description}</p>
      <span>Price: {product.price}</span>
      <Link href={"/products/"}>Назад</Link>
    </div>
  );
};

export default ProductsPage;
