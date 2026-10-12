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
    dateBadge: string;
    time: string;
    location: string;
    attire: string;
    description: string;
    palette: string[];
  }[];
}

/**
 * Single configurable source for the final celebration party name and details.
 * To update the final party name later, change it right here!
 */
export const finalPartyConfig = {
  name: "Chill Party", // Final name to be provided later; update here easily
  badge: "11TH NIGHT",
  subTitle: "Intimate acoustic night & late-night unwinding",
  time: "10:00 PM onwards",
  location: "Fireside Garden Amphitheatre",
  attire: "Cozy Loungewear",
  description: "Good music, great company and starry skies. Late-night acoustic tunes, shared laughter, and fireside stories.",
  reflectionQuote: "“Guitars, campfires, and unforgettable stories.”",
  tagline: "DIFFERENT MOMENTS. SAME PEOPLE. ALL HEART.",
};

export const weddingData: WeddingData = {
  couple: {
    bride: {
      firstName: "Delliah",
      fullName: "Delliah",
      culture: "",
      hometown: "",
    },
    groom: {
      firstName: "Prashant",
      fullName: "Prashant",
      culture: "",
      hometown: "",
    },
    combinedTag: "Prashant & Delliah",
    tagline: "One celebration, one lifetime, one forever.",
  },
  destination: {
    venue: "The Heritage Resort & Gardens",
    city: "Malshej Ghat",
    state: "Maharashtra",
    country: "India",
    dates: "November 10 – 11, 2026",
    year: "2026",
  },
  blessing: {
    invocation: "॥ श्री गणेशाय नमः ॥",
    sanskritLine: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    englishMeaning: "May Lord Ganesha remove all obstacles and bless this sacred union with joy, peace, and eternal love.",
  },
  events: [
    {
      id: "haldi",
      title: "Haldi",
      subTitle: "Playful, bright and full of joy",
      date: "10th Morning",
      dateBadge: "10TH MORNING",
      time: "10:30 AM",
      location: "Poolside Lawn",
      attire: "Bright Yellows & Florals",
      description: "Turmeric, marigolds, splashing water, and joyful tunes under the morning sun.",
      palette: ["#F6DFA0", "#F2B08A", "#D9784B", "#EFA6B5"],
    },
    {
      id: "sangeet",
      title: "Engagement + Sundowner Sangeet",
      subTitle: "Sunset rings, cocktail glam, and dancing until twilight",
      date: "10th Evening",
      dateBadge: "10TH EVENING",
      time: "5:30 PM onwards",
      location: "Palace Amphitheatre",
      attire: "Indo-Western Glam",
      description: "As golden hour slips into twilight, fairy lights illuminate an evening of dance battles, soulful melodies, and endless celebration.",
      palette: ["#C8B7D9", "#F2B08A", "#641F27", "#C7A85A"],
    },
    {
      id: "wedding",
      title: "The Wedding",
      subTitle: "Our favourite ritual, rooted in tradition and surrounded by nature's beauty",
      date: "11th",
      dateBadge: "11TH",
      time: "4:00 PM Baraat · 5:30 PM Pheras",
      location: "Sacred Mandap",
      attire: "Traditional Royal Attire",
      description: "Two souls, seven sacred vows, and a shared forever under the mountain mist.",
      palette: ["#FFF8EA", "#641F27", "#53614D", "#C7A85A"],
    },
    {
      id: "final-party",
      title: finalPartyConfig.name,
      subTitle: finalPartyConfig.subTitle,
      date: "11th Night",
      dateBadge: finalPartyConfig.badge,
      time: finalPartyConfig.time,
      location: finalPartyConfig.location,
      attire: finalPartyConfig.attire,
      description: finalPartyConfig.description,
      palette: ["#641F27", "#53614D", "#F6DFA0", "#FFF8EA"],
    },
  ],
};
