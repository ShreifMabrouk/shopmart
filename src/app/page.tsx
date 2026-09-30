
import { Button } from "@/components/ui/button";
import { icons } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
  
  {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-bold max-w-4xl mb-6">
          Welcome to ShopMart
        </h1>
        
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-xl mb-10">
          Discover the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link href="/products">
          <Button className="w-full sm:w-auto bg-black text-white font-medium px-8 py-6 rounded-lg hover:bg-gray-800 transition-colors shadow-sm cursor-pointer">
            Shop Now
          </Button>
          </Link>
          <Link href="/categories">
          <Button className="w-full sm:w-auto bg-white text-black font-medium px-8 py-6 rounded-lg border-2 border-black hover:bg-gray-50 transition-colors cursor-pointer">
            Browse Categories
          </Button>
          </Link>
        </div>
      </main>
  
  </>
}
