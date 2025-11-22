
import "./MainView.css";
import Menu from "./componetsMainView/Menu";
import ToolBar from "./componetsMainView/ToolBar";
import FileUpload from "./componetsMainView/FileUpload";
import useDeviceStore from "../../store/deviceStore";
import SVGCanvas from "./componetsMainView/SVGCanvas";


export default function Mainview() {
    const devices = useDeviceStore((state) => state.deviceMap)


    return (
        <div className="main-view">


            {devices.size === 0 && (<FileUpload/>)}
            {devices.size !== 0 && (<SVGCanvas/>)}
            <Menu />
            <ToolBar />


            <p className="copyright-text">Copyright (c) 2025 Sergio Rojas-Aguilar Version 0.1.0</p>
        </div>
    )
}
