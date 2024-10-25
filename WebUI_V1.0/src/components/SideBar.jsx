import { Link } from "react-router-dom"
import { SideNavLinks } from "../sidebar_db"

import './SideBar.css'
import { useState } from "react"
import { CiSearch } from "react-icons/ci"

const SideBar = () => {
    const [search, setSearch] = useState("")
    return (
        <>
            <div className="side-bar">
                <div className="search">
                    <CiSearch id="search-icon" />
                    <input 
                    placeholder="Search Object..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="context">
                    {SideNavLinks.filter((item)=>{
                        return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search) 
                    }).map(item => (
                        <li key={item.id}>
                            <Link to={item.url} className="link">{item.name}</Link>  
                        </li>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SideBar
