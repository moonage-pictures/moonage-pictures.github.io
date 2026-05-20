interface LoaderProps {
  section?: string;
}

export function Loader({ section }: LoaderProps) {
  return (
    <div className="flex justify-center w-full mt-8">
      <h2 className="font-heading uppercase text-2xl text-white tracking-wider">
        Loading{section ? ` ${section}` : ""}...
      </h2>
    </div>
  );
}
