export default function Feature({title, image, decription}) {
    return (
        <div className="flex flex-col w-full items-center">
            <h3>{title}</h3>
            <img src={image} alt={title}/>
            <p className="text-gray-600">{decription}</p>
        </div>
    )
}