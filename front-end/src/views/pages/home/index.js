import Layout from "../../../components/layout";
import Post from "../../../components/post";
import Posting from "../../../components/posting";
import { listPosts } from "../../../utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "antd/dist/antd.css";

export const Home = () => {
    return (
        <Layout>
            <div className="home-container__posts col-6 mx-auto">
                <Posting />
                {listPosts.map((post) => (
                    <Post post={post} />
                ))}
            </div>
        </Layout>
    );
};
