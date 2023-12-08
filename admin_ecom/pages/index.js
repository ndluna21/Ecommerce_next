import Layout from "@/component/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
      <div className="text-blue-900 flex justify-between ">
        {/* w-screen h-screen flex items-center text-center w-full bg-white p-2 px-4 rounded-lg min-h-screen p-4 pr-0 mb-4 mr-4 flex-col gap-2 rounded-l-lg p-1 flex-grow mt-2 mr-2 mb-2 w-24 h-24 cursor-pointer text-sm text-gray-500 bg-gray-200 hidden bg-blue-200 text-primary rounded-sm bg-highLight bg-bgGray  fill-primary -left-full top-0 fixed w-full h-full md:static md:w-auto transition-all flex bg-gray-300*/}
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 text-black gap-1 rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="" className="w-6 h-6" />
          <span className="px-2">
            {session?.user?.name}
          </span>
        </div>
      </div>
  </Layout>
}
