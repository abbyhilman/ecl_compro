import Link from 'next/link'
import Image from 'next/image' // Import Image component
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className={cn("flex items-center justify-center bg-primary text-primary-foreground p-1.5 rounded", className)}>
        <Image
          src="/logo.svg" // Path to the SVG file in the public directory
          alt="EMSADA Logo"
          width={35}
          height={35}
          priority // Optional: for faster loading
        />
      </div>
      <div className="font-semibold text-lg tracking-tight">
        <span className="text-primary">EMSADA</span> <span className="text-muted-foreground hidden sm:inline-block">CIPTA LESTARI</span>
      </div>
    </Link>
  )
}