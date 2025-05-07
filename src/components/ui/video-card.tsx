import Image from "next/image"
import Link from "next/link"

interface VideoCardProps {
  thumbnail: string
  title: string
  channel: string
  views: string
  timestamp: string
  duration: string
  avatar: string
}

export function VideoCard({ thumbnail, title, channel, views, timestamp, duration, avatar }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-1 right-1 bg-black/80 px-1 text-xs text-white rounded">{duration}</div>
      </div>
      <div className="mt-2 flex gap-2">
        <Link href="#" className="flex-shrink-0">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={channel}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
        </Link>
        <div>
          <h3 className="line-clamp-2 text-sm font-medium">{title}</h3>
          <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
            {channel}
          </Link>
          <div className="text-xs text-muted-foreground">
            {views} • {timestamp}
          </div>
        </div>
      </div>
    </div>
  )
}
