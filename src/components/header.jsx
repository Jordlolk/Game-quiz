import React from "react";
import { useState } from "react";
import '../css/design.css'
import '../css/global.css'
import '../css/layout.css'
export default function Header(){
    function test(){
        console.log("Test");
    }
    return (
        <header className="main_header">
            <h1 onClick={test} className="header_title">Game quiz</h1>
        </header>
    )
}