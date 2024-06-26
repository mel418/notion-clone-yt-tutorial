import Image from "next/image";

export const Heroes = () => {
    return(
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px]sm:h-[350px] md:h-[400px] md:w-[400px]">
                    <Image
                        src="/Fast-Internet.svg"
                        fill
                        className="object-contain dark:hidden"
                        alt="Fast Internet"
                    />
                    <Image
                        src="/Fast-Internet.svg"
                        fill
                        className="invert contrast-200 object-contain hidden dark:block"
                        alt="Fast Internet"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                        src="/Chill-Time.svg"
                        fill
                        className="object-contain dark:hidden"
                        alt="Chill Time"
                    />
                    <Image
                        src="/Chill-Time.svg"
                        fill
                        className="invert contrast-200 object-contain hidden dark:block"
                        alt="Chill Time"
                    />
                </div>
            </div>
        </div>
    )
}