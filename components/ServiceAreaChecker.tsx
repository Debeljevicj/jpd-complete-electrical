'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, CheckCircle, XCircle, Loader2, Search } from 'lucide-react';
import Button from './Button';

// Adelaide CBD Coordinates
const ADELAIDE_CBD = { lat: -34.9285, lng: 138.6007 };
const MAX_RADIUS_KM = 70;
const TRAVEL_CHARGE_THRESHOLD_KM = 50;

export default function ServiceAreaChecker() {
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ serviceable: boolean; distance: number; suburb: string } | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    useEffect(() => {
        // Load Google Maps Script if not already loaded
        const loadScript = () => {
            if (window.google && window.google.maps && window.google.maps.places) {
                initAutocomplete();
                return;
            }

            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = initAutocomplete;
            document.head.appendChild(script);
        };

        loadScript();
    }, []);

    const initAutocomplete = () => {
        if (!inputRef.current) return;

        autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
            componentRestrictions: { country: 'au' },
            fields: ['geometry', 'name', 'formatted_address'],
            types: ['geocode'] // Only addresses
        });

        autoCompleteRef.current.addListener('place_changed', handlePlaceSelect);
    };

    const handlePlaceSelect = () => {
        const place = autoCompleteRef.current?.getPlace();
        if (!place || !place.geometry || !place.geometry.location) {
            return;
        }

        checkServiceability(place.geometry.location.lat(), place.geometry.location.lng(), place.name || '');
    };

    const checkServiceability = (lat: number, lng: number, suburbName: string) => {
        setLoading(true);

        // Calculate distance using Haversine formula
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat - ADELAIDE_CBD.lat);
        const dLon = deg2rad(lng - ADELAIDE_CBD.lng);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(ADELAIDE_CBD.lat)) * Math.cos(deg2rad(lat)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in km

        setTimeout(() => { // Simulate a brief calculation for UX
            setResult({
                serviceable: distance <= MAX_RADIUS_KM,
                distance: Math.round(distance),
                suburb: suburbName
            });
            setLoading(false);
        }, 600);
    };

    const deg2rad = (deg: number) => {
        return deg * (Math.PI / 180);
    };

    const resetSearch = () => {
        setAddress('');
        setResult(null);
        if (inputRef.current) {
            inputRef.current.value = '';
            // Reinitialize autocomplete after reset
            if (autoCompleteRef.current) {
                window.google.maps.event.clearInstanceListeners(inputRef.current);
            }
            initAutocomplete();
        }
    };

    const handleManualSearch = () => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: address + ', South Australia, Australia' }, (results: any, status: any) => {
            if (status === 'OK' && results && results[0]) {
                const location = results[0].geometry.location;
                const suburbName = results[0].address_components.find(
                    (component: any) => component.types.includes('locality')
                )?.long_name || address;
                checkServiceability(location.lat(), location.lng(), suburbName);
            }
        });
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && address.trim()) {
            handleManualSearch();
        }
    };

    return (
        <section className="section-padding bg-neutral-offwhite relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                            Do We Service Your Area?
                        </h2>
                        <p className="text-lg text-neutral-slate mb-8">
                            We service all of Adelaide and surrounding areas. Enter your suburb below to check instantly.
                        </p>

                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-md">
                            {!result ? (
                                <>
                                    <label htmlFor="service-area-input" className="block text-sm font-bold text-navy mb-2">
                                        Enter your suburb or postcode
                                    </label>
                                    <div className="relative flex gap-2">
                                        <div className="relative flex-1">
                                            <input
                                                ref={inputRef}
                                                id="service-area-input"
                                                type="text"
                                                placeholder="e.g. Golden Grove, 5125"
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition"
                                                onChange={(e) => setAddress(e.target.value)}
                                                onKeyPress={handleKeyPress}
                                            />
                                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        </div>
                                        <button
                                            onClick={handleManualSearch}
                                            disabled={!address.trim()}
                                            className="px-4 py-3 bg-gold hover:bg-gold/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-navy rounded-lg transition-colors flex items-center justify-center"
                                            aria-label="Search"
                                        >
                                            <Search className="w-5 h-5" />
                                        </button>
                                    </div>
                                    {loading && (
                                        <div className="mt-4 flex items-center gap-2 text-navy font-medium">
                                            <Loader2 className="w-4 h-4 animate-spin" /> Checking availability...
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-4 animate-fade-in">
                                    {result.serviceable ? (
                                        <>
                                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <CheckCircle className="w-8 h-8 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-navy mb-2">Yes! We Service {result.suburb}</h3>
                                            <p className="text-neutral-slate mb-6">
                                                You are approximately {result.distance}km from the CBD, which is well within our service zone.
                                                {result.distance > TRAVEL_CHARGE_THRESHOLD_KM && (
                                                    <span className="block mt-2 text-sm text-neutral-slate/80">
                                                        For locations over {TRAVEL_CHARGE_THRESHOLD_KM}km, a small travel allowance may apply.
                                                    </span>
                                                )}
                                            </p>
                                            <div className="flex flex-col gap-3">
                                                <Button href="/contact" variant="gold" className="w-full justify-center">
                                                    Book Now
                                                </Button>
                                                <button
                                                    onClick={resetSearch}
                                                    className="text-sm text-gray-500 hover:text-navy underline"
                                                >
                                                    Check another suburb
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <XCircle className="w-8 h-8 text-orange-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-navy mb-2">A Little Further Than Usual</h3>
                                            <p className="text-neutral-slate mb-6">
                                                {result.suburb} is a little further than we usually work, but give us a call and we may be able to arrange something.
                                            </p>
                                            <div className="flex flex-col gap-3">
                                                <a href="tel:0435006420" className="btn btn-primary w-full justify-center">
                                                    Call to Discuss: 0435 006 420
                                                </a>
                                                <button
                                                    onClick={resetSearch}
                                                    className="text-sm text-gray-500 hover:text-navy underline"
                                                >
                                                    Check another suburb
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 hidden lg:block">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418336.63960122806!2d138.2815111742472!3d-34.99988560775201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab735c7c526b33f%3A0x4033654628ec640!2sAdelaide%20SA!5e0!3m2!1sen!2sau!4v1709615000000!5m2!1sen!2sau"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
