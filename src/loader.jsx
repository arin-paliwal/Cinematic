import React, { useState, useEffect } from "react";
import "./loader.css"
const LoaderComponent = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 4000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (!showLoader) {
        return null;
    }

    return (
        <div className="loader-container">
            <div className="loader">
                {/* <span className="loader-text">cinematic</span> */}
                <span className="load"></span>
            </div>
        </div>
    );
};

export default LoaderComponent;
