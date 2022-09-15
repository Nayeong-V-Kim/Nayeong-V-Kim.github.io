import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter, getFileBySlug } from '@/lib/mdx'

const MAX_DISPLAY = 5
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const publications = await getAllFilesFrontMatter('publication')
  const authorDetails = await getFileBySlug('authors', ['default'])
  const serviceDetails = await getFileBySlug('authors', ['service'])

  return { props: { publications, authorDetails, serviceDetails } }
}

export default function Home({ publications, authorDetails, serviceDetails }) {
  const { mdxSource, frontMatter } = authorDetails
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <div className="divide-y divide-black dark:divide-gray-700">
        <div className="pt-6 space-y-2 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Publications
          </h2>
        </div>
        <ul>
          {!publications.length && 'No publications found.'}
          {publications.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, title, tags, authors, links, teaser, comment } = frontMatter
            console.log(comment)
            console.log(comment && comment.startsWith('='))
            return (
              <li key={slug} className="py-8">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <div className="hidden xl:block xl:col-span-1 h-full relative">
                      <Image src={teaser} alt="teaser" layout="fill" className="max-h-15" />
                    </div>
                    <div className="space-y-2 xl:col-span-3 pl-5">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-lg font-bold leading-8 tracking-tight">
                            <Link className="text-gray-900 dark:text-gray-100">{title}</Link>
                          </h2>
                          <div>
                            <ul className="list-with-comma py-1">
                              {authors.map((author, i) => (
                                <li key={author} className="inline">
                                  <Link
                                    className={`${i != 0 && 'pl-1'} ${
                                      author.includes(authorDetails.frontMatter.name) && 'font-bold'
                                    } text-gray-700 dark:text-gray-100 text-sm`}
                                    href={'/'}
                                  >
                                    {author}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {comment && (
                            <p
                              className={`${
                                comment && comment.startsWith('*') && 'text-red-800 font-medium'
                              } text-sm dark:text-gray-600 `}
                            >
                              {comment}
                            </p>
                          )}
                          <div className="flex flex-wrap py-1">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-medium leading-6 flex flex-wrap space-x-2">
                        <ul className="text-sm">
                          <li className="inline">[</li>
                          {links.map((link, i) => {
                            let [name, url] = link.split('@')
                            return (
                              <>
                                <li className="inline">
                                  <Link
                                    key={name}
                                    href={url}
                                    className={`border-b border-dashed border-transparent hover:border-gray-700 hover:dark:border-gray-100 hover:text-primary-500 mx-1`}
                                  >
                                    {name}
                                  </Link>
                                </li>
                                {i != links.length - 1 && <li className="inline font-normal">/</li>}
                              </>
                            )
                          })}
                          <li className="inline">]</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {publications.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/project"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Publications &rarr;
          </Link>
        </div>
      )}
      <div className="divide-y divide-black dark:divide-gray-700">
        <div className="divide-y divide-black pt-6">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Services
          </h2>
        </div>
        <MDXLayoutRenderer
          layout={serviceDetails.frontMatter.layout}
          mdxSource={serviceDetails.mdxSource}
        />
      </div>
    </>
  )
}
