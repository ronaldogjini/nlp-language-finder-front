import React, { useContext } from 'react'
import { LanguageContext } from '../Helper/LanguageContext'

function LanguageResult() {
    const [language, setLanguage] = useContext(LanguageContext)
    return (
        <div className="w-full flex flex-col items-center justify-center">

            <img
                className="my-8 h-56 hidden md:block"
                src={`../../flags/${language}.webp`}
                alt="Language Identifier">
            </img>

            {language !== "default" &&
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-lg">The language is</p>
                    <p className="text-4xl font-bold text-purple-500 px-2">{language}</p>
                </div>}
        </div>
    )
}

export default LanguageResult
