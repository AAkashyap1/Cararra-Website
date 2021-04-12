import React, { Component } from 'react';

class Info extends Component {
    // state = {  }
    render() { 
        return ( 
            <div class="py-12 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="lg:text-center">
                        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">How can you grow with Cararra?</h2>
                        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Advance your STEM skills
                        </p>
                        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                           In this community, you will get access to a variety of resources to help you further your STEM career.
                        </p>
                    </div>
                    
                    <div class="mt-10">
                        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                            <div class="relative">
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <a href="#" class="ml-16 text-lg leading-6 font-medium text-gray-900 hover:text-indigo-500">Competitions</a>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Compete with other STEM enthusiasts in subjects such as math, biology, computer science, and others, held through the Cararra community. 
                                </dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                    </div>
                                    <a href="#" class="ml-16 text-lg leading-6 font-medium text-gray-900 hover:text-indigo-500">Olympiad Prep</a>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Prepare for the most prestigious academic olympiads (USAMO, USACO, USABO, and many others!) with other high achieving Olympiad students. 
                                </dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <a href="#" class="ml-16 text-lg leading-6 font-medium text-gray-900 hover:text-indigo-500">Problem of the Day (POTDs)</a>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Complete challenging POTDs in a variety of subjects including math, biology, and physics to be put on our POTD leaderboard!
                                </dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">\
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                    </div>
                                    <a href="#" class="ml-16 text-lg leading-6 font-medium text-gray-900 hover:text-indigo-500">Announcements</a>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Be notified when new POTDs and resources are published, as well as when important competitions are upcoming!
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Info;