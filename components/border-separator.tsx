import Image from "next/image"

interface BorderSeparatorProps {
  className?: string
}

export function BorderSeparator({ className = "" }: BorderSeparatorProps) {
    return (
      <div className={`w-full py-8 ${className}`}>
        <Image
          src="/images/borderPic.png"
          alt="Decorative border"
          width={1920} // Make sure this is large enough for big screens
          height={60}
          className="w-full h-auto object-cover opacity-80"
          priority={false}
        />
      </div>
    )
  }
  