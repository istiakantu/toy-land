import { useEffect } from "react";


const Blog = () => {
    useEffect(()=>{
        document.title=('Toy-Land | Blog')
    },[])
    return (
        <div className="m-10 text-slate-300">
            <div className='mb-5'>
                <h2 className="text-3xl mb-2">Question: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>

                <p className='ms-4 text-xl mb-5'>Answer: An Access Token is a credential that authorize a user or client to access protected resources on an API server. <br />
                A Refresh Token is a long-lived credential that is used to get a new Access Token when the current Access Token expires. <br />
                We should store them securely in a long-lived storage mechanism such as HTTP-only cookies
                </p>
               


                <h2 className="text-3xl mb-2">Question: Compare SQL and NoSQL databases?</h2>

                <p className='ms-4 text-xl mb-5'>Answer: SQL databases are based on the relational model and store data in tables. Examples: MySQL, PostgreSQL, Oracle Database, SQL Server. <br />
                NoSQL databases are schema-less or have flexible schemas, allowing for dynamic and unstructured data storage. Examples: MongoDB, Cassandra, Redis, Couchbase.
                </p>



                <h2 className="text-3xl mb-2">Question: What is express js? What is Nest JS?</h2>

                <p className='ms-4 text-xl mb-5'>Answer: Express.js is a flexible web application framework for Node.js. It provides a simple and intuitive set of features for building web applications. <br />
                NestJS is a progressive Node.js framework for building scalable and efficient server-side applications.
                 </p>

                

                <h2 className="text-3xl mb-2">Question: What is MongoDB aggregate and how does it work?</h2>

                <p className='ms-4 text-xl mb-5'>Answer: MongoDB aggregate allows to process and transform data using a pipeline of stages, each stage performing a specific operation on the input documents and passing the result to the next stage. There are many aggregation pipeline such as $match, $group, $limit, $sort</p>
            </div>
        </div>
    );
};

export default Blog;