// HEADER JS
// ---------------------------------------------------------------------------

import React from "react";

function Header() {
    return (
        <div className="text-center bg-success p-4">
            <h1 style={{ fontSize: 55, color: "white" }}>Employee Directory</h1>
            <p style={{ color: "white" }}>Please select the "A-Z" icon to sort by first name or "Z-A" to sort by last name</p>
            
        </div>
    )
}

export default Header;