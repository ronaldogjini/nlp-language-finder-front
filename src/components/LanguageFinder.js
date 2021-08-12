import React, { useState, useContext } from 'react'
import { LanguageContext } from '../Helper/LanguageContext'
import axios from "axios"
import LoadingText from '../Helper/LoadingText'

function LanguageFinder() {

    const [language, setLanguage] = useContext(LanguageContext)
    const [text, setText] = useState("")
    const [clicked, setClicked] = useState(false)

    function checkLanguage() {
        setClicked(true)

        const options = { headers: { "content-type": "application/json" } }
        axios.post('https://whatlanguageisthis-backend.herokuapp.com/language',
            text,
            options
        )
            .then(response => {
                if (response.data.text !== null) {
                    setLanguage(response.data.text)
                }
            })
            .catch(function (error) {
                console.log("ERROR:" + error);
            });
    }

    const updateText = (e) => {
        setText(e.target.value);
        setClicked(false)
        setLanguage("default")

        if (text === "") {
            setLanguage("default")
        }
    }

    return (
        <div className="flex flex-col justify-center">

            <textarea
                value={text}
                onChange={updateText}
                rows="10" name="text"
                placeholder="Write your message"
                className="resize-none w-full px-3 py-2 mt-4 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                required
            />

            <button
                className="py-4 my-4 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
                onClick={checkLanguage}
            >
                Check language
            </button>

            {clicked && language === "default" && <LoadingText />}

        </div>
    )
}
export default LanguageFinder
