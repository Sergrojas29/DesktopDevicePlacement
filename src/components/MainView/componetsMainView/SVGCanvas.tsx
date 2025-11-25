import useDeviceStore from "../../../store/deviceStore"
import SpeakerStrobe from "../../../assets/Devices/SpeakerStrobe";
import Strobe from "../../../assets/Devices/Strobe";


export default function SVGCanvas() {
    const devices = useDeviceStore((state) => state.deviceMap);
    const viewport = useDeviceStore((state) => state.viewport);
    

    return (
        <svg
            className='svgContainer'
            width="100%"
            height="100%"
            viewBox={`${viewport.xMin} ${viewport.yMin} ${viewport.width} ${viewport.height}`}
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
        >

            {/* <circle cx={viewport.xMin + viewport.width / 2} cy={viewport.yMin} r="200" fill="red" />
            <circle cx={viewport.xMin + viewport.width / 2} cy={viewport.yMin + viewport.height} r="200" fill="red" />
            <circle cx={viewport.xMin} cy={viewport.yMin + viewport.height / 2} r="200" fill="red" />
            <circle cx={viewport.xMin + viewport.width} cy={viewport.yMin + viewport.height / 2} r="200" fill="red" /> */}


            {Array.from(devices, ([key, Device]) => {
                const PID = Device.PID
                const X_COORDINATE = Device.X_COORDINATE
                const Y_COORDINATE = Device.Y_COORDINATE
                const NACTAG = Device.NACTAG
                const SPEAKTAG = Device.SPEAKTAG
                if (PID == '49SV-APPLC' || PID == '49SV-APPLW') {
                    return (<SpeakerStrobe key={key} handle={Device.HANDLE} color='green' X={X_COORDINATE} Y={Y_COORDINATE} scale={1.5} />)
                } else if (PID == '4906-9101') {
                    return (<Strobe handle={Device.HANDLE} key={key} color='green' X={X_COORDINATE} Y={Y_COORDINATE} scale={1.5} />)
                } else {
                    return (<circle onClick={() => console.log(Device.X_COORDINATE, Device.Y_COORDINATE)} key={key} cx={Device.X_COORDINATE} cy={Device.Y_COORDINATE} r="10" fill="red" />)
                }
            })}
        </svg>
    )
}
