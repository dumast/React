import React from 'react'
import { Link } from "react-router-dom"

function NavigationMenu(props){
    return (
        <div>
            <div className="font-bold py-3">
                Terence Dumas
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        onClick={props.closeMenu}
                        className="text-blue-500 py-3 border-t border-b block">
                            Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        onClick={props.closeMenu} 
                        className="text-blue-500 py-3 border-b block">
                            About
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/products:id" 
                        onClick={props.closeMenu} 
                        className="text-blue-500 py-3 border-b block">
                            Products
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu