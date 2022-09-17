import React from "react";
import CustomIcon, { IconType } from "../../CustomIcons/CustomIcon";

const LoadingAnimation = (props: IconType) => {
    return (
        <>
            <CustomIcon
                {...props}
                svg={({ color, width, height }) => (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="block shape-auto"
                        width={width}
                        height={height}
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid"
                    >
                        <g transform="translate(80,50)">
                            <g transform="rotate(0)">
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="6"
                                    fill={color}
                                    fillOpacity="1"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        begin="-0.9408602150537634s"
                                        values="1.5 1.5;1 1"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                    ></animateTransform>
                                    <animate
                                        attributeName="fill-opacity"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                        values="1;0"
                                        begin="-0.9408602150537634s"
                                    ></animate>
                                </circle>
                            </g>
                        </g>
                        <g transform="translate(71.21320343559643,71.21320343559643)">
                            <g transform="rotate(45)">
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="6"
                                    fill={color}
                                    fillOpacity="0.875"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        begin="-0.8064516129032258s"
                                        values="1.5 1.5;1 1"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                    ></animateTransform>
                                    <animate
                                        attributeName="fill-opacity"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                        values="1;0"
                                        begin="-0.8064516129032258s"
                                    ></animate>
                                </circle>
                            </g>
                        </g>
                        <g transform="translate(50,80)">
                            <g transform="rotate(90)">
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="6"
                                    fill={color}
                                    fillOpacity="0.75"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        begin="-0.6720430107526881s"
                                        values="1.5 1.5;1 1"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                    ></animateTransform>
                                    <animate
                                        attributeName="fill-opacity"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                        values="1;0"
                                        begin="-0.6720430107526881s"
                                    ></animate>
                                </circle>
                            </g>
                        </g>
                        <g transform="translate(28.786796564403577,71.21320343559643)">
                            <g transform="rotate(135)">
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="6"
                                    fill={color}
                                    fillOpacity="0.625"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        begin="-0.5376344086021505s"
                                        values="1.5 1.5;1 1"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                    ></animateTransform>
                                    <animate
                                        attributeName="fill-opacity"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                        values="1;0"
                                        begin="-0.5376344086021505s"
                                    ></animate>
                                </circle>
                            </g>
                        </g>
                        <g transform="translate(20,50.00000000000001)">
                            <g transform="rotate(180)">
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="6"
                                    fill={color}
                                    fillOpacity="0.5"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        begin="-0.4032258064516129s"
                                        values="1.5 1.5;1 1"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                    ></animateTransform>
                                    <animate
                                        attributeName="fill-opacity"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                        values="1;0"
                                        begin="-0.4032258064516129s"
                                    ></animate>
                                </circle>
                            </g>
                        </g>
                        <g transform="translate(28.78679656440357,28.786796564403577)">
                            <g transform="rotate(225)">
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="6"
                                    fill={color}
                                    fillOpacity="0.375"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        begin="-0.26881720430107525s"
                                        values="1.5 1.5;1 1"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                    ></animateTransform>
                                    <animate
                                        attributeName="fill-opacity"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                        values="1;0"
                                        begin="-0.26881720430107525s"
                                    ></animate>
                                </circle>
                            </g>
                        </g>
                        <g transform="translate(49.99999999999999,20)">
                            <g transform="rotate(270)">
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="6"
                                    fill={color}
                                    fillOpacity="0.25"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        begin="-0.13440860215053763s"
                                        values="1.5 1.5;1 1"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                    ></animateTransform>
                                    <animate
                                        attributeName="fill-opacity"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                        values="1;0"
                                        begin="-0.13440860215053763s"
                                    ></animate>
                                </circle>
                            </g>
                        </g>
                        <g transform="translate(71.21320343559643,28.78679656440357)">
                            <g transform="rotate(315)">
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="6"
                                    fill={color}
                                    fillOpacity="0.125"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        begin="0s"
                                        values="1.5 1.5;1 1"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                    ></animateTransform>
                                    <animate
                                        attributeName="fill-opacity"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                        values="1;0"
                                        begin="0s"
                                    ></animate>
                                </circle>
                            </g>
                        </g>
                        <g transform="translate(71.21320343559643,28.78679656440357)">
                            <g transform="rotate(360)">
                                <circle
                                    cx="0"
                                    cy="0"
                                    r="6"
                                    fill={color}
                                    fillOpacity="0.125"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="scale"
                                        begin="0s"
                                        values="1.5 1.5;1 1"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                    ></animateTransform>
                                    <animate
                                        attributeName="fill-opacity"
                                        keyTimes="0;1"
                                        dur="1.075268817204301s"
                                        repeatCount="indefinite"
                                        values="1;0"
                                        begin="0s"
                                    ></animate>
                                </circle>
                            </g>
                        </g>
                    </svg>
                )}
            ></CustomIcon>
        </>
    );
};

export default LoadingAnimation;
