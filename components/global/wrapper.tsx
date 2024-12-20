import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Wrapper = ({ children, className, id }: Props) => {
  return (
    <div
      id={id}
      className={cn(
        "h-full w-full mx-auto max-w-screen-lg px-4 md:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
