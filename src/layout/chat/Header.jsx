import React from 'react'

const Header = () => {
    
  return (
    <header className="header">
        <div className="header-back">
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="header-user">
          <div className="user-avata">
            <img
              src="https://i.pinimg.com/236x/93/a0/0a/93a00a3684652031a0c398c5d54d3d10.jpg"
              alt=""
            />
            <p className="user-status"></p>
          </div>
          <div className="user-name">
            <p className="user-fullname">Trung Đoàn</p>
          </div>
        </div>
        <div className="header-menu">
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </header>
  )
}

export default Header
