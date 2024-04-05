'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RootPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/movie')
  }

  return ( 
    <div className="h-full w-full flex flex-col md:flex-row items-center justify-center">
      <Image src="/movie.svg" alt="movie" width={500} height={500} />
        <div className="flex flex-col gap-y-2">
          <p className="text-4xl font-extrabold"> Welcome! </p>
          <p className="text-xl font-medium"> Enjoy the top rated movies </p>
        <Button className="mt-4" variant="movie" onClick={handleClick}> Get Started </Button>
      </div>
    </div>
   );
}
 
export default RootPage;