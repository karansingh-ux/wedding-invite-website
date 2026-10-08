export interface WeddingData {
  couple: {
    bride: {
      firstName: string;
      fullName: string;
      culture: string;
      hometown: string;
    };
    groom: {
      firstName: string;
      fullName: string;
      culture: string;
      hometown: string;
    };
    combinedTag: string;
    tagline: string;
  };
  destination: {
    venue: string;
    city: string;
    state: string;
    country: string;
    dates: string;
    year: string;
  };
  blessing: {
    invocation: string;
    sanskritLine: string;
    englishMeaning: string;
  };
  events: {
    id: string;
    title: string;
    subTitle: string;
    date: string;
    time: string;
    location: string;
    attire: string;
    description: string;
    palette: string[];
  }[];
}

export const weddingData: WeddingData = {
  couple: {
    bride: {
      firstName: "Ananya",
      fullName: "Ananya Krishnamurthy",
      culture: "Tamil",
      hometown: "Chennai",
    },
    groom: {
      firstName: "Dhruv",
      fullName: "Dhruv Patel",
      culture: "Gujarati",
      hometown: "Ahmedabad",
    },
    combinedTag: "Ananya & Dhruv",
    tagline: "Two cultures, one wedding, one forever.",
  },
  destination: {
    venue: "The Heritage Royal Palace & Gardens",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    dates: "November 21 – 23, 2026",
    year: "2026",
  },
  blessing: {
    invocation: "॥ श्री गणेशाय नमः ॥",
    sanskritLine: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    englishMeaning: "May Lord Ganesha remove all obstacles and bless this sacred union with joy, peace, and eternal love.",
  },
  events: [
    {
      id: "arrival",
      title: "Resort Arrival & Welcome",
      subTitle: "Check-in, welcome drinks & settling into the palace",
      date: "Friday, Nov 21",
      time: "12:00 PM onwards",
      location: "Courtyard of Arches",
      attire: "Casual Chic & Breezy Pastels",
      description: "Step into our sunlit oasis where bougainvillea meets heritage courtyards. Grab your welcome drink, explore the gardens, and unwind before the celebrations commence.",
      palette: ["#FFF8EA", "#F6DFA0", "#EFA6B5", "#641F27"],
    },
    {
      id: "sunshine-soiree",
      title: "The Sunshine Soirée",
      subTitle: "A vibrant, petal-strewn Haldi celebration",
      date: "Saturday, Nov 22",
      time: "10:30 AM",
      location: "Sunlit Poolside Lawn",
      attire: "Shades of Yellow, Peach & Floral prints",
      description: "Turmeric, marigolds, splashing water, and joyful tunes under the morning sun.",
      palette: ["#F6DFA0", "#F2B08A", "#D9784B", "#EFA6B5"],
    },
    {
      id: "sunset-sparkles",
      title: "Sunset & Sparkles",
      subTitle: "Sunset Puja, Ring Exchange & Sangeet",
      date: "Saturday, Nov 22",
      time: "6:00 PM",
      location: "Palace Amphitheatre",
      attire: "Cocktail Glamour & Royal Indo-Western",
      description: "As golden hour slips into twilight, fairy lights illuminate an evening of dance battles, soulful melodies, and endless celebration.",
      palette: ["#C8B7D9", "#F2B08A", "#641F27", "#C7A85A"],
    },
    {
      id: "wedding",
      title: "The Auspicious Wedding",
      subTitle: "Tamil rituals meet Gujarati festive traditions",
      date: "Sunday, Nov 23",
      time: "9:30 AM",
      location: "Temple Mandap by the Lake",
      attire: "Traditional South Indian & Gujarati Elegance",
      description: "Jasmine meets Marigold, Kolam meets Bandhani. Two sacred heritage traditions weave together under the holy fire.",
      palette: ["#FFF8EA", "#641F27", "#53614D", "#C7A85A"],
    },
    {
      id: "moonlight-jam",
      title: "Moonlight Jam",
      subTitle: "Intimate acoustic night & heartfelt memories",
      date: "Sunday, Nov 23",
      time: "8:00 PM",
      location: "Starlit Olive Grove",
      attire: "Comfortable Elegance",
      description: "Late-night live acoustic tunes, shared memories, cozy bonfire seating, and endless midnight conversations.",
      palette: ["#641F27", "#53614D", "#F6DFA0", "#FFF8EA"],
    },
  ],
};
