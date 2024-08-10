import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
import { string } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price:number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'KSH',
  })


  return formatter.format(price)
}

export function constructMetadata({
  title = "CaseFiti",
  description = "Create custom high-quality phone cases in seconds",
  image = '/thumbnail.png',
  icons = '/favicon.ico'
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}) : Metadata {
  return {
    title,
    description,
    openGraph: {
      title, 
      description,
      images: [{url: image}]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@josephk1nyuru",
    },
    icons,
    metadataBase: new URL('https://casefiti.vercel.app')
  }
}