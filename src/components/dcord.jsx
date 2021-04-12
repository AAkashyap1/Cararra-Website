import React, { Component } from 'react';

class Dcord extends Component {
    // state = {  }
    render() { 
        return (  
            <div class="bg-gray-100">
                <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span class="block">Want to interact?</span>
                        <span class="block text-indigo-600">View our social media today.</span>
                    </h2>
                    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div class="transform hover:scale-110 inline-flex rounded-md shadow">
                            <a href="https://discord.gg/3hKs3Zxt" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                Discord
                            </a>
                        </div>
                        <div class="transform hover:scale-110 ml-3 inline-flex rounded-md shadow">
                            <a href="https://www.youtube.com/channel/UCwKg48gAQVZm6CShOXXgSjA" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                                Youtube
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Dcord;

