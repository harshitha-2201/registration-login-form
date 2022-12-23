
import React, { Component } from "react";

export default class AllUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:7000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
       
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <div style = {{textAlign : "center",paddingTop : 100,backgroundImage : " linear-gradient(to bottom right , red,yellow)" ,height :800}}>
        <h1 >Name :{this.state.userData.name}</h1>
         <h1>Email :{this.state.userData.email}</h1>
         <h1>PhoneNo :{this.state.userData.phoneNo}</h1>
      </div>
    );
  }
}











