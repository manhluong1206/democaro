import React from 'react'
import './index.css'

export default function Goldegg() {
  return (
    <div className="container-fluid goldegg">
    <div className="container">
        <div className="goldegg">
            <div className="col">
                <a href="/lobbygoldegg">
                <button className="btn-goldegg d-flex justify-content-center align-items-center">
                    Home
                </button>
                </a>
                <a href="">
                <button className="btn-goldegg d-flex justify-content-center align-items-center">
                    Invite
                </button>
                </a>
            </div>
        </div>
    </div>
</div>
  )
}
