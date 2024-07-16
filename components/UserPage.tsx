import Image from "next/image";
import { UserProp } from "@/types/user.types";
import { MotionDiv } from "./MotionDiv";
import { QuizAnswer } from "./QuizAnswer";
import UserPhotos from "./UserPhotos";
import Cookies from "js-cookie";

interface Prop {
  user: UserProp;
  // index: number;
  id: string
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function UserPage({ user, id }: Prop) {
  // Get the user's preferred language from the cookie
  const getSuccessKey = () => {
    return Cookies.get("success");
  };

  const success = getSuccessKey();

  console.log("key is: ", getSuccessKey())
  return (
    <main className="flex flex-col h-full xl:max-w-[1440px] w-full mx-auto">
      <div className="flex items-center p-4 md:p-8 border-b">
        <h1 className="text-lg font-semibold md:text-3xl">User</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-4 md:gap-8 md:p-8">
        <MotionDiv 
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
            delay: 1 * 0.25,
            ease: "easeInOut",
            duration: 0.5
        }} 
        viewport={{ amount: 0 }}
        className="rounded relative w-full max-w-[400px]">
          <Image
              src={`https://via.placeholder.com/600/92c952`}
              alt={`${user.name} Album`}
              width={300}
              height={300}
              className="cover rounded-xl min-h-[34dvh] w-full"
              />
        </MotionDiv>
        <MotionDiv 
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
            delay: 2 * 0.25,
            ease: "easeInOut",
            duration: 0.5
        }} 
        viewport={{ amount: 0 }}
        className="rounded relative w-full max-w-[400px]">
            <h2 className="font-bold text-2xl mb-5">{ user.name }</h2>
            {
              success == "true" 
              ? ( 
                <>
                  <p className="text-regular"><span className="font-bold text-green-300">Email:</span> { user.email }</p>
                  <p className="text-regular"><span className="font-bold text-green-300">Phone:</span> { user.phone }</p>
                </>
             )
              : ( 
                <>
                  <p className="text-regular"><span className="font-bold text-green-300">Email:</span> { user.email.substring(0, user.email.length - 8) + '****' }</p>
                  <p className="text-regular"><span className="font-bold text-green-300">Phone:</span> { user.phone.substring(0, user.phone.length - 8) + '****' }</p>
                 </> 
                )
            }
            <p className="text-regular"><span className="font-bold text-green-300">Website:</span> { user.website }</p>
            <p className="text-regular"><span className="font-bold text-green-300">Company Name:</span> { user.company.name }</p>
            <p className="text-regular"><span className="font-bold text-green-300">Catch Phrase:</span> { user.company.catchPhrase }</p>
            <div className="mt-5">
              <QuizAnswer />
            </div>
        </MotionDiv> 
      {/* </div>
      <div className="p-4 md:p-8"> */}
      <div className="rounded relative w-full flex-1">
          <UserPhotos id={id}  />
        </div>
      </div>
    </main>
  );
}

export default UserPage;
