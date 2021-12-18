import Link from 'next/link'

export const Nav = () => {
  return (
    <Link passHref href="/">
      <div className="dark:text-indigo-200 text-center sm:text-left cursor-pointer">🔙 Go Back</div>
    </Link>
  )
}