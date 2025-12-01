export default function SectionHeader({ sectHeading}) {
    return(
        <div className="flex w-full items-center justify-center">
            <h3 className="text-thin leading-3 text-xs tracking-[10px] text-gray-500">{sectHeading}</h3>
        </div>
    )
}