import React from 'react'
import LoadingText from './LoadingText'

function LanguageResult({ text, language }) {
    return (
        <div>
            {

                !text
                    ?
                    <p>The language will be displayed here!</p>
                    :
                    language
                        ?
                        <div>
                            <p className="font-bold">The language is</p>
                            <p className="text-4xl font-bold text-purple-500">{language}</p>
                        </div>
                        :
                        <LoadingText />
            }

        </div>
    )
}

export default LanguageResult
