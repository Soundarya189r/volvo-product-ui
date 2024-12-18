import { useRouter } from "next/router"

const ShopPage = () =>{
    const router = useRouter();
    const {id} = router.query;

    return(
        <div>
        <p >Shop Page</p>
        <p >You have added {id} to card</p>  
        <button onClick={() => router.push('/')} aria-label="Go to the homepage" >
                HomePage
            </button>
    </div>
    )
}

export default ShopPage