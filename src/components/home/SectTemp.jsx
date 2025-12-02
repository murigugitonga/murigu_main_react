export default function Feature({title, image, decription}) {
    return (
        <div className="flex flex-col space-y-2.5 w-full items-start">
            <h3 className="text-xl font-medium text-gray-700">{title}</h3>
            <img src={image} alt={title} className="block md:w-full md:max-w-md" loading="eager"/>
            <p className="text-gray-500 text-sm">{decription}</p>
        </div>
    )
}