import { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import React from "react";
import { Button } from "@material-ui/core";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer"
const user=localStorage.getItem("user");

export default function Profile() {
return(
  <>
   <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
  <Navigationbar />
  <br></br>
  <br></br>
    <div className={styles.containerempprofile}>
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div className={styles.profileimg}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div className={styles.file}>
                           
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div className={styles.profilehead}>
                                    <h5>
                                        {user}
                                    </h5>
                                    <h6>
                                        Artist
                                    </h6>
                                    <p className={styles.proilerating}>RANKINGS : <span>8/10</span></p>
                                    <ul className={styles.nav}>
                           
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" className={styles.profileeditbtn} name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div className={styles.profilework}>
                           
                            
                        </div>
                    </div>
                    <div class="col-md-8">
                  <div className ={styles.tabcontent}></div>
                        <div className={styles.profiletab} id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                       
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>sreelekha@gmail.com</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>1234567890</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Artist and an engineer</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Adress</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Guntur AndhraPradesh</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        <Footer />
        </>
)
}
