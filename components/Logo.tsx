
import { TargetIcon } from "lucide-react"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
        <div className="flex gap-x-2 items-center">
            <TargetIcon className="text-primary"/>
            <h2 className="h4 text-secondary-foreground">Pomofocus</h2>
        </div>
    </Link>
  )
}

export default Logo