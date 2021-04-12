import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Head extends Component {
    // state = {  }
    render() { 
        return (  
            <div class="relative bg-gray-100 overflow-hidden">
                <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
                    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div class="rounded-lg shadow-md bg-gray-100 ring-1 ring-black ring-opacity-5 overflow-hidden">
                        </div>
                    </div>

                    <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
                        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                                <h1>
                                    <span class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">Launching Soon</span>
                                    <span class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                        <span class="block text-gray-900">Join the Cararra</span>
                                        <a href="https://discord.gg/3hKs3Zxt" class="hover:text-indigo-500 block text-indigo-600">Community!</a>
                                    </span>
                                </h1>
                                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    Cararra is a highly experienced STEM enthusiast, who has founded an extraordinary community through his Youtube channel!
                                </p>
                                <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
                                    <div class="animate-bounce transform hover:scale-105 rounded-md shadow">
                                        <Link class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" to="/sign-in">Sign In</Link>
                                    </div>
                                    <div class="transform hover:scale-105 mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <a href="https://www.youtube.com/channel/UCwKg48gAQVZm6CShOXXgSjA" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                            Youtube
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                                <div class="transform hover:scale-110 relative mx-auto w-full h-full rounded-lg shadow-lg lg:max-w-md">
                                    <button type="button" class="relative block w-full h-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span class="sr-only">Watch our video to learn more</span>
                                        <iframe class="w-full h-full" src="https://www.youtube.com/embed/YN8oUBqhYGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <div class="absolute inset-0 w-full h-80 flex items-center justify-center" aria-hidden="true">
                                            <svg class="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
                                                <a href="https://www.youtube.com/embed/YN8oUBqhYGg"><circle opacity="0.9" cx="42" cy="42" r="42" fill="white" /></a>
                                                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}
 
export default Head;