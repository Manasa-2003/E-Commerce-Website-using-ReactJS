import "./FAQ.css"
import React from 'react';
import {useState, useEffect} from "react";
import Navigationbar from "./Navigationbar";
import Footer from './Footer'

function FAQ() {
    
    const bg = require('./assets/images/faq.png')

    useEffect(() => {
        document.body.style.backgroundImage = `url('${bg}')`;
        document.body.style.backgroundSize = `cover`;
        document.body.style.backgroundRepeat = `no-repeat`;
        document.body.style.backgroundPosition = `center center`;
        document.body.style.backgroundAttachment = `fixed`;
    })
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
            <div className="wrapper">
            <div className="accordian">
                {data.map((item, i) => (
                    <div className="item">
                        <div className="title" onClick={() => toggle(i)}> 
                        <h4> {item.question}</h4> 
                        <span> {selected === i ? '-' : '+'} </span>
                        </div>
                        <div
                        className= {
                            selected === i ? 'content show' : 'content'
                        }
                        > {item.answer} </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
        </>
    )
}

const data = [
    {
        question: "What is the status of my order?",
        answer: "Once you have placed your order, we will send you a confirmation email to track the status of your order. Once your order is shipped we will send you another email to confirm you the expected delivery date as well as the link to track your order (when the delivery method allows it).Additionally, you can track the status of your order from your \"order history\" section on your account page on the website.",
    },
    {
        question :"Can I change my order?",
        answer: "We can only change orders that have not been processed for shipping yet. Once your order is under the status \"preparing for shipping\", \"shipping\" or \"delivered\", then we cannot accept any edits to your order. To make changes to your order, please reach out to support through the helpdesk.",
    },
    {
        question : "Where do you ship?",
        answer: "We currently ship in the United-States, Canada, Australia, France, the UK and Germany. For shipping outside of these countries, please reach out to our support through our helpdesk."
    },
    {
        question : "What payment methods do you accept? ",
        answer : "You can purchase on our website using a debit or credit card.We additionnaly offer support for Paypal, Amazon Pay, Apple Pay, and Google Pay.You can chose these payment methods at checkout."
    },
    {
        question : "Which currency will I be charged in?",
        answer : "We currently only support the following currencies for charging our customers in their local currencies: INR, USD, CAD and EUR."
    }
]

export default FAQ