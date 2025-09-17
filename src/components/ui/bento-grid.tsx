import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none min-h-[22rem] md:min-h-[28rem] overflow-hidden",
        className
      )}
    >
      <div className="flex-1 flex items-center justify-center w-full h-full overflow-hidden">
        <div className="w-full h-full max-h-[18rem] md:max-h-[24rem] flex items-center justify-center">
          {header}
        </div>
      </div>
      <div className="mt-4">
        <div className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 mb-1 text-center truncate">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300 text-center break-words">
          {description}
        </div>
      </div>
    </div>
  );
};
