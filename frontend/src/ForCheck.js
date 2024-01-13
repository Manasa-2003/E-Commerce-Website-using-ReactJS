import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import styles from "./ForCheck.module.css";
import Navigationbar from "./Navigationbar";

const { useState } = React;

function StarRating({
  count,
  ratingvalue,
  inactiveColor = "#ddd",
  size = 24,
  activeColor = "#f00",
  onChange,
}) {
  const input = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const [newListItem, setNewListItem] = useState([]);

  var addToList = (e) => {
    e.preventDefault();
    setNewListItem([
      ...newListItem,
      "We recieved feedback from " +
        input.current.value +
        "  " +
        "and his/her email id is " +
        input1.current.value +
        " and mobile number is " +
        input3.current.value +
        ". The suggestion/s provided is/are " +
        "The rating is " +
        ratingvalue +
        input2.current.value +
        ".",
    ]);
  };

  const stars = Array.from({ length: count }, () => "🟊");

  const handleChange = (ratingvalue) => {
    onChange(ratingvalue + 1);
  };

  const Onhandlechange2 = (value) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(value)) {
    } else {
    }
  };

  const Onhandlechange1 = (value) => {
    let re = /^[0-9\b]+$/;
    if (re.test(value)) {
    } else {
    }
  };

  return (
    <>
      <Navigationbar />
      <div className={styles.container}>
        <div className={styles.checkin}>
          <form onSubmit={addToList}>
            <Modal.Body>
              <Form.Group>
                <h1>Give us feedback</h1>
                <Form.Label>Help for our website development!</Form.Label>
                <br></br>
                <br />
                <input
                  type="text"
                  ref={input}
                  placeholder="Name"
                  style={{ width: "300px", height: "50px" }}
                  required
                />
                <br></br>
                <br></br>
                <input
                  type="email"
                  ref={input1}
                  placeholder="Email"
                  style={{ width: "300px", height: "50px" }}
                  required
                />
                <br></br>
                <br></br>
                <input
                  type="text"
                  ref={input3}
                  placeholder="Phone Number"
                  style={{ width: "300px", height: "50px" }}
                  required
                />
                <br></br>
                <br></br>
              </Form.Group>

              <div>
                {stars.map((s, index) => {
                  let style = inactiveColor;
                  if (index < ratingvalue) {
                    style = activeColor;
                  }
                  return (
                    <span
                      className={"star"}
                      key={index}
                      style={{
                        color: style,
                        width: size,
                        height: size,
                        fontSize: size,
                      }}
                      onClick={() => handleChange(index)}
                    >
                      {s}
                    </span>
                  );
                })}
                {ratingvalue}
              </div>
              <input
                type="text"
                ref={input2}
                placeholder="Any suggestions? "
                style={{ width: "300px", height: "100px" }}
                required
              />
              <br></br>
              <br></br>
            </Modal.Body>
            <Button style={{ backgroundColor: "#FFB9B9" }} type="sumbit">
              Add to List
            </Button>
          </form>
          <ul>
            {newListItem.map((item, b) => (
              <li key={b}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.requ}>
          <img
            style={{ marginTop: "70px" }}
            src={require("./assets/images/feedback.jpg")}
          />
        </div>
      </div>
    </>
  );
}

export default function StarRatingDemo() {
  const input = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const [newListItem, setNewListItem] = useState([]);

  var addToList = (e) => {
    e.preventDefault();
    setNewListItem([
      ...newListItem,
      "We recieved a feedback from " +
        input.current.value +
        "  " +
        "and his/her email id is " +
        input1.current.value +
        " and mobile number is " +
        input3.current.value +
        ". The message is " +
        input2.current.value,
    ]);
  };

  const [rating, setRating] = useState();

  const handleChange = (ratingvalue) => {
    setRating(ratingvalue);
  };
  return (
    <>
      <div>
        <StarRating
          count={5}
          size={40}
          ratingvalue={rating}
          activeColor={"red"}
          inactiveColor={"#ddd"}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
