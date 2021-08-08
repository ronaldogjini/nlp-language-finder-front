import React, { useState } from 'react'
// import LoadingText from './LoadingText'
import axios from "axios"
import LanguageResult from './LanguageResult'

function LanguageFinder() {

    const [language, setLanguage] = useState(null)
    const [text, setText] = useState("")

    function checkLanguage() {
        axios.post('https://whatlanguageisthis-backend.herokuapp.com/language',
            {
                mode: 'no-cors',
                text: text
            })
            .then(response => {
                if (response.data.text !== null)
                    setLanguage(response.data.text)
            });
    }

    const handleKeyPress = (event) => {
        if (event.keyCode === 32) {
            checkLanguage();
        }
    }

    const updateText = (e) => {
        setText(e.target.value);

        if (text === "") {
            setLanguage(null)
        }

    }

    return (
        <div>
            <div className="my-6">

                <div className="block md:hidden">
                    <LanguageResult text={text} language={language}></LanguageResult>
                </div>

                <textarea
                    value={text}
                    onChange={updateText}
                    onKeyDown={handleKeyPress}
                    rows="10" name="text"
                    placeholder="Write your message"
                    className="resize-none w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                />
                <div className="hidden md:block text-center">
                    <LanguageResult text={text} language={language}></LanguageResult>
                </div>
            </div>



        </div>
    )
}

export default LanguageFinder
