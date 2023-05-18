import useTitle from "../../CustomHooks/useTitle";
const Blogs = () => {
    useTitle("Blogs");
    return (
        <div className="my-20 mx-10">
            {/* Bolg1 */}

            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className=""><span className="font-bold">Access Token:</span> An access token is a secure token used to prevent unauthorized access to data. It serves as a type of secret token that grants permission to access protected resources and ensures data security. Access tokens can indeed have a time limit or expiration time. Once the access token's expiration time is reached, the user needs to obtain a new access token to continue accessing sensitive data or protected resources. This mechanism enhances security by enforcing regular re-authentication or re-authorization to ensure that access is granted only for the intended duration. Renewing or obtaining a new access token typically involves a refresh token or re-authentication process, depending on the authentication system in use.</p>


                    <br />
                    <p className=""><span className="font-bold">Refresh Token:</span> A refresh token is a long-lived credential issued during authentication that allows obtaining new access tokens without re-authentication. It has a longer lifespan, requires secure storage, and enables seamless access to protected resources by refreshing access tokens when they expire.</p>

                </div>
            </div>
            {/* Bolg2 */}
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">2. Compare SQL and NoSQL databases?</h2>
                    <p className=""><span className="font-bold">SQL Database:</span> SQL databases, also known as relational databases, are based on a structured model where data is organized into tables with predefined schemas. They utilize SQL (Structured Query Language) for querying and managing the data. SQL databases enforce strict data integrity rules, ensuring consistency and reliability. They support complex queries, transactions, and ACID (Atomicity, Consistency, Isolation, Durability) properties. SQL databases are suitable for applications that require a structured data model, strong consistency, and well-defined relationships between data entities. They excel in scenarios such as financial systems, e-commerce platforms, and applications with complex querying requirements.</p>


                    <br />
                    <p className=""><span className="font-bold"> NoSQL Databases:</span> NoSQL databases, which stands for "not only SQL," are designed to handle unstructured, semi-structured, and rapidly changing data. They offer flexible schemas, allowing data to be stored in various formats like key-value pairs, documents, columnar, or graph structures. NoSQL databases prioritize scalability, high performance, and horizontal scaling across distributed systems. They are schema-less, meaning the data model can evolve over time without requiring predefined schemas. NoSQL databases excel in scenarios with large-scale data, real-time analytics, high read/write throughput, and applications that need flexible data models, such as social media platforms, IoT systems, and content management systems.</p>
                </div>
            </div>
            {/* Bolg3 */}
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> 3. What is express js? What is Nest JS?</h2>
                    <p className=""><span className="font-bold">Express JS:</span> Express.js is a popular and minimalist web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js is known for its unopinionated approach, allowing developers to have more control over the application's structure and components. It provides a set of features for handling HTTP requests and responses, routing, middleware, and templating. Express.js is widely used and has a large ecosystem of middleware and plugins, making it a versatile choice for building web applications.</p>


                    <br />
                    <p className=""><span className="font-bold"> NestJS:</span> NestJS, on the other hand, is a progressive and opinionated Node.js framework for building scalable and maintainable server-side applications. It is built with TypeScript and utilizes modern JavaScript features. NestJS is inspired by Angular's architecture and offers similar features, such as dependency injection, decorators, modules, and strong typing. It provides a modular and structured approach to application development, promoting the use of reusable and testable components. NestJS is designed for building enterprise-grade applications and offers built-in support for features like authentication, validation, caching, and more.</p>
                </div>
            </div>

            {/* Blog4 */}
            <div className="card w-full mb-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">4. What is MongoDB aggregate and how does it work?</h2>
                    <p>MongoDB's aggregate is a powerful data aggregation feature that operates using a pipeline approach. It consists of stages that sequentially transform and aggregate data. Each stage performs specific operations like filtering, grouping, reshaping, sorting, and more. With aggregate, you can process and analyze data within the database, generating aggregated results and deriving insights efficiently.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Blogs;