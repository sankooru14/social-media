import React from 'react'
import "./rightbar.scss"
const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className='container'>
        <div className='item'> 
          <span>Suggestions For you</span>
          <div className='user'>
            <div className='userInfo'>
              <img src='' alt=''/>
              <span>S Manideep</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='userInfo'>
              <img src='' alt=''/>
              <span>S Manideep</span>
            </div>
            <div className='buttons'>
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className='item'>
          <span>Latest Activities</span>
          <div className='user'>
            <div className='userInfo'>
              <img src='' alt=''/>
              <p>
              <span>S Manideep</span>
              Changed their Profile picture
              </p>
              
            </div>
            <span>1 min ago</span>
            
          </div>
          
          <div className='user'>
            <div className='userInfo'>
              <img src='' alt=''/>
              <p>
              <span>S Manideep</span>
              Changed their Profile picture
              </p>
              
            </div>
            <span>1 min ago</span>
            
          </div>
          
          <div className='user'>
            <div className='userInfo'>
              <img src='' alt=''/>
              <p>
              <span>S Manideep</span>
              Changed their Profile picture
              </p>
              
            </div>
            <span>1 min ago</span>
            
          </div>
          
          
        </div>

        <div className='item'>
          <span>Online Friends</span>
          <div className='user'> 
            <div className='userInfo'>
              <img src='' alt=''></img>
              <div className='online'>
                
              </div>
              <span>Manideep</span>
            </div>
          </div>

          <div className='user'> 
            <div className='userInfo'>
              <img src='' alt=''></img>
              <div className='online'>
                
              </div>
              <span>Manideep</span>
            </div>
          </div>

          <div className='user'> 
            <div className='userInfo'>
              <img src='' alt=''></img>
              <div className='online'>
                
              </div>
              <span>Manideep</span>
            </div>
          </div>

          <div className='user'> 
            <div className='userInfo'>
              <img src='' alt=''></img>
              <div className='online'>
                
              </div>
              <span>Manideep</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default RightBar
