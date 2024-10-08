import { Fragment, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from "../store/slices/recipeSlice";
import { getNotification } from "../store/selectors/categories";

export default function Notification() {
  const dispatch = useDispatch();
  const notification = useSelector(getNotification);

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notification.show, dispatch]);

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={notification.show}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0"></div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <h3 className="text-lg text-center leading-6 font-medium text-gray-900">
                    Notificación
                  </h3>
                  <p className="text-sm font-medium text-gray-900">
                    {notification.error ? (
                      <XCircleIcon
                        className="h-6 w-6 text-red-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <CheckCircleIcon
                        className="h-6 w-6 text-green-400"
                        aria-hidden="true"
                      />
                    )}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {notification.text}
                  </p>
                </div>
                <div className="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => dispatch(clearNotification())}
                  >
                    <span className="sr-only">Cerrar</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
