import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

function Newsletter({ showNewsletter }) {
    const [isShowNewsletter, setShowNewsletter] = useState(false)

    const newsletterToggle = () => {
        setShowNewsletter(!isShowNewsletter)
    }

    useEffect(() => {
        if (showNewsletter) {
            setShowNewsletter(showNewsletter)
        }
    }, [showNewsletter])

    return (
        <div>
            <CSSTransition timeout={500} in={isShowNewsletter} classNames="animation__newsletter" unmountOnExit>
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
            </CSSTransition>
        </div>
    )
}

export default Newsletter
