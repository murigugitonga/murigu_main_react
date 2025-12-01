export default function Footer(){
    return(
        <div className="bg=[#faf9f6] border-x border-t border-gray-600 rounded-t-lg p-4 flex">
            <div className="flex flex-col space-y-1 items-center text-gray-600 text-xs">
                <h3>Murigu Gitonga &copy; { new Date().getFullYear()}</h3>
                <p>Powered by React & Tailwind</p>
                <p>All Rights Reserved.</p>
            </div>
            
        </div>
    )
}
