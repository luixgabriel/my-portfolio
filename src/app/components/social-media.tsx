import { Linkedin, Mail, Github } from 'lucide-react'
import Link from 'next/link'

export function SocialMedias() {
  return (
    <span>
      <Link
        href="https://www.linkedin.com/in/luis-gabriel-a447081b2/"
        target="_blank"
      >
        <Linkedin />
      </Link>
      <Link href="#">
        <Mail />
      </Link>
      <Link href="#">
        <Github />
      </Link>
    </span>
  )
}
