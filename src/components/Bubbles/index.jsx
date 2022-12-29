import React from 'react'
import './index.css'

export default function Bubbles() {
  return (
    <div className="container-fluid">
    <div className="container">
        <div className="bubbles">
          
            <div className="col">
                <a href="/lobbybubble">
                <button className="btn-bubbles d-flex justify-content-center align-items-center">
                    Home
                </button>
                </a>
                <a href="">
                <button className="btn-bubbles d-flex justify-content-center align-items-center">
                    Invite
                </button>
                </a>
            </div>
        </div>
    </div>
</div>
  )
}
