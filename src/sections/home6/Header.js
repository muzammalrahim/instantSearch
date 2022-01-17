import React from "react";
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
const Header = () => {
    return (
//         <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
//   <div class="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul class="navbar-nav ml-auto">
//       <li class="nav-item active">
//         <a class="nav-link login-btn" href="#">LOGIN</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link signup-btn" href="#">SIGNUP</a>
//       </li>
//     </ul>
//   </div>
// </nav>
    
    // <div className="container">
    //     <div className="row">
    //         <div className="col-lg-12">
    //         <ul class="navbar-nav float-right">
    //             <li class="nav-item active">
    //             <a class="nav-link login-btn" href="#">LOGIN</a>
    //             </li>
    //             <li class="nav-item">
    //             <a class="nav-link signup-btn" href="#">SIGNUP</a>
    //             </li>
    //         </ul>
    //         </div>
    //     </div>
    // </div>
    

 <nav class="navbar navbar-expand-lg navbar-light bg-transpaent">
{/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown"> */}
  <ul class="navbar-nav ml-auto">
    <li class="nav-item active">
      <a class="nav-link login-btn" href="#">LOGIN</a>
    </li>
    <li class="nav-item">
      <a class="nav-link signup-btn" href="#">SIGNUP</a>
    </li>
  </ul>
{/* </div> */}
</nav>
    )
}

export default Header