import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

function Notification() {
    const [isShowNotif, setShowNotif] = useState(true)

    const notifToggle = () => {
        setShowNotif(!isShowNotif)
    }

    return (
        <div className="sticky-notification">
            <CSSTransition timeout={500} in={isShowNotif} classNames="animation__notification" unmountOnExit>
                <div className="notification">
                    <div className="notification__content" >
                        <span>By accessing and using this website, you acknowledge that you have read and
                        understand our <a href="/">Cookie Policy, Privacy Policy,</a> and our <a href="/">Terms of Service.</a></span>
                        <button className="button__primary--blue" onClick={notifToggle}>Got it</button>
                    </div>
                </div>           
            </CSSTransition>
        </div>
    )
}

export default Notification
