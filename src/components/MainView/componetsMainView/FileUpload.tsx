import useDeviceStore from "../../../store/deviceStore"


export default function FileUpload() {
    const handleFileUpload = useDeviceStore((state) => state.handleFileUpload);
    // function handleFileUpload(event) {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const request = new XMLHttpRequest();
    //         request.open("POST", "./api/");
    //         request.send(file);
    //     }
    // }

    // async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    //     const file = event.target.files?.[0];
    //     if (file) {
    //         try {
    //             const response =  await axios.get('./api/', {
    //                 headers: {
    //                     'Content-Type': 'text/plain'
    //                 }
    //             });
    //             console.log(typeof(response.data));
    //         } catch (error) {
    //             console.error('Error uploading file:', error);
    //         }
    //     }
    // }



    return (
        
        <div className="file-upload-container">
            <p className="upload-prompt">Please upload AutoCAD export .txt</p>
            <input onChange={handleFileUpload} type="file" id="file-upload" accept=".txt" hidden />
            <label htmlFor="file-upload" className="file-upload-label">Upload File</label>
            {/* <img style={{height:"100px"}} src="./notPublic/DSC08380.jpg" alt="" />
            <img style={{height:"100px"}} src="./notPublic/DSC08188.jpg" alt="" />
            <img style={{height:"100px"}} src="./notPublic/DSC08202.jpg" alt="" />
            <img style={{height:"100px"}} src="./notPublic/DSC08299.jpg" alt="" /> */}
        </div>
    )
}
