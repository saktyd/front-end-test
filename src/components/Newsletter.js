import React, { useState } from 'react'

function Newsletter() {
    const [isShowNewsletter, setShowNewsletter] = useState(true)

    const newsletterToggle = () => {
        setShowNewsletter(!isShowNewsletter)
    }

    return (
        <div>
            { isShowNewsletter && ( 
                <div className="newsletter">
                    <button className="newsletter__close-button" onClick={newsletterToggle}>×</button>
                    <h2>Get latest updates in web technologies</h2>
                    <p>I write articles related to web technologies, such as design trends, development
                    tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
                    them all.</p>
                    <div className="newsletter__form">
                        <input type="text" placeholder="Email Address" />
                        <button className="button__primary--orange">Count me in!</button>
                    </div>
                </div>
             ) }
        </div>
    )
}

export default Newsletter
