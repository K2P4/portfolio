import { FaCircleCheck, FaCircleExclamation, FaCircleXmark, FaCircleInfo } from 'react-icons/fa6';
import { cn } from '../lib/utils';

export default function Alert({ variant = 'success', message, className }) {
  const variants = {
    success: {
      container: 'bg-green-50 border-green-200 text-green-900 ring-1 ring-green-600/10',
      icon: <FaCircleCheck className="h-5 w-5 text-green-600" />,
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-900 ring-1 ring-red-600/10',
      icon: <FaCircleXmark className="h-5 w-5 text-red-600" />,
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200 text-yellow-900 ring-1 ring-yellow-600/10',
      icon: <FaCircleExclamation className="h-5 w-5 text-yellow-600" />,
    },
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-900 ring-1 ring-blue-600/10',
      icon: <FaCircleInfo className="h-5 w-5 text-blue-600" />,
    },
  };

  const selected = variants[variant] || variants.info;

  return (
    <div className={cn('flex items-center gap-3 rounded-xl border p-4 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300', selected.container, className)} role="alert">
      <div className="flex-shrink-0">{selected.icon}</div>
      <div className="flex-1">
        <div className="text-sm font-medium">{message}</div>
      </div>
    </div>
  );
}
