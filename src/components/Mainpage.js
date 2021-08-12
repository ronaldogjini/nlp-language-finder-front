import React from 'react'
import LanguageFinder from './LanguageFinder'
import LanguageResult from './LanguageResult'

function Mainpage() {
    return (
        <div className=" max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 py-4">
            <div className=" items-center px-4 md:p-16">
                <div>
                    <div className="grid text-center pt-8 gap-y-4">
                        <h1 className="text-2xl md:text-5xl font-extrabold">Start writing something</h1>
                        <p className="text-md md:text-xl text-gray-400">The program will automically find the closest languages that match with the text.</p>
                    </div>
                    <LanguageFinder />
                </div>
            </div>

            <LanguageResult></LanguageResult>
        </div>
    )
}

export default Mainpage
