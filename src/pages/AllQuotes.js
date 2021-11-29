import QuoteList from "../components/quotes/QuoteList";
import { useState, useRef } from "react";
import './style.css';



const DUMMY_DATA = [
  { id: "q1", author: "Sam", text: "Learning React is fun!" },
  { id: "q2", author: "Samsam", text: "Learning React is fun!" },
  
];


const AllQuotes = ()=>{
 
    return <QuoteList quotes={DUMMY_DATA} />;
}

export default AllQuotes;