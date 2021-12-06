import React from "react"
import Info from "./Info"
import About from "./About"
import Interest from "./Interest"

export default function App() {
    return (
        <div className="card-container">
            <Info />
            <About />
            <Interest />
        </div>
    )
}