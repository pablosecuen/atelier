import { SignIn } from "@clerk/nextjs";
import "./sing-in.css";
export default function Page() {
  return (
    <div className="h-[80vh] w-[80vw] flex justify-center items-center flex-col gap-8">
      <p className="text-lg">Ingreso exclusivo para administradores</p>
      <p className="text-lg">Por favor ingresa tus credenciales de ingreso</p>
      <SignIn />
    </div>
  );
}
