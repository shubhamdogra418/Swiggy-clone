import Profile from"../assets/profile-pic.png";


const User=()=>{
    return (
        <div class="card">
        <div class="tools">
          <div class="circle">
            <span class="red box"></span>
          </div>
          <div class="circle">
            <span class="yellow box"></span>
          </div>
          <div class="circle">
            <span class="green box"></span>
          </div>
        </div>
        <div class="card_content">
            <h3>Name: Shubham</h3>
            <h4>Role: Full Stack Developer</h4>
            <img src= {Profile}/>
            
        </div>
      </div>
    )
}
export default User;