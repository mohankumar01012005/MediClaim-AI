import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
export default function Home() {
  return (
    <div>
    <h1 className="text-3xl font-bold underline">Hi</h1>
    <Button className="">Click me</Button>
  </div>
  );
}
