import { Star, Facebook } from 'lucide-react';

interface Review {
    id: number;
    author: string;
    source: 'Google' | 'Facebook';
    rating: number;
    date: string;
    content: string;
    avatarColor: string;
}

export const reviews: Review[] = [
    {
        id: 3,
        author: "Dylan G",
        source: "Facebook",
        rating: 5,
        date: "Recommended",
        content: "Wasn’t sure who to call when my powerpoints in my new townhouse all went. Called JPD and they were so helpful and fixed the issue for me right away, great price too. Definitely will use them again for all future needs!!",
        avatarColor: "bg-blue-800"
    },
    {
        id: 6,
        author: "David",
        source: "Google",
        rating: 5,
        date: "1 month ago",
        content: "Reliable, honest and great work ethic. Justin did a heap of electrical work for me last year... everything was done to a very high standard and at a fair price. Highly recommend.",
        avatarColor: "bg-purple-600"
    },
    {
        id: 7,
        author: "Daniel D",
        source: "Google",
        rating: 5,
        date: "1 month ago",
        content: "Had Justin attend my workplace to find and repair an electrical fault. Not only did he arrive promptly, but he also took the time to clearly explain every step of the process. Exceptional service...",
        avatarColor: "bg-orange-600"
    },
    {
        id: 8,
        author: "Gary D",
        source: "Google",
        rating: 5,
        date: "1 month ago",
        content: "Justin provides a prompt, professional and friendly service at reasonable prices and I don't hesitate to recommend him.",
        avatarColor: "bg-teal-600"
    },
    {
        id: 1,
        author: "Adam R",
        source: "Google",
        rating: 5,
        date: "1 month ago",
        content: "Justin is hands down the best electrician I’ve ever dealt with. He was on time, professional, and explained everything in a way that was easy to understand. The quality of his work is outstanding, and he went above and beyond to make sure everything was safe, tidy, and working perfectly before he left. Friendly, reliable, and genuinely great at what he does , I wouldn’t hesitate to recommend Justin to anyone needing electrical work done. Five stars well deserved!",
        avatarColor: "bg-blue-600"
    },
    {
        id: 2,
        author: "Cam M",
        source: "Google",
        rating: 5,
        date: "1 month ago",
        content: "Recently had Justin from JPD come out for a lighting upgrade and tv/soundbar wall mounting as part of a small renovation at home and I’m really happy with how it turned out. He handled everything no dramas, plus happily looked at some other things around the house that I had a few questions about. Overall was a good experience. On time, easy to talk to, explained what he was doing and kept things tidy. Very professional and clearly knows his stuff, but also relaxed and not pushy. If you need something done in Adelaide and want someone reliable who does quality work without any drama, I’d definitely recommend giving him a call.",
        avatarColor: "bg-green-600"
    },
    {
        id: 5,
        author: "4d E",
        source: "Google",
        rating: 5,
        date: "3 weeks ago",
        content: "I'd like to give a 5-star rating to Justin from JPD Electrical. We had very old electrical cabling throughout our roof, which posed a safety risk to our family. Justin clearly understood our concerns and carried out the necessary repairs... His expertise and advice were invaluable... Thank you, Justin.",
        avatarColor: "bg-indigo-600"
    },
    {
        id: 4,
        author: "Paula B",
        source: "Google",
        rating: 5,
        date: "3 weeks ago",
        content: "Justin recently installed a ceiling fan to our home, very professional, reliable and knowledgeable. He did a great job, we are very happy with the work, would highly recommend him.",
        avatarColor: "bg-pink-600"
    },
    {
        id: 9,
        author: "Jack",
        source: "Google",
        rating: 5,
        date: "1 day ago",
        content: "Highly recommend! Justin was extremely responsive with great communication from the start and followed up to make sure everything was perfect. He truly goes above and beyond to provide a high-quality service. Will definitely be using him for all my future electrical needs!",
        avatarColor: "bg-red-600"
    },
    {
        id: 10,
        author: "Kristie M",
        source: "Google",
        rating: 5,
        date: "6 hours ago",
        content: "I have used JPD Complete Electrical on 2 occasions now and Justin has completed my jobs to a highly professional standard, quickly and with no mess left behind. The work required was explained to me in detail and highly competitive quotes given. Friendly, expert customer service provided. I would highly recommend giving JPD Complete electrical a go!",
        avatarColor: "bg-rose-600"
    },
    {
        id: 11,
        author: "Jan K",
        source: "Google",
        rating: 5,
        date: "Yesterday",
        content: "I highly recommend Justin from JPD Complete Electrical. They handled a full switchboard upgrade and more for my house and did a meticulous job. They were professional, friendly and completely transparent with the quote, and left my home spotless when they were done. It's great to find a local tradie I can trust with my home's safety. Thanks again!",
        avatarColor: "bg-violet-600"
    },
    {
        id: 12,
        author: "Matt W",
        source: "Google",
        rating: 5,
        date: "5 days ago",
        content: "Justin is unreal, goes above and beyond to make sure the customer is happy.",
        avatarColor: "bg-amber-600"
    },
    {
        id: 13,
        author: "Taylor E",
        source: "Google",
        rating: 5,
        date: "7 weeks ago",
        content: "Justin has become our go to Electrician and has done various jobs for us. Big and small. He is professional, knowledgeable, incredibly tidy and always fits us in.",
        avatarColor: "bg-cyan-600"
    },
    {
        id: 14,
        author: "Bailey H",
        source: "Google",
        rating: 5,
        date: "7 weeks ago",
        content: "Justin was very professional and did a great job of completing my electrical needs around the house. Within a day he installed multiple power points, ethernet points, a tv antenna and other odd jobs here and there and I couldn't be happier with the service provided. I would recommend Justin to anyone who needs an electrician!!",
        avatarColor: "bg-sky-600"
    },
    {
        id: 15,
        author: "Kathy S",
        source: "Google",
        rating: 5,
        date: "21 weeks ago",
        content: "Justin was very helpful and professional. He did a great job!",
        avatarColor: "bg-emerald-600"
    },
    {
        id: 16,
        author: "Natalie A",
        source: "Google",
        rating: 5,
        date: "1 hour ago",
        content: "I couldn't be happier with the service from Justin and Chad! From start to finish, they were professional, punctual, and incredibly knowledgeable. Justin installed my TV aerial and wall-mounted my TV perfectly, taking the time to ensure everything was level, secure, and neatly finished with outstanding attention to detail. The quality of the workmanship was fabulous, and he left everything clean and tidy when the job was complete. He also explained everything clearly and made sure I was happy with the final setup before leaving. It's so refreshing to find someone who genuinely takes pride in their work. I would highly recommend him to anyone looking for a reliable, skilled, and friendly electrician. I'll definitely be using his services again in the future.",
        avatarColor: "bg-fuchsia-600"
    },
    {
        id: 17,
        author: "Trav",
        source: "Google",
        rating: 5,
        date: "3 hours ago",
        content: "Was reliable and easy to deal with. Worked efficiently and with attention to detail. Everything was left in a clean and neat standard. Great to work with would recommend to anyone in need of an electrician.",
        avatarColor: "bg-lime-600"
    },
    {
        id: 18,
        author: "Zane J",
        source: "Google",
        rating: 5,
        date: "2 weeks ago",
        content: "I had the opportunity to observe Justin's work firsthand while on site in a professional capacity, and it was immediately clear that he takes a great deal of pride in his work. Throughout the job, his attention to detail, communication, and workmanship consistently stood out. What also impressed me was the way he involved a work experience student throughout the day. He took the time to explain what he was doing, answer questions, and provide genuine guidance, all while maintaining a high standard of work, culture and keeping the job moving efficiently. It reflected both his professionalism and his willingness to invest in the next generation of tradespeople. Everything was completed professionally, efficiently, and to an exceptionally high standard. I would have no hesitation recommending Justin to anyone looking for quality workmanship and a tradesman who genuinely cares about doing the job properly.",
        avatarColor: "bg-yellow-600"
    },
    {
        id: 19,
        author: "Natalie D",
        source: "Google",
        rating: 5,
        date: "2 weeks ago",
        content: "Justin has done multiple jobs at my office space and home. He is a very reliable, tidy and reasonably priced electrician. If you're looking for an electrician in Adelaide, I recommend you give him a go!",
        avatarColor: "bg-slate-600"
    },
    {
        id: 20,
        author: "Parris D",
        source: "Google",
        rating: 5,
        date: "6 days ago",
        content: "Highly recommend Justin! Really happy with the service from start to finish. Communication was excellent, he was quick to respond, and was able to provide a quote from a few photos I sent, which made everything so easy. Justin offered a few different options, made some helpful suggestions, and was great to deal with throughout. I'd happily use him again and recommend him to anyone looking for an electrician.",
        avatarColor: "bg-zinc-600"
    },
    {
        id: 21,
        author: "Tracy P",
        source: "Google",
        rating: 5,
        date: "3 days ago",
        content: "Justin's work is exceptional. He is extremely thorough, ensuring safety and compliance at all times. He communicated the requirements and solutions throughout. I highly recommend JPD Complete Electrical.",
        avatarColor: "bg-red-700"
    },
    {
        id: 22,
        author: "Amy H",
        source: "Google",
        rating: 5,
        date: "2 days ago",
        content: "Great price. Fantastic service from start to finish. Communication is always excellent, Justin completed the work to a very high standard, was very professional, friendly, and took the time to explain everything clearly. It's great to find a reliable electrician who genuinely cares about the quality of their work. Highly recommend and will definitely be using him again for any future electrical work.",
        avatarColor: "bg-orange-700"
    }
];

export default function ClientReviews() {
    return (
        <div className="space-y-8">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md mb-4">
                    <span className="font-bold text-navy text-xl">5.0</span>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-gold text-gold" />
                        ))}
                    </div>
                    <span className="text-neutral-slate ml-2">Average Rating</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-bold text-lg`}>
                                    {review.author.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy">{review.author}</h3>
                                    <div className="text-xs text-neutral-slate flex items-center gap-1">
                                        {review.source === 'Google' ? (
                                            <span className="text-blue-500 font-semibold">Google Review</span>
                                        ) : (
                                            <span className="text-blue-800 font-semibold flex items-center gap-1">
                                                <Facebook className="w-3 h-3" /> Facebook
                                            </span>
                                        )}
                                        <span>• {review.date}</span>
                                    </div>
                                </div>
                            </div>
                            {review.source === 'Google' && (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            )}
                        </div>

                        <div className="flex gap-1 mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                            ))}
                        </div>

                        <p className="text-neutral-slate leading-relaxed text-sm flex-grow">
                            "{review.content}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
