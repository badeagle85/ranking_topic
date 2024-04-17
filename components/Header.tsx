import Logo from '@/public/images/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label="ranking topic">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              Ranking Topic
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
