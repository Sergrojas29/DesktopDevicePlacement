
import "./MainView.css";
import Menu from "./componetsMainView/Menu";
import ToolBar from "./componetsMainView/ToolBar";
import FileUpload from "./componetsMainView/FileUpload"; 



export default function Mainview() {



    return (
        <div className="main-view">

            
            {/* <img style={{height:"500px"}} src="./notPublic/DSC08380.jpg" alt="" />
            <img style={{height:"500px"}} src="./notPublic/DSC08188.jpg" alt="" />
            <img style={{height:"500px"}} src="./notPublic/DSC08202.jpg" alt="" />
            <img style={{height:"500px"}} src="./notPublic/DSC08299.jpg" alt="" /> */}
            <Menu/>
            <ToolBar/>
            <FileUpload/>


            <p className="copyright-text">Copyright (c) 2025 Sergio Rojas-Aguilar Version 0.1.0</p>
        </div>
    )
}
