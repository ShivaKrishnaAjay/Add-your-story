
const Sidebar = ({selectedTab,setSelectedTab}) => {


    return (<>

        <div className="d-flex flex-column flex-shrink-0 p-4 text-bg-dark sidebar sticky" style={{width: "220px", minHeight: "100vh", position: "fixed", left: 0, top: 0, zIndex: 1000, borderRight: "1px solid #dee2e6", background: "#212529"}}>
            <a href="/" className="d-flex align-items-center mb-4 text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4">Sidebar</span>
            </a>
            <hr className="mb-4 mt-0"/>
            <ul className="nav nav-pills flex-column mb-auto gap-2">
                <li className="nav-item" onClick={()=>{setSelectedTab("Home")}}>
                    <a href="#" className={`nav-link text-white ${selectedTab==="Home" && "active"}`} aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                        Home
                    </a>
                </li>
                <li onClick={()=>{setSelectedTab("Create Post")}}>
                    <a href="#" className={`nav-link text-white ${selectedTab==="Create Post" && "active"}`}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Create Post
                    </a>
                </li>
            </ul>
            <hr className="my-4"/>
            <div className="mt-auto d-flex align-items-center text-white">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>Profile</strong>
            </div>
        </div>



            </>
            )
}

export default Sidebar