import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="rounded-lg border bg-background p-4 shadow-lg"
        >
          {toast.title && (
            <h4 className="font-semibold">{toast.title}</h4>
          )}
          {toast.description && (
            <p className="text-sm text-muted-foreground">
              {toast.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
