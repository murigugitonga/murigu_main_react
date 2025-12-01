export default function SectionHeader({ sectHeading}) {
    return(
        <div className="flex w-full items-center justify-center">
            <h3 className="font-thin leading-3 text-[19px] tracking-[8px] text-gray-400">-{sectHeading}-</h3>
        </div>
    )
}