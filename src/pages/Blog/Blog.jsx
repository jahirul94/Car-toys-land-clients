
const Blog = () => {
    return (
        <div className="px-8 pt-10 min-h-screen space-y-8">
            <div>
                <h3 className="text-xl font-bold mb-2">Q_1 : What is an access token and refresh token? How do they work and where  should we store them on the client-side?</h3>
                <p className="text-md font-semibold mb-2 ps-4"> Access Token: It is a short-lived credential used to access protected resources. It represents the authorization granted to a client (user or application) and contains information like the clients identity and permissions. Store access tokens securely, preferably in an HTTP-only cookie or browser localStorage with appropriate security measures.</p>
                <p className="text-md font-semibold ps-4">Refresh Token: It is a long-lived credential used to obtain a new access token when the current one expires. Refresh tokens have a longer lifespan and should be kept confidential. Storing them in an HTTP-only cookie is not recommended due to security risks. Instead, consider using a server-side session mechanism or a secure HTTP-only cookie.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold mt-4 mb-2">Q_2 : Compare SQL and NoSQL databases?</h3>
                <p className="text-md font-semibold mb-2 ps-4">SQL databases have a structured data model based on tables with predefined schemas and use SQL for querying. They are suitable for applications with complex relationships, structured data, and strong data consistency.</p>
                <p className="text-md font-semibold mb-2 ps-4">NoSQL databases have flexible data models (e.g., key-value, document-oriented) and use their own query languages. They excel in handling large-scale data, high-speed data ingestion, and scenarios requiring schema flexibility.</p>
                <p className="text-md font-semibold ps-4">SQL databases primarily scale vertically by adding resources to a single server, while NoSQL databases are designed for horizontal scalability, distributing data across multiple servers.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">Q_3 : What is express js? What is Nest JS ?</h3>
                <p className="text-md font-semibold mb-2 ps-4">Express.js is a minimal and flexible web application framework for Node.js. It provides a lightweight and unopinionated approach to building web applications and APIs. With its simple and intuitive API, developers can easily handle HTTP requests, define routes, manage middleware, and render views. Express.js allows for quick prototyping and can be extended with various plugins and middleware to add functionality as needed.</p>
                <p className="text-md font-semibold ps-4">Nest.js is a progressive Node.js framework built for building efficient and scalable server-side applications. It combines elements of object-oriented programming, functional programming, and functional reactive programming to provide a robust and modular architecture. Nest.js utilizes TypeScript as its primary language and offers built-in support for features like dependency injection, decorators, and powerful modules system. It promotes the use of well-established design patterns and provides an opinionated structure to organize code and facilitate maintainability and testability. Nest.js is commonly used for building APIs, microservices, and real-time applications.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">Q_4 : What is MongoDB aggregate and how does it work ?</h3>
                <p className="text-md font-semibold mb-20 ps-4">MongoDB's aggregate is a powerful method used to perform advanced data aggregation operations on collections of documents. It allows for complex querying and processing of data within MongoDB. The aggregate function works by defining a pipeline of stages, where each stage performs a specific operation on the documents in the collection. Each stage takes the output of the previous stage as input and passes its results to the next stage, creating a chain of transformations. The pipeline stages can include operations like filtering, sorting, grouping, projecting, joining, and applying mathematical or statistical computations. The final result is returned as a result set that can be customized based on the defined stages in the pipeline. The aggregate framework provides a flexible and efficient way to analyze and transform data in MongoDB.</p>
            </div>
        </div>
    );
};

export default Blog;