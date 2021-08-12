import React, { useState, useContext } from 'react'
import LanguageFinder from './LanguageFinder'
import { StaticImage } from 'gatsby-plugin-image'
import { LanguageContext } from '../Helper/LanguageContext'
import LanguageResult from './LanguageResult'

function Mainpage() {
    const [language, setLanguage] = useContext(LanguageContext)
    return (
        <div className=" max-w-screen-2xl mx-auto grid h-screen grid-cols-1 md:grid-cols-2 py-16">

            <div className=" items-center px-4 md:p-16">
                <div>
                    <div className="grid text-center pt-8 gap-y-4">
                        <h1 className="text-2xl md:text-5xl font-extrabold">Start writing something</h1>
                        <p className="text-md md:text-xl text-gray-400">The program will automically find the closest languages that match with the text.</p>
                    </div>
                    <LanguageFinder />
                </div>
            </div>
            <div className=" hidden md:flex w-full flex flex-col items-center justify-center">
                <img
                    className="my-8 h-56"
                    src={`../../flags/${language}.webp`}
                    alt="Language Identifier">
                </img>
                <div className="hidden md:block text-center">
                    <LanguageResult></LanguageResult>
                </div>
            </div>
        </div>
    )
}

export default Mainpage
