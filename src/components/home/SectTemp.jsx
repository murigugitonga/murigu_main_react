import React from "react"
export default function Feature({title, image, description, reverse = false}) {
    return (
        <div className="flex flex-col space-y-2.5 w-full items-start lg:w-full">
            <h3 className="text-xl font-medium text-gray-800/80">{title}</h3>
            <div className={`flex flex-col gap-5 lg:flex-row lg:gap-5 items-start  ${ reverse ? "lg:flex-row-reverse lg:items-start": ""}`}>
                <img src={image} alt={title} className="block md:w-full md:max-w-lg rounded-lg shadow-sm shadow-gray-400" loading="eager"/>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </div>
    )
}