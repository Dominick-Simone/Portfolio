import React from 'react'

const Skills = () => {
    return (
        <section className='bg-gray-300 mx-auto max-w-7xl py-6 sm:px-2 lg:px-4'>
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 text-center mx-auto max-w-7xl py-6 sm:px-2 lg:px-4">Skills</h1>

            <div className='grid grid-cols-3'>
                <div className='mx-2 border-2 border-black rounded-lg bg-white'>
                    <h1 className="text-4xl font-bold tracking-tight text-center text-gray-800 border-b-2 border-black p-2">Frameworks</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">ReactJS</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">NodeJS</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">GraphQL</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">TailwindCSS</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 p-1">Jest</h1>
                </div>
                <div className='mx-2 border-2 border-black rounded-lg bg-white'>
                    <h1 className="text-4xl font-bold tracking-tight text-center text-gray-800 border-b-2 border-black p-2">Languages</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">HTML</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">CSS</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">Javascript</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">MySQL</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 p-1">MongoDB</h1>
                </div>
                <div className='mx-2 border-2 border-black rounded-lg bg-white'>
                    <h1 className="text-4xl font-bold tracking-tight text-center text-gray-800 border-b-2 border-black p-2">Tools</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">Git</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">Github</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">Git bash</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 border-b-2 border-black p-1">VS Code</h1>
                    <h1 className="text-3xl tracking-tight text-center text-gray-800 p-1">AWS</h1>
                </div>

            </div>
        </section>
    )
}

export default Skills