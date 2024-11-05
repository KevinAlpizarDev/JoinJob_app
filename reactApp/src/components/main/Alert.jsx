import React from "react";
import { X } from "lucide-react";

const alertStyles = {
  info: "bg-blue-100 border-blue-500 text-blue-700",
  success: "bg-green-100 border-green-500 text-green-700",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
  error: "bg-red-100 border-red-500 text-red-700",
};

export default function Alert({ type = "info", title, message, onClose }) {
  return (
    <div
      className={`border-l-4 p-4 ${alertStyles[type]} relative`}
      role="alert"
    >
      <div className="flex items-center justify-between">
        <div>
          {title && <p className="font-bold">{title}</p>}
          <p>{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
