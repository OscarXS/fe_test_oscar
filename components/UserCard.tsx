import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import Link from "next/link";
import { UserProp } from "@/types/user.types";


interface Prop {
  user: UserProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function UserCard({ user, index }: Prop) {
  return (
    
    <MotionDiv 
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5
    }} 
    viewport={{ amount: 0 }}
    className="max-w-sm rounded relative w-full">
      {/* <div className="relative w-full h-[37vh]">
          <Image
          src={`https://shikimori.one${user.image.original}`}
          alt={user.name}
          fill
          className="rounded-xl"
          />
      </div> */}
      <Link href={`/user/${user.id}`} className="text-green-500">
        <div className="py-4 flex flex-col gap-3">
          <div className="">
            <h3 className="text-lg font-bold tracking-tight">
                {user.name} 
            </h3>
            <p className="text-sm text-muted-foreground">
                {user.email}
            </p>
            <p className="text-sm text-muted-foreground">
              {user.phone}
            </p>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}

export default UserCard;
