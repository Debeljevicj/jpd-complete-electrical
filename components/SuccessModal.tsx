'use client';

import { useEffect } from 'react';
import { CheckCircle, Phone, X } from 'lucide-react';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    urgency: string;
}

export default function SuccessModal({ isOpen, onClose, urgency }: SuccessModalProps) {
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const getResponseMessage = () => {
        switch (urgency) {
            case 'emergency':
            case 'high':
                return {
                    title: "We've Received Your Urgent Request!",
                    message: "For the fastest response, please call us now:",
                    showPhone: true,
                    timeframe: "We'll also respond to your form submission as quickly as possible during business hours."
                };
            case 'medium':
                return {
                    title: "Thank You for Your Request!",
                    message: "We understand time is important.",
                    showPhone: false,
                    timeframe: "We'll be in contact within 24 hours."
                };
            default: // 'low' or any other value
                return {
                    title: "Thank You for Getting in Touch!",
                    message: "We appreciate you reaching out to us.",
                    showPhone: false,
                    timeframe: "We'll respond to your inquiry within 24-48 hours."
                };
        }
    };

    const content = getResponseMessage();

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                </div>

                {/* Content */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-navy mb-3">
                        {content.title}
                    </h3>

                    <p className="text-neutral-slate mb-4">
                        {content.message}
                    </p>

                    {content.showPhone && (
                        <a
                            href="tel:0435006420"
                            className="inline-flex items-center justify-center gap-3 bg-gold text-navy font-bold py-4 px-8 rounded-lg text-xl mb-4 hover:bg-yellow-400 transition-colors w-full"
                        >
                            <Phone className="w-6 h-6" />
                            0435 006 420
                        </a>
                    )}

                    <div className="bg-neutral-offwhite rounded-lg p-4 mb-4">
                        <p className="text-navy font-medium">
                            {content.timeframe}
                        </p>
                    </div>

                    {/* Secondary call option for non-urgent */}
                    {!content.showPhone && (
                        <a
                            href="tel:0435006420"
                            className="flex items-center justify-center gap-2 text-navy hover:text-gold transition-colors mb-4"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="text-sm">Need a faster response? Call us anytime on <strong>0435 006 420</strong></span>
                        </a>
                    )}

                    <button
                        onClick={onClose}
                        className="btn btn-primary w-full"
                    >
                        Got It
                    </button>
                </div>
            </div>
        </div>
    );
}
