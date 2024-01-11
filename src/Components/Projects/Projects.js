const projects = [
    {
        id: 1,
        name: 'Socialize',
        githubLink: 'https://github.com/Dominick-Simone/Socialize',
        herokuLink: "https://socialize.herokuapp.com/",
        imageSrc: './Socialize.png',
        imageAlt: "Socialize a social media app I coded.",
        description: 'Socialize is a social media app that utilizes ReactJS, GraphQL, NodeJS, ExpressJS, and MySQL with Sequelize. It allows users to login or create an account with JWT authentication. Then you can create posts, like other users posts, comment on posts, and follow other users through the discover page to see their posts in your home page feed. You must create an account, or login to see full functionality.',
    },
    {
        id: 2,
        name: 'Note Taker App',
        githubLink: 'https://github.com/Dominick-Simone/Note-Taker',
        herokuLink: "https://thawing-coast-14961.herokuapp.com/",
        imageSrc: './Note-Taker.png',
        imageAlt: "Note Taking App",
        description: 'This application allows users to create notes that will be saved to a json file instead of a database. It also allows user to delete previous notes and will update the json file with the new list of notes after each note is deleted.',
    },
    {
        id: 3,
        name: 'NFL Betting App',
        githubLink: 'https://github.com/Dominick-Simone/Weather-App',
        herokuLink: "https://nfl-bets.herokuapp.com/",
        imageSrc: './NFL-Bets.png',
        imageAlt: "Mock NFL Betting App",
        description: 'This application uses an NFL API to get information about the NFL game schedule to allow users to choose to bet on whether a team will win or lose in the specified game. The user has to make an account, and then they can choose a favorite team and start betting. This application was created in NodeJS, it uses MySQL as the database, and ExpressJS for the server.',
    },
    {
        id: 4,
        name: 'Merp',
        githubLink: '',
        herokuLink: "https://www.merp.page/",
        imageSrc: './Merp.png',
        imageAlt: "Merp Yelp for Cannabis",
        description: "Merp is a like a Yelp for impact-focused minority cannabis brands. It showcases lots of different sellers. I transferred the backend from REST API's to GraphQL API's. I also made bug fixes, and optimized SEO.",
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
                        <div className="flex justify-center">

                            <h1 className="text-lg font-bold tracking-tight text-gray-800">Some apps deployed links may take a few seconds to load since they are not accessed often.</h1>
                    </div>

                            <div className="mt-6 grid grid-cols-1 px-2 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-16">
                                {projects.map((project) => (
                                    <div key={project.id} className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80">
                                            <a href={project.herokuLink} target="_blank">
                                            <img
                                                src={project.imageSrc}
                                                alt={project.imageAlt}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                            </a>
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

                                                {project.name == "Merp" ? '': (
                                                <h1 className="text-md px-8 text-gray-800">
                                                    <a href={project.githubLink} target="_blank">
                                                        Link to Github Repo
                                                    </a>
                                                </h1>)
                                                }
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