import React from 'react'
import poster1 from './poster1.png'
import Group from './Group.png'
import Group1 from './Group1.png'
import Rectangle from './Rectangle.png'
import Group2 from './Group2.png'
import Vector3 from './Vector3.png'
import Vector4 from './Vector4.png'
import Group3 from './Group3.png'
// import {Link} from "react-router-dom" 

function Stores() {
  return (
    <div className='main'>
       <img src={poster1}></img>
       <p className='postername'>ASHANA SHROFF</p>
       <p className='posterid'>@Odette</p>
       <p className='follow'>+FOLLOW</p>
       <p className='followers'>10K FOLLOWERS</p>
       <img src={Group} className='group'></img>
       <img src={Group1} className='group1'></img>
       <p className='posts'> Posts</p>
       <p className='collections'> Collections</p>
       <div className='main2'>
       <p className='posterid1'>@Odette</p>
       <p className='posted'>Posted 2 days ago</p>
       <p className='follow1'>+follow</p>
       <img src={Rectangle} className='Rectangle'></img>
       <div className='pricesheet'>
        <img src={Group2}></img>
        <img src={Group2}></img>
       </div>
       <img src={Group3}></img>
       <img src={Vector3} className='save'></img>
       <img src={Vector4} className='share'></img>
       <p>2,53,081 Likes</p>
       <p>This season enjoy with osg Store Products</p>
       <input type='text' className='text'></input>
       <button className='button'>Post</button>
       </div>
       

    </div>
  )
}

export default Stores