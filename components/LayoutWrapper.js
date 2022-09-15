import siteMetadata from '@/data/siteMetadata'

import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  const contentSize = 'max-w-4xl'
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
          <div className={`container mx-auto flex justify-between ${contentSize}`}>
            <div>
              <ul className="px-2">
                {headerNavLinks
                  .filter((link) => !link.disabled)
                  .map((link) => (
                    <li key={link} className="inline">
                      <Link
                        key={link.title}
                        href={link.href}
                        className="mr-10 font-medium text-gray-900 dark:text-gray-100 hover:border-b border-gray-700 dark:border-gray-100 border-dashed"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex items-center text-base leading-5">
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </header>
        <main className={`pt-6 mb-auto mx-auto ${contentSize}`}>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
