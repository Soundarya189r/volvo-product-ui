import { useRouter } from "next/router";

const NotFoundPage = () => {
    const router = useRouter();

    return (
        <div>
            <p>
                404 :&#40;
            </p>
            <p>Sorry, the page you are trying to reach is Not Found</p>
            <button onClick={() => router.push('/')} aria-label="Go to the homepage" >
                HomePage
            </button>
        </div>
    )
}

export default NotFoundPage