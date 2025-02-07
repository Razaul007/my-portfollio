import React from 'react';

const Projects = () => {
    return (
        <div>
            {/* Projects */}
            <div className=" text-center p-3 mt-10">
                <h3 className="text-3xl font-bold text-gray-700 mb-4">Projects & Experience</h3>
                <ul className="list-disc list-inside text-gray-600">
                    <li><strong>DreamHouzing:</strong> A real estate website for property listings.</li>
                    <li><strong>EduSkills:</strong> An educational platform for learning new skills.</li>
                    <li><strong>FitZoon:</strong> A fitness-related e-commerce website.</li>


                </ul>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:w-5xl mx-auto mb-5">

                <div className="card-body flex-1 gap-5">
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        {/* Project Title */}
                        <h1 className="text-3xl font-bold text-gray-800 mb-4"> Dream Houzing</h1>

                        {/* Project Screenshot */}
                        <div className="mb-6">
                            <img
                                src="https://i.ibb.co.com/7dq3YrXd/dream-Houzing.jpg"
                                alt="DreamHouzing Project Screenshot"
                                className="rounded-lg shadow-sm"
                            />
                        </div>

                        {/* Project Description */}
                        <p className="text-gray-700 mb-6">
                            DreamHouzing is a web-based platform designed for seamless property buying, selling, and management. It connects property owners, agents, and buyers to create an intuitive real estate experience.
                        </p>

                        {/* Features Section */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">✨ Features</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>
                                    <strong>Property Listings:</strong> Browse detailed property information with images, prices, and locations.
                                </li>
                                <li>
                                    <strong>Wishlist Functionality:</strong> Users can add properties to their wishlist for future reference.
                                </li>
                                <li>
                                    <strong>Role-Based Access:</strong>
                                    <ul className="list-disc list-inside ml-6">
                                        <li><strong>User:</strong> Can browse and buy properties.</li>
                                        <li><strong>Agent:</strong> Can list and manage properties.</li>
                                        <li><strong>Admin:</strong> Manages the platform and users.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Search and Filter:</strong> Search properties by location, price range, or type.
                                </li>
                                <li>
                                    <strong>Authentication:</strong> Secure login and registration system.
                                </li>
                            </ul>
                        </div>

                        {/* Tech Stack Section */}
                        <div className=" mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">🛠️ Tech Stack</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 card lg:card-side bg-base-200 shadow-xl p-10">
                                <div>
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Frontend</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>React.js</li>
                                        <li>Tailwind CSS</li>
                                        <li>DaisyUI</li>
                                        <li>Axios (for API requests)</li>
                                        <li>React Toastify (for notifications)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Backend</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB (native driver for database operations)</li>
                                        <li>JWT (for authentication)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Additional Libraries</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>React Router (for routing)</li>
                                    <li>TanStack Query (for API data fetching)</li>
                                </ul>
                            </div>
                        </div>


                        {/* Usage Section */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">📖 Usage</h2>
                            <ol className="list-decimal list-inside text-gray-700">
                                <li>Visit the website at <a href="https://dream-houzing.web.app/" className="text-blue-500 hover:underline">https://dream-houzing.web.app/</a>.</li>
                                <li>Visit the GitHub at <a href="https://github.com/Razaul007/dream-housing-client" className="text-blue-500 hover:underline">https://github.com/Razaul007/dream-housing-client</a>.</li>
                                <li>Register as a new user or log in.</li>
                                <li>Browse available properties and interact with the platform based on your role (user, agent, or admin).</li>
                                <li>Add properties to your wishlist or manage your listed properties.</li>
                            </ol>
                        </div>
                    </div>

                </div>

            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:w-5xl mx-auto">

                <div className="card-body flex-1 gap-5">
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        {/* Project Title */}
                        <h1 className="text-3xl font-bold text-gray-800 mb-4"> Edu Skills</h1>

                        {/* Project Screenshot */}
                        <div className="mb-6">
                            <img
                                src="https://i.ibb.co.com/4nCPqpMp/eduskills.jpg"
                                alt="EduSkills Project Screenshot"
                                className="rounded-lg shadow-sm w-full"
                            />
                        </div>

                        {/* Project Description */}
                        <p className="text-gray-700 mb-6">
                            EduSkills is an educational platform designed to help learners enhance their skills through various courses, assignments, and resources.
                        </p>

                        {/* Features Section */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">✨ Features</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>
                                    <strong>Course Listings:</strong> Explore a variety of courses with detailed descriptions.
                                </li>
                                <li>
                                    <strong>Assignment Submission:</strong> Students can submit assignments and track their progress.
                                </li>
                                <li>
                                    <strong>Role-Based Access:</strong>
                                    <ul className="list-disc list-inside ml-6">
                                        <li><strong>Student:</strong> Enroll in courses and submit assignments.</li>
                                        <li><strong>Instructor:</strong> Create and manage courses and assignments.</li>
                                        <li><strong>Admin:</strong> Manage users and platform settings.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Search and Filter:</strong> Find courses based on topics, difficulty level, and more.
                                </li>
                                <li>
                                    <strong>Authentication:</strong> Secure login and registration system.
                                </li>
                            </ul>
                        </div>

                        {/* Tech Stack Section */}
                        <div className=" mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">🛠️ Tech Stack</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 card lg:card-side bg-base-200 shadow-xl p-10">
                                <div>
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Frontend</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>React.js</li>
                                        <li>Tailwind CSS</li>
                                        <li>DaisyUI</li>
                                        <li>Axios (for API requests)</li>
                                        <li>React Toastify (for notifications)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Backend</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB (native driver for database operations)</li>
                                        <li>JWT (for authentication)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Additional Libraries</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>React Router (for routing)</li>
                                    <li>TanStack Query (for API data fetching)</li>
                                </ul>
                            </div>
                        </div>


                        {/* Usage Section */}

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">📖 Usage</h2>
                            <ol className="list-decimal list-inside text-gray-700">
                                <li>
                                    Visit the website at{' '}
                                    <a
                                        href="https://eduskills.web.app/"
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://eduskills.web.app/
                                    </a>
                                    .
                                </li>
                                <li>
                                    Visit the GitHub at{' '}
                                    <a
                                        href="https://github.com/Razaul007/eduskill-client"
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://github.com/Razaul007/eduskill-client
                                    </a>
                                    .
                                </li>
                                <li>Register as a new user or log in.</li>
                                <li>Browse available courses and interact with the platform based on your role.</li>
                                <li>Submit assignments and track your learning progress.</li>
                            </ol>
                        </div>
                    </div>

                </div>

            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:w-5xl mx-auto mt-5">

                <div className="card-body flex-1 gap-5">
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        {/* Project Title */}
                        <h1 className="text-3xl font-bold text-gray-800 mb-4"> Fit Zoon</h1>

                        {/* Project Screenshot */}
                        <div className="mb-6">
                            <img
                                src="https://i.ibb.co.com/Y4MCKpwr/fitZoon.jpg"
                                alt="FitZoon Project Screenshot"
                                className="rounded-lg shadow-sm"
                            />
                        </div>

                        {/* Project Description */}
                        <p className="text-gray-700 mb-6">
                            FitZoon is a web-based fitness platform designed to help users track their fitness goals, find workout plans, and maintain a healthy lifestyle. It offers personalized workout suggestions and progress tracking features.
                        </p>

                        {/* Features Section */}

                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">✨ Features</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>
                                    <strong>Workout Plans:</strong> Personalized workout recommendations based on user goals.
                                </li>
                                <li>
                                    <strong>Progress Tracker:</strong> Log daily activities and monitor fitness progress.
                                </li>
                                <li>
                                    <strong>Role-Based Access:</strong>
                                    <ul className="list-disc list-inside ml-6">
                                        <li><strong>User:</strong> Can follow workout plans and track progress.</li>
                                        <li><strong>Trainer:</strong> Can create and manage workout plans.</li>
                                        <li><strong>Admin:</strong> Manages users and content on the platform.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Search and Filter:</strong> Easily find workout routines and health tips.
                                </li>
                                <li>
                                    <strong>Authentication:</strong> Secure login and registration system.
                                </li>
                            </ul>
                        </div>

                        {/* Tech Stack Section */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">🛠️ Tech Stack</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Frontend</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>React.js</li>
                                        <li>Tailwind CSS</li>
                                        <li>DaisyUI</li>
                                        <li>Axios (for API requests)</li>
                                        <li>React Toastify (for notifications)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-gray-800 mb-2">Backend</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB (native driver for database operations)</li>
                                        <li>JWT (for authentication)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Additional Libraries</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>React Router (for routing)</li>
                                    <li>TanStack Query (for API data fetching)</li>
                                </ul>
                            </div>
                        </div>


                        {/* Usage Section */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">📖 Usage</h2>
                            <ol className="list-decimal list-inside text-gray-700">
                                <li>
                                    Visit the website at{' '}
                                    <a
                                        href="https://fitzoon.web.app/"
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://fitzoon.web.app/
                                    </a>
                                    .
                                </li>
                                <li>
                                    Visit the GitHub at{' '}
                                    <a
                                        href="https://github.com/Razaul007/fitZoon-client"
                                        className="text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://github.com/Razaul007/fitZoon-client
                                    </a>
                                    .
                                </li>
                                <li>Register as a new user or log in.</li>
                                <li>Explore workout plans, log your progress, and stay fit!</li>
                            </ol>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Projects;