import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { CSSTransition } from 'react-transition-group'

function Newsletter({ showNewsletter }) {
    const [isShowNewsletter, setShowNewsletter] = useState(false)
    let cookieNewsletter = Cookies.get('cookieNewsletter');

    const hideNewsletter = () => {
        // hide panel newsletter
        setShowNewsletter(!isShowNewsletter)

        // set cookies (cookieNewsletter) with expired time - 10 minutes
        var expiredTime = new Date();
        expiredTime.setMinutes( expiredTime.getMinutes() + 10 );
        Cookies.set('cookieNewsletter', true, { expires: expiredTime });
    }

    useEffect(() => {
        if (showNewsletter && !cookieNewsletter) {
            setShowNewsletter(showNewsletter)
        }

    }, [cookieNewsletter, showNewsletter])

    return (
        <div>
            <CSSTransition timeout={500} in={isShowNewsletter} classNames="animation__newsletter" unmountOnExit>
                <div className="newsletter">
                    <button className="newsletter__close-button" onClick={hideNewsletter}>×</button>
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
