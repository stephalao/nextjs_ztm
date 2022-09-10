import {useRouter} from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            Coffee Store Page Y'all! My Id is {router.query.id}
            <Link href="/">
                <a>Back Home Ya'll</a>
            </Link>
            <Link href="/coffee-store/dynamic">
                <a>Go to page dynamic</a>
            </Link>
        </div>
    )
}

export default CoffeeStore;