import React from 'react'
import './index.css'

export default function Flapbird() {
    return (
        <div className="container-fluid flapbird">
            <div className="container">
                <div className="flap-bird">
                    <div className="col">
                        <a href="/lobbyflapbird">
                        <button className="btn-flap d-flex justify-content-center align-items-center">
                            Home
                        </button>
                        </a>
                        <a href="">
                        <button className="btn-flap d-flex justify-content-center align-items-center">
                            Invite
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
