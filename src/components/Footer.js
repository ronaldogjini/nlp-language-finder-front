import React from 'react'

function Footer() {

    return (
        <div className="hidden md:block absolute inset-x-0 bottom-0 items-center p-3 bg-black z-50" >
            <p className="text-white text-center">
                © {new Date().getFullYear()} Made with love by <a className="text-red-500" href="https://www.ronaldogjini.com">Ronaldo Gjini</a></p>
            <p className="text-gray-500 text-center text-xs">
                <a rel="nofollow noreferrer noopener" href="https://www.freepik.com/vectors/background">Background vector created by pikisuperstar - www.freepik.com</a>
            </p>
        </div >
    )
}

export default Footer
