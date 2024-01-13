import React from "react";
import {useState} from "react";
import "./Help.css"
import {Link} from 'react-router-dom';
import FAQ from "./faq.png";
import ContactUs from "./assets/images/contactusHelp.png";
import Feedback from "./assets/images/feedbackHelp.png";
import Navigationbar from "./Navigationbar";

function Help() {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if(selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    };

  

    return (
      <> 
      <Navigationbar />
      <div className="s-bar">
        <div className="search-container">
          <form>
          <input type = "text" placeholder = "Search.." name = "search"/>
          <button type = "submit">
            <i class = "fa fa-search"> </i>
          </button>
          </form>
        </div>
      </div>
    <div className="wrapper1">
      <div className="accordian1">
        {data.map((item, i) => (
          <div className="item1">
            <div className="title1" onClick={() => toggle(i)}> 
              <h4> {item.question}</h4> 
              <span> {selected === i ? '-' : '+'} </span>
            </div>

            <div
              className= {
                selected === i ? 'content show1' : 'content1'
              }
            > {item.answer} </div>
         </div>
        ))}
            </div>
        </div>

      <div className="pictures">
        <div className="column" style = {{marginRight: "95px"}}>
          <Link to = "/FAQS">
          <img src = {FAQ} height = {200}></img>
          </Link>
          <div className="container">
            <p> FAQs </p>
          </div>
        </div>

        <div className="column" style = {{marginRight: "95px"}}>
          <Link to = "/ContactUs">
          <img src = {ContactUs} height = {200}></img>
          </Link>
          <div className="container">
            <p> ContactUs </p>
          </div>
        </div>

        <div className="column" style = {{marginRight: "95px"}}>
          <Link to = "/forcheck">
          <img src = {Feedback} height = {200}></img>
          </Link>
          <div className="container">
            <p> Feedback </p>
          </div>
        </div>
      </div>
      </>
    )
}

const data = [
    {
        question: "How can I track my package?",
        answer: "Once you have placed your order, we will send you a confirmation email to track the status of your order. Once your order is shipped we will send you another email to confirm you the expected delivery date as well as the link to track your order (when the delivery method allows it). Additionally, you can track the status of your order from your \"order history\" section on your account page on the website.",
    },
    {
        question :"What if I'm not home?",
        answer: "If you're not home, a new delivery will be performed the next day or the delivery partner will reach out to schedule a new delivery date depending on the country and delivery method you choose.You may also have to go to your local post office to collect your package in case it cannot be delivered to you.",
    },
    {
        question : "Will I pay taxes for international shipping?",
        answer: "Deliveries in Europe will have to pay custom taxes. Our delivery partner will handle the clearance and will invoice you in local currency for the duties and taxes linked to your order. For more information, please refer the to website of the delivery partner handling your delivery."
    },
    {
        question : "Can I exchange an item?",
        answer : "We do accept exchanges and they follow the same conditions as returns. In order to ask for an exchange, please mention that you would like your item to be exchanged with another item when preparing your return with our support."
    },
]

export default Help