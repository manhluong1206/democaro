import React from 'react'
import './index.css'

export default function Lobbybubble() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="lobbybubble bg">
          <div className="room-bubble">
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <p className='font-weight-bold text-light'>1080</p>
              </div>
              <div className="col d-flex justify-content-start align-items-center">
                <p className='font-weight-bold text-light'>Small house</p>
              </div>
            </div>
          </div>
          <div className="room-bubble">
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <p className='font-weight-bold text-light'>1080</p>
              </div>
              <div className="col d-flex justify-content-start align-items-center">
                <p className='font-weight-bold text-light'>Small house</p>
              </div>
            </div>
          </div>
          <div className="room-bubble">
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center">
                <p className='font-weight-bold text-light'>1080</p>
              </div>
              <div className="col d-flex justify-content-start align-items-center">
                <p className='font-weight-bold text-light'>Small house</p>
              </div>
            </div>
          </div>
          <div className="button bubble">
            <div className="row">
              <div className="col qplay d-flex justify-content-center align-items-center">
                <a href="">
                  <button>QUICK PLAY</button>
                </a>
              </div>
              <div className="col search d-flex justify-content-center align-items-center">
                <a href="">
                  <button>SEARCH ROOM</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
