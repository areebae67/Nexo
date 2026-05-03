export const TASKS = [
    { id: 1, title: "Deep clean 3-bedroom apartment", desc: "Full deep clean including kitchen, bathrooms, and all rooms. Bring your own supplies. Looking for thorough and reliable help.", budget: 4500, dist: 1.2, deadline: "May 10", cat: "Cleaning", status: "open", urgent: false, poster: { name: "Ayesha K.", rating: 4.8, reviews: 12, av: "AK" } },
    { id: 2, title: "Fix leaking kitchen faucet", desc: "Kitchen faucet has been dripping for a week. Need a licensed plumber ASAP. Parts may be needed.", budget: 2000, dist: 0.8, deadline: "May 6", cat: "Repair", status: "open", urgent: true, poster: { name: "Omar B.", rating: 4.6, reviews: 7, av: "OB" } },
    { id: 3, title: "Move furniture to new apartment", desc: "Need 3 people to help move heavy furniture across town. Truck is available, just need manpower.", budget: 6000, dist: 3.5, deadline: "May 12", cat: "Moving", status: "open", urgent: false, poster: { name: "Sara N.", rating: 4.9, reviews: 23, av: "SN" } },
    { id: 4, title: "MCAT prep tutoring — 3 sessions", desc: "Looking for an experienced MCAT tutor for Biology and Chemistry sections. Online or in-person.", budget: 9000, dist: 2.1, deadline: "May 15", cat: "Tutoring", status: "open", urgent: false, poster: { name: "Ali H.", rating: 5.0, reviews: 34, av: "AH" } },
    { id: 5, title: "Grocery delivery from Imtiaz", desc: "Pick up grocery list from Imtiaz Super Store and deliver to DHA Phase 5. List will be provided.", budget: 800, dist: 0.5, deadline: "May 5", cat: "Delivery", status: "open", urgent: true, poster: { name: "Fatima Z.", rating: 4.7, reviews: 9, av: "FZ" } },
    { id: 6, title: "Install ceiling fan in bedroom", desc: "Replace old fan with a new one. Wiring already done, just need installation from an electrician.", budget: 1500, dist: 1.9, deadline: "May 8", cat: "Repair", status: "open", urgent: false, poster: { name: "Bilal M.", rating: 4.5, reviews: 5, av: "BM" } },
    { id: 7, title: "Weekly house cleaning — 4 weeks", desc: "Need a reliable cleaner every Saturday morning for 4 weeks. 2BHK apartment, ~3 hours per session.", budget: 12000, dist: 2.8, deadline: "May 30", cat: "Cleaning", status: "open", urgent: false, poster: { name: "Hina R.", rating: 4.8, reviews: 18, av: "HR" } },
    { id: 8, title: "A-level Physics tutor needed", desc: "Preparing for June exams. Need weekly sessions, patient tutor with strong results track record.", budget: 5000, dist: 1.4, deadline: "May 20", cat: "Tutoring", status: "open", urgent: false, poster: { name: "Zain A.", rating: 4.9, reviews: 41, av: "ZA" } },
    { id: 9, title: "Garden trimming & lawn care", desc: "Medium-sized garden needs trimming, weeding, and lawn mowing. Equipment provided.", budget: 2500, dist: 0.9, deadline: "May 9", cat: "Gardening", status: "open", urgent: false, poster: { name: "Kamran S.", rating: 4.7, reviews: 16, av: "KS" } },
    { id: 10, title: "Laptop screen replacement", desc: "Dell XPS screen cracked, need a skilled technician to replace it. Have the replacement panel.", budget: 3500, dist: 1.6, deadline: "May 11", cat: "Tech Help", status: "open", urgent: true, poster: { name: "Nadia F.", rating: 4.6, reviews: 8, av: "NF" } },
];

export const USERS = [
    { id: 1, name: "Farooq Ahmed", rating: 4.9, reviews: 87, skills: ["Plumbing", "Electrical", "General Repair"], completed: 134, bio: "Full-time handyman with 6 years of experience across Karachi. Certified electrician.", av: "FA", since: "Jan 2024", earnings: "PKR 2.1L" },
    { id: 2, name: "Amna Sheikh", rating: 4.8, reviews: 64, skills: ["Cleaning", "Organizing", "Laundry", "Ironing"], completed: 98, bio: "Professional cleaner, trusted by 60+ families. Detailed, thorough, punctual.", av: "AS", since: "Mar 2024", earnings: "PKR 1.4L" },
    { id: 3, name: "Hassan Malik", rating: 4.7, reviews: 31, skills: ["Delivery", "Errands", "Moving", "Packing"], completed: 52, bio: "Fast and reliable for all delivery tasks. Own bike, available 7 days a week.", av: "HM", since: "Jun 2024", earnings: "PKR 0.7L" },
];

export const CATS = [
    { name: "Cleaning", emoji: "🧹", count: 34, color: "#E8FAF3" },
    { name: "Repair", emoji: "🔧", count: 28, color: "#FEF3E2" },
    { name: "Delivery", emoji: "📦", count: 19, color: "#E8F0FE" },
    { name: "Tutoring", emoji: "📚", count: 22, color: "#FCE8F0" },
    { name: "Moving", emoji: "🚚", count: 11, color: "#E8FAF3" },
    { name: "Gardening", emoji: "🌿", count: 8, color: "#F0FDF4" },
    { name: "Tech Help", emoji: "💻", count: 15, color: "#EDE9FE" },
    { name: "Cooking", emoji: "🍳", count: 6, color: "#FFF7ED" },
];

export const REVIEWS = [
    { name: "Ayesha K.", av: "AK", text: "Farooq was incredibly professional. Fixed everything in under an hour. Will definitely hire again!", r: 5, task: "Plumbing repair", date: "Apr 28" },
    { name: "Bilal M.", av: "BM", text: "Great work, quick and clean. Left the area spotless after the job. Highly recommend.", r: 5, task: "Fan installation", date: "Apr 22" },
    { name: "Sara N.", av: "SN", text: "Arrived exactly on time, communicated well throughout. Very happy with the service.", r: 4, task: "Furniture moving", date: "Apr 15" },
];
