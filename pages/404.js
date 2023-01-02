import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1 className="display-4">404</h1>
            <p className="lead">Page not found. Please return to </p>
            <Link href="/">Home</Link>
        </div>
    </Layout>
)

export default custom404;