import { toast } from "react-toastify";
import type { Id, TypeOptions } from "react-toastify";
import ToastMessage from "@/components/ui/ToastMessage";

export const notifyLoading = (title: string, content: string): Id =>
  toast.loading(<ToastMessage title={title} content={content} />, {
    position: "bottom-right",
    ariaLabel: title.toLowerCase(),
  });


export const updateNotify = (
  id: Id,
  title: string,
  content: string,
  type: TypeOptions
) =>
  toast.update(id, {
    render: <ToastMessage title={title} content={content} />,
    type,
    isLoading: false,
    autoClose: 5000,
  });
