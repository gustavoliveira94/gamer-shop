import Image from 'next/image'
import { LogoIcon } from './assets/LogoIcon'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full h-[172px] bg-tertiary mt-[48px] flex items-center justify-center relative bottom-0">
      <Link href="/">
        <LogoIcon />
      </Link>
    </footer>
  )
}
