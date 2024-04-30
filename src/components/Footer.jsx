
export default function Footer({ toggleModal }) {
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>Dynamic title for the current image</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={toggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}
