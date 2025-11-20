import { useState } from "react"
import "./SideView.css"
export default function SideView() {
    const [sideView, setSideView] = useState<boolean>(true)
    function handleSideView(){setSideView(!sideView)}


    return (
        <div  className={sideView ? "side-view hidden" : "side-view"} id="side-view">
            <button onClick={handleSideView} id="toggle-button">&gt;</button>
            <div className="side-view-content">
                <div className="side-section">
                    <div className="section-header">
                        <h3 className="title">Circuits</h3>
                        <button className="drawer-toggle-btn">-</button>
                    </div>
                    <div className="drawer-content">
                        <div className="sample-item">Circuit A</div>
                        <div className="sample-item">Circuit B</div>
                    </div>
                </div>
                <div className="side-section">
                    <div className="section-header">
                        <h3 className="title">All devices</h3>
                        <button className="drawer-toggle-btn">-</button>
                    </div>
                    <div className="drawer-content">
                        <div className="sample-item">Device 1</div>
                    </div>
                </div>
                <div className="side-section">
                    <div className="section-header">
                        <h3 className="title">Calculations</h3>
                        <button className="drawer-toggle-btn">-</button>
                    </div>
                    <div className="drawer-content">
                        <div className="sample-item">Calculation X</div>
                        <div className="sample-item">Calculation Y</div>
                        <div className="sample-item">Calculation Z</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
