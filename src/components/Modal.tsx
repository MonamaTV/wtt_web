import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface ModalProps {
  heading: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  description: string;
}

const Modal = ({
  heading,
  children,
  description,
  defaultOpen = false,
}: ModalProps) => {
  return (
    <Sheet modal={true} defaultOpen={defaultOpen}>
      {!defaultOpen && (
        <SheetTrigger className="bg-yellow-500 text-xs px-4 py-2">
          Create new
        </SheetTrigger>
      )}
      <SheetContent className="dark:bg-white dark:text-black">
        <SheetHeader>
          <SheetTitle className="text-slate-900 dark:text-slate-900">
            {heading}
          </SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default Modal;
