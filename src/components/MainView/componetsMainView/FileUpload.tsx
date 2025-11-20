
export default function FileUpload() {
    return (
        <div className="file-upload-container">
            <p className="upload-prompt">Please upload AutoCAD export .txt</p>
            <input type="file" id="file-upload" accept=".txt" hidden />
            <label htmlFor="file-upload" className="file-upload-label">Upload File</label>
        </div>
    )
}
