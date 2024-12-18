import { useRouter } from "next/router"

const LearnPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <p >Learn Page</p>
            <p>Get to know more about {id}</p>  
            <button onClick={() => router.push('/')} aria-label="Go to the homepage" >
                HomePage
            </button>
        </div>

    )
}

export default LearnPage