import { useState, useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: width = 0, innerHeight: height = 0 } =
        typeof window !== "undefined" ? window : {};
    return {
        width,
        height,
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
