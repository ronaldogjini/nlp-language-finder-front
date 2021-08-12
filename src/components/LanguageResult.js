import React, { useContext } from 'react'
import { LanguageContext } from '../Helper/LanguageContext'
import LoadingText from './LoadingText'

function LanguageResult({ text, clicked }) {
    const [language, setLanguage] = useContext(LanguageContext)
    return (
        // <div>
        //     {
        //         !clicked
        //             ?
        //             <p>The language will be displayed here!</p>
        //             :
        //             text.length <= 5 && clicked ?
        //                 <p className="font-bold">The text is too short</p> :

        //                 language && clicked
        //                     ?
        //                     <div className="flex items-center justify-center">
        //                         <p className="font-bold">The language is</p>
        //                         <p className="text-4xl font-bold text-purple-500 px-4">{language}</p>
        //                     </div>
        //                     :
        //                     clicked ? <LoadingText /> : ""
        //     }

        // </div>

        <div>
            {language !== "default" &&
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-lg">The language is</p>
                    <p className="text-4xl font-bold text-purple-500 px-2">{language}</p>
                </div>}
        </div>
    )
}

export default LanguageResult
