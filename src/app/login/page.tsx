import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { LoginForm } from "@/components/LoginForm";
import { SignupForm } from "@/components/SignupForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../utils/authOptions";

const LoginPage = async () => {

  const session = await getServerSession(authOptions);

  if (session && session.user) {
    redirect('/');
  }

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 flex mt-28 justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  )
};

export default LoginPage