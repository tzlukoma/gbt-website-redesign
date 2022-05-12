import React from 'react'

const MyLevelPage = () => {
    return (
        <div className="flex p-24 m-auto prose xl:prose-xl">
            <main className="text-center">
                <h2>The Five Levels of Financial Being Quiz</h2>
                <p className="">
                    What is your financial level?
                    <br />
                    Struggling, Steady, Solid, Surplus or Service.
                    <br />
                    Find out answering this short quiz.
                </p>
                <a href="https://my.forms.app/form/6251a6efe911ef58a523b9b8">
                    <button
                        className="text-center flex-shrink-0 bg-primary-500 hover:bg-primary-600 border-primary-500 rounded hover:border-primary-600 lg:text-lg border-4 text-white py-1 px-5 lg:px-10': true,
                    'opacity-50 cursor-pointer"
                    >
                        Take the Quiz
                    </button>
                </a>
            </main>


        </div>
    )
}

export default MyLevelPage