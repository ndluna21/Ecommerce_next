import { mongooseConnect } from "@/Lib/mongoose";
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { Product } from "@/models/Product";

export default function HomePage({featuredProduct, newProducts}) {
  console.log({newProducts})
  return (
    <div>
      <Header />
      <Featured product={featuredProduct}/>
      <NewProducts />
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '6539411ce6471a938458afcc';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit:10})
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    }
  }
}