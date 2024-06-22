import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  children?: React.ReactNode
  href: string
}

export const MobileNavItem = (props: Props) => {
  const { href, children } = props
  const router = useRouter()
  const active = router.pathname === props.href

  let className

  if (active) {
    className = 'font-bold text-indigo-800 underline'
  } else {
    className = 'font-semibold text-black underline'
  }

  return (
    <li className="my-1">
      <Link className={className} href={href}>
        {children}
      </Link>
    </li>
  )
}
