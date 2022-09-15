export default function AuthorLayout({ children }) {
  return (
    <div className="divide-y">
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="pt-2 pb-2 px-2 prose dark:prose-dark max-w-none xl:col-span-3">
          {children}
        </div>
      </div>
    </div>
  )
}
