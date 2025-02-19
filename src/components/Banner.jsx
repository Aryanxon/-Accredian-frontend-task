import React, { useState } from 'react'
import "../styles/Banner.css"
import "../styles/NavBar.css"
import Banner_Img from '../assets/Banner.png'
import '../styles/HowDo.css'
import HowDoImg from '../assets/HowDo.png'


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Banner() {

  const [showDialog, setshowDialog] = useState(false);
  const [Name, setName] = useState("");
  const [Course, setCourse] = useState("");
  const [Email, setEmail] = useState("");
  const [RefferdByEmail, setRefferdByEmail] = useState("");
  const [RefferdBy, setRefferdBy] = useState("");

  const[Dialogmessage, setDialogmessage] = useState("");
  const[color, setcolor] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("submitted");
      const body = {
        "referrerName":  RefferdBy,
        "course": Course,
        "referrerEmail":  RefferdByEmail,
        "refereeName": Name, // Fixed spelling
        "refereeEmail":  Email, // Fixed spelling
      };
  
      const response = await fetch("https://accredian-backend-task-gxre.onrender.com/api/refer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" , // Added header
        },
        body : JSON.stringify(body)
      });
  
      if (response.ok) { // Better error checking
        setcolor("green");
        setDialogmessage(`We have successfully sent mail to ${body.referrerEmail}`);
        
  
        setTimeout(() => {
          setshowDialog(false);
        }, 2000);
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.log("Error posting data:", error);
      setcolor("red");
      setDialogmessage(`Unable to send mail to ${body.referrerEmail}`);
    }
  };
  
  return (
    <div>


      {/* Referal dialog box  */}

      <Dialog
        open={showDialog}
        onClose={() => setshowDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='Dialog_Contianer'
      >
        <DialogTitle id="alert-dialog-title" className='Dialog_head'>
          
          {"Referal Form"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className='Dialog_group'>

              {Dialogmessage && 
              
              <div style={{color: color}}>{Dialogmessage}</div>
              }


              <div className='Dialog_form_input'>
                <label>Name</label>
                <input type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
              </div>


              <div className='Dialog_form_input'>
                <label>Email</label>
                <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className='Dialog_form_input'>
                <label>Course</label>
                <input type="text" value={Course} onChange={(e) => setCourse(e.target.value)}/>
              </div>

              <div className='Dialog_form_input'>
                <label>Referred By</label>
                <input type="text" value={RefferdBy} onChange={(e) => setRefferdBy(e.target.value)}/>
              </div>

              <div className='Dialog_form_input'>
                <label>Referred By Email</label>
                <input type="text" value={RefferdByEmail} onChange={(e) => setRefferdByEmail(e.target.value)}/>
              </div>

            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={() => setshowDialog(false)} autoFocus>
            No
          </Button>
          <Button onClick={handleSubmit} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>


        <div className='Banner_Container'>
            <div className='Banner_Box'>

                <div className='Banner_Left'>
                    <div className='Banner_Left_Head'>Let's Learn & Earn</div>
                    <div className='Banner_Left_Para' >Get a chance to win 
                    up-to <span style={{color: '#3674B5'}}>Rs. 15,000</span> </div>
                    <div className='NavBar_Left_Button' onClick={() => setshowDialog(true)}>Refer now</div>
                </div>

                <div className='Banner_Right'><img src={Banner_Img} alt="" /></div>
            </div>

        </div>
      

{/* How Do  */}
       <div className='HowDo_Container'>
                  <div className='HowDo_Head'>
                      How Do I <span style={{color: 'rgba(26, 115, 232, 1)'}}> Refer?</span>
                  </div>
      
                  <div className='HowDo_image'>
                      <img src={HowDoImg} alt="" />
                  </div>
      
                  <div className='HowDo_button' onClick={() => setshowDialog(true)}>
                      Refer Now
                  </div>
      
      
              </div>
    </div>
  )
}

export default Banner
