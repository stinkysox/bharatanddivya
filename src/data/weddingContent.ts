import topCorner from '../assets/topcornerimage.png';
import lotusImage from '../assets/lotus.jpg';
import templeImage from '../assets/temple.jpg';
import godImage from '../assets/god.jpg';
import elephantImage from '../assets/elephant.jpg';
import memory1 from '../assets/memory1.jpg';
import memory2 from '../assets/memory2.jpg';
import memory3 from '../assets/memory3.jpg';
import memory4 from '../assets/memory4.jpg';
import memory5 from '../assets/memory5.jpg';
import memory6 from '../assets/memory6.jpg';

export const WEDDING_CONTENT = {
  couple: {
    groom: {
      name: "Bharat Reddy",
      fullName: "Bharat Reddy",
      parents: "Shri Vikram Reddy & Smt. Meenakshi Reddy",
      education: "MBA, IIM Ahmedabad",
      profession: "Senior Product Manager",
      monogram: "B"
    },
    bride: {
      name: "Divya Sharma",
      fullName: "Divya Sharma",
      parents: "Shri Rajesh Sharma & Smt. Sunita Sharma",
      education: "M.Des, NID Ahmedabad",
      profession: "Creative Director",
      monogram: "D"
    },
    commonMonogram: "BD"
  },
  dates: {
    mainDate: "August 20, 2026",
    countdownTarget: "2026-08-20T10:30:00", 
    rsvpDeadline: "August 01, 2026",
    month: "August",
    day: "20",
    year: "2026"
  },
  location: {
    city: "Hyderabad",
    state: "Telangana",
    venue: "Taj Falaknuma Palace",
    description: "Known as the 'Mirror of the Sky', this historic palace offers a majestic setting overlooking the City of Pearls.",
    mapLink: "https://goo.gl/maps/example",
    buttonLabel: "View on Maps"
  },
  intro: {
    tagline: "You are invited to",
    description: "We are so happy to celebrate our wedding with you. Join us for a weekend of love, laughter, and new beginnings.",
    scrollLabel: "Scroll to explore",
    swipeLabel: "Swipe to view more photos",
    playLabel: "Tap to Play",
    nowPlayingLabel: "Now Playing",
    songTitle: "Kabira",
    stackImages: [
      "https://i.pinimg.com/736x/75/48/ef/7548efc7f37868a665b2855cf290688d.jpg",
      "https://i.pinimg.com/736x/1d/16/1b/1d161bf166f6ecc070404b0c715d6294.jpg",
      "https://i.pinimg.com/736x/44/fd/05/44fd0505b0960bbca7e1bac93eb110ff.jpg",
      "https://i.pinimg.com/1200x/01/6a/ce/016acee3a979c9efe029f5b1c96d90e9.jpg"
    ],
    decorations: {
      topLeft: topCorner,
      bottomPortrait: elephantImage
    },
    sections: {
      lotus: lotusImage,
      temple: templeImage,
      god: godImage
    }
  },
  gallery: {
    title: "Our Gallery",
    tagline: "Memories in Light",
    footerTextOn: "Tap the lights to set the mood",
    footerTextOff: "Turn on the lights for a magical view",
    lightsOnLabel: "Turn Lights On",
    lightsOffLabel: "Turn Lights Off",
    images: [
      { url: memory1, caption: 'Summer Breeze', rotation: -3 },
      { url: memory2, caption: 'Midnight City', rotation: 2 },
      { url: memory3, caption: 'Coffee Dates', rotation: -4 },
      { url: memory4, caption: 'Roadtrip 2023', rotation: 3 },
      { url: memory5, caption: 'Forever Us', rotation: -1 },
    ]
  },
  events: {
    title: "Wedding Events",
    tagline: "The Celebration",
    items: [
      {
        title: "Mehendi",
        date: "Aug 18, 2026 • 4:00 PM",
        venue: "The Rajasthani Gardens, Falaknuma",
        description: "A relaxed evening of music, henna, and getting together.",
        iconType: "sparkles"
      },
      {
        title: "Sangeet",
        date: "Aug 19, 2026 • 7:00 PM",
        venue: "The Durbar Hall",
        description: "A night of dinner and dancing with our family and friends.",
        iconType: "sun"
      },
      {
        title: "The Wedding",
        date: "Aug 20, 2026 • 10:30 AM",
        venue: "Main Palace Mandapam",
        description: "Join us as we exchange our vows and start our new journey.",
        iconType: "heart"
      }
    ]
  },
  destination: {
    tagline: "The Venue",
    accommodation: {
      title: "Accommodations",
      description: "Suites have been reserved for all our guests at the palace."
    },
    travel: {
      title: "Travel",
      description: "Shuttles will be available from Rajiv Gandhi International Airport (HYD)."
    },
    image: memory6, 
    quote: "A beautiful space for a special day."
  },
  rsvp: {
    title: "Will you join us?",
    taglinePrefix: "Please RSVP by",
    nameLabel: "Your Name",
    namePlaceholder: "Enter your name",
    guestsLabel: "Number of Guests",
    attendanceLabel: "Attending?",
    attendanceOptions: {
      yes: "Yes, I'll be there",
      no: "Sadly, I can't come"
    },
    buttonLabel: "Send RSVP",
    successTitle: "Thank You",
    successMessage: "We have received your response. We look forward to celebrating with you!"
  },
  families: {
    tagline: "Together with",
    title: "Our Families",
    groomParentsLabel: "Groom's Parents",
    brideParentsLabel: "Bride's Parents",
    quote: "Your presence is the greatest gift we could ask for. We look forward to seeing you there."
  },
  footer: {
    text: "Handcrafted with love for Bharat & Divya"
  }
};