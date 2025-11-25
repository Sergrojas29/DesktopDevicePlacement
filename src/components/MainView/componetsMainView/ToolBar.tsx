import useDeviceStore from "../../../store/deviceStore"


export default function ToolBar() {

    const sendDataForTree = useDeviceStore((state)=> state.sendDataForTree);




    return (
        <div className="action-buttons-container">
            <button className="icon-button">+</button>
            <button className="icon-button">-</button>
            <button className="icon-button">color</button>
            <button className="icon-button">EX</button>
            <button onClick={sendDataForTree} className="icon-button">EX</button>
        </div>
    )
}
