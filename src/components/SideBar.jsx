/* eslint-disable react/prop-types */
export default function SideBar({toggleModal}) {
    return (
        <div className="sidebar">
            <div onClick={toggleModal} className="bgOverlay"></div>
            <div className="sidebarContent">
                <h2>The name of the image</h2>
                <div>
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aliquid. Veniam, illum voluptate. Repellat provident, ab quisquam laborum et tempore tenetur in at, similique cum ex fuga dolor obcaecati quidem.</p>
                </div>
                <button onClick={toggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
