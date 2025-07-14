import { toast as toastLib, ToastOptions, ToastPosition, ToastType } from 'react-hot-toast'

export const useToast = () => {
  const toast = ({
    message,
    option,
    type = 'success',
  }: {
    message: string
    option?: ToastOptions
    type?: ToastType
  }) => {
    const newOptions: ToastOptions = {
      ...option,
      position: option?.position ?? 'top-right',
    }

    const toastMap = {
      success: toastLib.success,
      error: toastLib.error,
      loading: toastLib.loading,
      custom: toastLib.custom,
    } as const

    toastMap[type as keyof typeof toastMap](message, { ...newOptions })
  }

  return { toast }
}
