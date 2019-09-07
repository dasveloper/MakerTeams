import React, { useContext } from "react";
import { AuthContext } from "../Auth";
import app from "../base";
import { Link } from "react-router-dom";

const Nav = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        !!currentUser ? (
            <nav className="nav">
                <button className="btn btn--primary" onClick={() => app.auth().signOut()}>Sign out</button>
            </nav>
        ) : (
                <nav className="nav">
                    <Link to="signup"><button className="nav__register btn btn--link">Sign up</button></Link>
                    <Link to="signin"><button className="nav__signin btn btn--primary">Sign in</button></Link>
                </nav>
            )
    )
}

export default Nav