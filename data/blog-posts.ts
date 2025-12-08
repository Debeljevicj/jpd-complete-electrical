export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    content: string;
    image: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'electrical-safety-tips-adelaide-homes',
        title: '5 Essential Electrical Safety Tips for Adelaide Homes',
        excerpt: 'Keep your family safe with these crucial electrical safety checks every homeowner should know.',
        date: '2023-10-15',
        author: 'Justin',
        category: 'Safety',
        image: '/images/switchboard_upgrade.jpg', // Using existing image as placeholder
        content: `
            <p>Electrical safety is paramount for every household. As we head into the warmer months in Adelaide, the demand on our electrical systems increases. Here are five essential tips to keep your home safe.</p>
            
            <h3>1. Check Your Safety Switches</h3>
            <p>Safety switches (RCDs) save lives. They cut the power in milliseconds if a fault is detected. You should test them every 3 months by pressing the "Test" button. If it doesn't trip immediately, call us right away.</p>

            <h3>2. Watch Out for Overloaded Power Boards</h3>
            <p>With more devices than ever, it's easy to daisy-chain power boards. This is a major fire hazard. If you need more outlets, it's safer and neater to have new powerpoints installed.</p>

            <h3>3. Inspect Cords and Plugs</h3>
            <p>Regularly check appliance cords for fraying or damage. Never use an appliance with a damaged cord, and don't run cords under rugs where they can overheat.</p>

            <h3>4. Keep Water and Electricity Apart</h3>
            <p>This seems obvious, but in bathrooms and kitchens, it's easy to forget. Ensure your hands are dry before touching switches, and keep appliances away from sinks.</p>

            <h3>5. Know the Age of Your Switchboard</h3>
            <p>Old ceramic fuse boards are no longer up to standard. They don't provide the same level of protection as modern circuit breakers and safety switches. If your switchboard looks like it's from the 70s, it's time for an upgrade.</p>
        `
    },
    {
        slug: 'led-lighting-upgrade-benefits',
        title: 'Why Upgrading to LED Lighting Saves You Money',
        excerpt: 'Discover how switching to LED downlights can reduce your energy bills and improve your home\'s ambiance.',
        date: '2023-11-02',
        author: 'Justin',
        category: 'Efficiency',
        image: '/images/residential_pool_switchboard.jpg', // Using existing image as placeholder
        content: `
            <p>Lighting accounts for a significant portion of your electricity bill. If you're still using old halogen downlights, you're literally burning money. Here's why upgrading to LED is a smart investment.</p>

            <h3>Energy Efficiency</h3>
            <p>LEDs use up to 80% less energy than halogen bulbs. A typical halogen uses 50 watts, while an equivalent LED uses just 7-10 watts. Multiply that by the number of lights in your home, and the savings are huge.</p>

            <h3>Longevity</h3>
            <p>Halogen bulbs often blow out after 1,000-2,000 hours. Quality LEDs can last 25,000 hours or more. That means fewer trips to the hardware store and no more climbing ladders to change bulbs.</p>

            <h3>Safety</h3>
            <p>Halogens run extremely hot (up to 300°C), which can be a fire risk if they're close to insulation or timber. LEDs run much cooler, making them safer for your roof space.</p>

            <h3>Better Light Quality</h3>
            <p>Modern LEDs come in various colour temperatures (Warm White, Cool White, Daylight) and have excellent colour rendering, making your home look its best.</p>
        `
    },
    {
        slug: 'signs-you-need-switchboard-upgrade',
        title: 'Warning Signs Your Switchboard Needs Upgrading',
        excerpt: 'Is your switchboard keeping up with modern power demands? Look out for these red flags.',
        date: '2023-11-20',
        author: 'Justin',
        category: 'Maintenance',
        image: '/images/residential_switchboard_upgrade_1.jpg',
        content: `
            <p>Your switchboard is the heart of your home's electrical system. If it's outdated, it can't handle the load of modern appliances like air conditioners, induction cooktops, and EV chargers.</p>

            <h3>1. Fuses Blowing Frequently</h3>
            <p>If you're constantly replacing ceramic fuses or resetting circuit breakers, your system is overloaded.</p>

            <h3>2. Flickering Lights</h3>
            <p>Lights that flicker when you turn on an appliance indicate a loose connection or an overloaded circuit.</p>

            <h3>3. Burning Smell or Scorch Marks</h3>
            <p>This is a critical emergency. If you smell burning plastic or see brown marks around your switchboard, turn off the main power and call an emergency electrician immediately.</p>

            <h3>4. No Safety Switches</h3>
            <p>If you don't have RCD protection on both power and light circuits, your home is not as safe as it could be. Current regulations require comprehensive protection.</p>
        `
    }
];
