import { Social } from "./Social";

export function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-zinc-900">
      <Social className="mt-6 flex space-x-3"></Social>
      <p className="my-6 text-sm">TM & © Lucasfilm Ltd. All Rights Reserved</p>
    </div>
  );
}
