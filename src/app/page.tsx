// pages/index.tsx
import { data } from "../../data/products";
import Allqproducts from "@/Componants/Allproducts";

// const Home: React.FC = () => {
//   return (
//     <div>
    
//       {/* <Allproducts products={data} /> */}
//     <Allqproducts products={data} />
//     </div>
//   );
// };

// export default Home;

export default function Home () {
  return(
    <div>
      <Allqproducts products={data}/>
    </div>
  )
}