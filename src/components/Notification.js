import React from 'react'

function Notification() {
    return (
        <div className="notification">
            <div className="notification__content">
                <span>By accessing and using this website, you acknowledge that you have read and
                understand our Cookie Policy, Privacy Policy, and our Terms of Service.</span>
                <button className="button__primary--blue">Got it</button>
            </div>
        </div>
    )
}

export default Notification
