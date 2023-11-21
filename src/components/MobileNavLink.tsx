import { mobileLinkVars } from '@/components/FrameMotion/mobileLinkVars'
import { motion } from 'framer-motion'
import Link  from 'next/link'

type MobileNavLinkProps = {
  href: string
  text: string
}

export function MobileNavLink({href, text}: MobileNavLinkProps) {
  return (
    <motion.div variants={mobileLinkVars}>
      <Link href={href}>
        {text}
      </Link>
    </motion.div>
  )
}
