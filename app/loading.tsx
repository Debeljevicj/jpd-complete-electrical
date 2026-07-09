export default function Loading() {
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-navy/20 border-t-gold rounded-full animate-spin motion-reduce:animate-pulse motion-reduce:border-t-navy/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-navy font-bold text-xs">JPD</span>
                </div>
            </div>
        </div>
    );
}
