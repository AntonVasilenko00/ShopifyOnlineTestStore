import React, {useState} from 'react';
import Layout from '../components/Layout/Layout'
import Client from 'shopify-buy'
const Products = () => {
  const [products, setProducts] = useState<Client.Product[]>()
  const [product, setProduct] = useState<Client.Product>()
  const [checkout, setCheckout] = useState<any>()
  return (
      <Layout>
        <h1>Products page</h1>
      </Layout>
  );
};

// const client = Client.buildClient({
//   domain: 'antontestshop.myshopify.com',
//   storefrontAccessToken: '8ea631e2d49cc8a278af931c7e066303'
// });
//
// function App() {
//   const [products, setProducts] = useState<Client.Product[]>()
//   const [product, setProduct] = useState<Client.Product>()
//   const [checkout, setCheckout] = useState<any>()
//   const [isCartOpen, setIsCartOpen] = useState(false)
//
//   const createCheckout = async () => {
//     const checkout = await client.checkout.create()
//     setCheckout(checkout)
//   }
//
//   const addItemToCart = async (variantId: string | number, quantity: number) => {
//     const lineItemsToAdd = [{
//       variantId,
//       quantity
//     }]
//     if(!checkout) throw new Error()
//
//     const updCheckout = await client.checkout.addLineItems(checkout.id,lineItemsToAdd)
//     setCheckout(updCheckout)
//   }
//
//   const  fetchAllProducts = async () => {
//     const fetchedProducts =  await client.product.fetchAll()
//     setProducts(fetchedProducts)
//   }
//
//   const fetchProductWithId = async (id: string) => {
//     const product = await client.product.fetch(id)
//     setProduct(product)
//   }
//
//   const closeCart = () => {
//     setIsCartOpen(false)
//   }
//
//   const openCart = () => {
//
//     setIsCartOpen(true)
//   }
//
//   useEffect(()=>{
//     fetchAllProducts()
//     createCheckout()
//   },[])
//
//   if(!products) return <h2>Loading products...</h2>
//
//   return (
//     <div className="App">
//       <h1>App</h1>
//
//       Products:
//         {products.map(product =>
//         <div>
//           <h2 key={product.id}>{product.title}</h2>
//           <img src={product.images[0].src} alt={product.title}/>
//           <p>{product.variants[0].price}</p>
//           <button onClick={()=> addItemToCart(product.variants[0].id, 1)}>Add to Cart</button>
//         </div>)}
//       {
//         checkout  &&  <a href={checkout.webUrl} target='_blank'>Checkout</a>
//       }
//     </div>
//   );
// }
//
// export default App;

export default Products;
