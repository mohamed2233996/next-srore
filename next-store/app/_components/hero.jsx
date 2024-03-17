import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        All your digital products
                        <strong className="font-extrabold text-primary sm:block"> Is One Click Away</strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                    Start Browsing The Products. This Is Your Main Interface!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-hoverPrim focus:outline-none focus:ring active:bg-hoverPrim sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-hoverPrim focus:outline-none focus:ring active:text-hoverPrim sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;