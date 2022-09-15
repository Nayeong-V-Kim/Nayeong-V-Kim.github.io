import Image from '@/components/Image'
import Link from '@/components/Link'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    cv,
    occupation,
    company,
    company_link,
    email,
    scholar,
    linkedin,
    github,
  } = frontMatter

  const linkClassName =
    'mx-2 border-b border-transparent border-dashed hover:border-gray-700 hover:dark:border-gray-100 hover:text-primary-500'
  return (
    <div className="divide-y">
      <div className="items-start space-y-2">
        <div className="flex flex-col items-center space-x-2">
          <Image
            src={avatar}
            alt="avatar"
            width="160px"
            height="160px"
            className="w-40 h-40 rounded-full"
          />
          <h3 className="pt-4 pb-2 text-3xl font-bold leading-8 tracking-tight">{name}</h3>
          <div className="text-gray-500 dark:text-gray-400">{email}</div>
          <Link href={company_link}>{company}</Link>
          <div className="flex pt-4 space-x-3">
            <ul className="list-with-bar text-sm">
              <li className="inline">
                <Link className={linkClassName} href={cv}>
                  CV
                </Link>
              </li>
              <li className="inline">
                <Link className={linkClassName} href={github}>
                  Github
                </Link>
              </li>
              <li className="inline">
                <Link className={linkClassName} href={linkedin}>
                  Linkedin
                </Link>
              </li>
              <li className="inline">
                <Link className={linkClassName} href={scholar}>
                  Scholar
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-8 pb-8 px-2 prose dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
