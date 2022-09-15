import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return <a className="mr-3 text-sm font-medium uppercase">{text.split(' ').join('-')}</a>
}

export default Tag
