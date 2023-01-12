import React from 'react'
import { AuthContext } from '../../context/authContext'
import "./leftbar.scss"
const Leftbar = () => {


    const { currentUser } = React.useContext(AuthContext)
    return (
    <div className='leftBar'>
        <div className='container'>
            <div className='menu'>
                <div className='user'>
                    <img src={currentUser.profilePic} alt=''></img>
                    <span>{currentUser.name}</span>
                </div>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/1.png' alt='friends'></img>
                    <span>Friends</span>
                </div>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/2.png' alt='friends'></img>
                    <span>Groups</span>
                </div>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/3.png' alt='friends'></img>
                    <span>Marketplace</span>
                </div>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/4.png' alt='friends'></img>
                    <span>Watch</span>
                </div>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/5.png' alt='friends'></img>
                    <span>Memories</span>
                </div>
            </div>
            <hr/>
            <div className='menu'>
                <span>Your shortuts</span>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/6.png' alt='friends'></img>
                    <span>Events</span>
                </div>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/7.png' alt='friends'></img>
                    <span>Gaming</span>
                </div>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/8.png' alt='friends'></img>
                    <span>Gallery</span>
                </div>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/9.png' alt='friends'></img>
                    <span>Videos</span>
                </div>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/10.png' alt='friends'></img>
                    <span>Messages</span>
                </div>
            </div>
            <hr/>
            <div className='menu'>
                <span>Others</span>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/11.png' alt='friends'></img>
                    <span>Fundraiser</span>
                </div>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/12.png' alt='friends'></img>
                    <span>Tutorials</span>
                </div>
                <div className='item'>
                    <img src='https://raw.githubusercontent.com/safak/youtube2022/react-social-ui/src/assets/13.png' alt='friends'></img>
                    <span>Courses</span>
                </div>

            </div>
            
        </div>
      
    </div>
  )
}

export default Leftbar
