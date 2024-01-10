const projects = [
    {
        id: 1,
        name: 'Socialize',
        githubLink: 'https://github.com/Dominick-Simone/Socialize',
        herokuLink: "https://socialize.herokuapp.com/",
        imageSrc: './Socialize.png',
        imageAlt: "Socialize a social media app I coded.",
        price: '$35',
        description: 'Socialize is a social media app that utilizes ReactJS, GraphQL, NodeJS, ExpressJS, and MySQL with Sequelize. It allows users to login or create an account with JWT authentication. Then you can create posts, like other users posts, comment on posts, and follow other users through the discover page to see their posts in your home page feed. You must create an account, or login to see full functionality.',
    },
    {
        id: 1,
        name: 'Socialize',
        githubLink: '#',
        herokuLink: "",
        imageSrc: './Socialize.png',
        imageAlt: "Socialize a social media app I coded.",
        price: '$35',
        description: 'Socialize is a social media app that utilizes ReactJS, GraphQL, NodeJS, ExpressJS, and MySQL with Sequelize. It allows users to login or create an account with JWT authentication. Then you can create posts, like other users posts, comment on posts, and follow other users through the discover page to see their posts in your home page feed. You must create an account, or login to see full functionality.',
    },
    {
        id: 1,
        name: 'Socialize',
        githubLink: '#',
        herokuLink: "",
        imageSrc: './Socialize.png',
        imageAlt: "Socialize a social media app I coded.",
        price: '$35',
        description: 'Socialize is a social media app that utilizes ReactJS, GraphQL, NodeJS, ExpressJS, and MySQL with Sequelize. It allows users to login or create an account with JWT authentication. Then you can create posts, like other users posts, comment on posts, and follow other users through the discover page to see their posts in your home page feed. You must create an account, or login to see full functionality.',
    },
    {
        id: 1,
        name: 'Socialize',
        githubLink: '#',
        herokuLink: "",
        imageSrc: './Socialize.png',
        imageAlt: "Socialize a social media app I coded.",
        price: '$35',
        description: 'Socialize is a social media app that utilizes ReactJS, GraphQL, NodeJS, ExpressJS, and MySQL with Sequelize. It allows users to login or create an account with JWT authentication. Then you can create posts, like other users posts, comment on posts, and follow other users through the discover page to see their posts in your home page feed. You must create an account, or login to see full functionality.',
    },
    // More products...
]
export default function Projects() {
    return (
        <>
            <div className="min-h-full bg-gray-300">
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-2 lg:px-4">
                    <div className="flex justify-center">

                            <h1 className="text-4xl font-bold tracking-tight text-gray-800">Projects</h1>
                    </div>
                        <div className="mx-auto max-w-2xl  py-8  sm:py-12 lg:max-w-7xl ">

                            <div className="mt-6 grid grid-cols-1 px-2 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-16">
                                {projects.map((project) => (
                                    <div key={project.id} className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80">
                                            <img
                                                src={project.imageSrc}
                                                alt={project.imageAlt}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h1 className="text-xl text-gray-800">
                                                    <a href={project.href}>
                                                        {project.name}
                                                    </a>
                                                </h1>
                                            </div>

                                        </div>
                                        <p className="mt-1 text-md text-gray-600">{project.description}</p>
                                        <div className="mt-4 py-4 flex justify-center">
                                            <div>
                                                <h1 className="text-md px-8 text-gray-800">
                                                    <a href={project.herokuLink} target="_blank">
                                                        Link to Deployed App
                                                    </a>
                                                </h1>

                                            </div>
                                            <div>

                                                <h1 className="text-md px-8 text-gray-800">
                                                    <a href={project.githubLink} target="_blank">
                                                        Link to Github Repo
                                                    </a>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </>
    )
}