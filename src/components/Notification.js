import React, { useState } from 'react'

function Notification() {
    const [isShowNotif, setShowNotif] = useState(true)

    const notifToggle = () => {
        setShowNotif(!isShowNotif)
    }

    return (
        <div>
            { isShowNotif && ( 
               <div className="notification">
                <div className="notification__content">
                    <span>By accessing and using this website, you acknowledge that you have read and
                    understand our <a href="/">Cookie Policy, Privacy Policy,</a> and our <a href="/">Terms of Service.</a></span>
                    <button className="button__primary--blue" onClick={notifToggle}>Got it</button>
                </div>
            </div> 
             ) }
            
        </div>
    )
}

export default Notification
