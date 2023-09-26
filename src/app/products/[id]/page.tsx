import { data } from "../../../../data/products"
import Image from "next/image"
export default function ProductDetail ({params}:{params: {id: string}}) {
    const filterProduct = data.filter((product:any) => params.id == product.id )
    return(
        <div>
           
            {filterProduct.map((prodcut:any)=>(
                <>
                <h2 key={prodcut.id}>{prodcut.name}</h2>
        
                <Image src={prodcut.image} key={prodcut.id} alt={prodcut.name} width={100} height={100}></Image>
                </>
            ))}
        
        </div>
    )
}