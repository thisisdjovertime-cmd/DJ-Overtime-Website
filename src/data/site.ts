/**
 * Single source of truth for site-wide content, links and contact details.
 * Edit values here rather than in individual components.
 */

export const site = {
  name: 'THISISOVERTIME',
  /** Used only in <title> / search results / link previews so he's findable for "DJ Overtime" searches. */
  titleName: 'THISISOVERTIME (DJ Overtime)',
  legalName: 'THISISOVERTIME',
  shortName: 'OVERTIME',
  domain: 'https://www.thisisovertime.com',
  tagline: 'Nightlife, Festival & Sports DJ',
  heroLine: 'The clock ends. The signal continues.',
  categoryLine: 'Music / Nightlife / Art / Festival Energy',
  description:
    'THISISOVERTIME is a high-energy open-format DJ and producer, Resident DJ at Stadium Club (Caribe Royale Orlando). Booking nightlife, festivals, sports watch parties, corporate events and brand activations worldwide.',

  contact: {
    bookingEmail: 'bookings@thisisovertime.com',
    phone: '+1-689-325-6411',
    phoneDisplay: '+1 (689) 325-6411',
    baseLocation: 'Orlando, Florida',
  },

  socials: [
    { label: 'Instagram', handle: '@thisisovertime', url: 'https://www.instagram.com/thisisovertime/' },
    { label: 'YouTube', handle: 'THISISOVERTIME', url: 'https://www.youtube.com/@thisisovertime' },
  ],

  // Music — DistroKid HyperFollow links
  music: [
    {
      title: 'WE ARE STADIUM',
      artists: 'THISISOVERTIME x DJ Wolves',
      url: 'https://distrokid.com/hyperfollow/thisisovertimexdjwolves/we-are-stadium',
    },
    {
      title: 'ALL IN',
      artists: 'DJ Wolves x THISISOVERTIME',
      url: 'https://distrokid.com/hyperfollow/djwolvesxthisisovertime/all-in',
    },
    {
      title: 'DESDE AQUEL DIA',
      artists: 'Rashid & Eknuel',
      url: 'https://distrokid.com/hyperfollow/rashidandeknuel/desde-aquel-dia',
    },
    {
      title: 'GANAS DE VERTE',
      artists: 'Rashid & Eknuel',
      url: 'https://social.tunecore.com/linkShare?linkid=SVkWVJXV3V7t8yclw1x-iQ',
    },
  ],

  // Mixes — hearthis.at embeds (id + per-track embed secret from the share code)
  mixes: [
    {
      title: 'THIS IS OVERTIME 1',
      id: '14664806',
      secret: 'rAB',
      url: 'https://hearthis.at/tiot/overtime-1/',
    },
  ],

  // Video — YouTube
  videos: [
    { title: 'FOX 35', id: 'XO_TOBD197k', kind: 'video' as const },
    { title: 'Telemundo', id: 'Vxw9Q6iHdpM', kind: 'video' as const },
    { title: 'FL Pool Open', id: 'QJ7Em5hARaI', kind: 'short' as const },
    { title: 'Mosconi Cup', id: '6w-3RPNfL1E', kind: 'short' as const },
  ],

  // "Featured on / worked with"
  partners: [
    'Stadium Club',
    'Peacock',
    'FOX 35',
    'Telemundo',
    'Most Valuable Promotions',
    'Matchroom',
    'DAZN',
    'BoxLab Promotions',
  ],

  services: [
    {
      key: 'sports',
      name: 'Sports & Live Event DJ',
      blurb:
        'High-energy performance built for sports-driven environments — watch parties, arenas and large-format venues. Sets designed to enhance gameplay moments, commercial breaks and crowd interaction without distracting from the action.',
      points: [
        'Resident DJ — Stadium Club',
        'Major sports watch parties & themed events',
        'Seamless integration with AV & broadcast environments',
        'Experienced with MC coordination and live cueing',
      ],
      tags: ['Sports bars', 'Arenas', 'Team activations', 'Watch parties'],
    },
    {
      key: 'nightlife',
      name: 'Nightlife & Festival DJ',
      blurb:
        'On festival and nightlife stages, THISISOVERTIME delivers high-impact open-format sets built for movement and momentum. Blending Hip-Hop, Latin, EDM and House to connect with diverse crowds while holding festival-level energy and flow.',
      points: [
        'Open-format, festival-ready performance style',
        'High-energy transitions & crowd control',
        'Adaptable for indoor clubs and outdoor stages',
        'Experience across multi-genre audiences',
      ],
      tags: ['Nightclubs', 'Festivals', 'Outdoor stages', 'Multi-genre'],
    },
    {
      key: 'corporate',
      name: 'Corporate & Brand Events',
      blurb:
        'Polished, brand-safe DJ performances for corporate events, hotels and premium brand activations. A background in entertainment management and AV coordination means seamless execution, professional presentation and elevated guest experiences.',
      points: [
        'Corporate & hotel event experience',
        'Brand-conscious music programming',
        'Professional MC and guest engagement',
        'AV-aware execution and coordination',
      ],
      tags: ['Corporate events', 'Hotels', 'Brand activations', 'Private functions'],
    },
  ],

  genres: ['Open Format', 'Hip-Hop', 'Latin', 'EDM', 'House'],

  // Profile carousel (src/pages/index.astro #about). Files in public/assets/about/,
  // cropped 4:5 portrait. Add/remove/reorder freely.
  aboutGallery: [
    { src: '/assets/about/booth-stadium-club.jpg', alt: 'THISISOVERTIME in the DJ booth at Stadium Club, Caribe Royale Orlando' },
    { src: '/assets/about/light-spin.jpg', alt: 'THISISOVERTIME mixing under spinning light trails' },
    { src: '/assets/about/headphones-crowd.jpg', alt: 'THISISOVERTIME holding headphones out over the crowd' },
    { src: '/assets/about/boxing-ring-set.jpg', alt: 'THISISOVERTIME performing at a boxing event' },
    { src: '/assets/about/world-cup-trophy.jpg', alt: 'THISISOVERTIME with the World Cup trophy at the Telemundo and Peacock activation' },
    { src: '/assets/about/bw-set.jpg', alt: 'THISISOVERTIME performing, black and white' },
    { src: '/assets/about/studio-portrait.jpg', alt: 'THISISOVERTIME portrait' },
  ],
} as const;

export type Site = typeof site;
