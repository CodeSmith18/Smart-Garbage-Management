import React from 'react';

function ConfirmationDialog({ onDelete, onCancel }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Blurred Background */}
            <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
            {/* Dialog Box */}
            <div className="relative bg-white rounded-lg shadow-lg md:max-w-md mx-4 p-6 z-50">
                <div className="flex items-center">
                    <div className="flex-shrink-0 mx-auto md:mx-0 bg-red-100 p-4 rounded-full">
                        <svg
                            className="h-8 w-8 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1 4h.01M12 9.5h.01M21 13c0 1.38-.56 2.63-1.46 3.54A5 5 0 0115 18.5h-6a5 5 0 01-3.54-1.46A5 5 0 014 13V7c0-1.38.56-2.63 1.46-3.54A5 5 0 017 2.5h6c1.38 0 2.63.56 3.54 1.46A5 5 0 0121 7v6z"
                            />
                        </svg>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Warning</h3>
                        <div className="mt-2">
                            <p className="text-sm text-gray-600">
                                You will lose all of your data by deleting this. This action cannot be undone.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center md:justify-end space-x-4">
                    <button
                        onClick={onCancel}
                        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onDelete}
                        className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationDialog;
