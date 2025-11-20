import { useRef, useState ,useEffect } from "react";

export default function Menu() {
    const [menu, setMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenu(false);
            }
        }

        if (menu) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menu]);


    function handeleMenu() { setMenu(!menu) }

    return (
        <div className="floating-menu-container" ref={menuRef}>
            <button onClick={handeleMenu} id="menu-toggle-btn">☰</button>
            <div id="floating-menu" className={menu ? "floating-menu visible" : "floating-menu"}>
                <ul>
                    <li className="menu-item important-item">Save + Download</li>
                    <li className="menu-item">Save</li>
                    <li className="menu-item">Toggle Dark/Light</li>
                    <li className="menu-item">Help</li>
                    <li className="menu-item">About</li>
                </ul>
            </div>
        </div>
    )
}
