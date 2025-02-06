import React from "react";

const Skills = () => {
    return (
        <section id="skills" className="bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">My Skills</h2>
                <p className="text-gray-600 mb-8">
                    I specialize in front-end and full-stack web development using modern technologies. My expertise includes
                    <strong> HTML, CSS, JavaScript, Tailwind CSS, DaisyUI, and the MERN stack</strong>, allowing me to build
                    user-friendly and responsive web applications.
                </p>

                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {/* Front-End Skills */}
                    <div className="mb-8 text-left card bg-base-100 shadow-xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Front-End Development</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><strong>HTML5:</strong> Semantic HTML for better accessibility and SEO.</li>
                            <li><strong>CSS3 & Tailwind CSS:</strong> Styled layouts using Tailwind CSS and DaisyUI.</li>
                            <li><strong>JavaScript (ES6+):</strong> Writing clean and efficient JavaScript code.</li>
                            <li><strong>React.js:</strong> Developing reusable components and smooth UI interactions.</li>
                        </ul>
                    </div>

                    {/* Back-End Skills */}
                    <div className="mb-8 text-left card bg-base-100 shadow-xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Back-End Development</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><strong>Node.js & Express.js:</strong> Server-side applications with fast API responses.</li>
                            <li><strong>MongoDB (Native Driver):</strong> Using MongoDB without Mongoose for optimized performance.</li>
                        </ul>
                    </div>

                    {/* API & State Management */}
                    <div className="mb-8 text-left card bg-base-100 shadow-xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">API Integration & State Management</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><strong>REST APIs:</strong> Fetching and sending data to create dynamic applications.</li>
                            <li><strong>TanStack Query:</strong> Using TanStack Query for efficient API data handling.</li>
                            <li><strong>React Router:</strong> Implementing nested layout structures for better navigation.</li>
                        </ul>
                    </div>

                    {/* Development Tools */}
                    <div className="mb-8 text-left card bg-base-100 shadow-xl p-6">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Development Tools & Workflow</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><strong>Git & GitHub:</strong> Version control and project collaboration.</li>
                            <li><strong>VS Code:</strong> Efficient development using Visual Studio Code.</li>
                            <li><strong>NPM & Node Package Manager:</strong> Managing dependencies effectively.</li>
                        </ul>
                    </div>
                </div>

            

                <p className="text-gray-600">
                    I am always eager to <strong>learn new technologies</strong> and improve my skills to build professional and scalable web applications. 🚀
                </p>
            </div>
        </section>
    );
};

export default Skills;
