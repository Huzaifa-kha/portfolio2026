// ===================================================
// CASE STUDIES — single source of truth
// Used by index.html and case-studies.html
// ===================================================
const CASE_STUDIES = [
  {
    number: '01',
    slug: 'pizza-hut',
    img: 'MY_Portfolio_cv_122.jpg',
    industry: 'Global QSR · Food & Beverage',
    title: 'Pizza Hut',
    location: 'Saudi Arabia',
    locationEmoji: '🇸🇦',
    year: '2024',
    role: 'Social Media Designer',
    brief: 'Culturally-tailored social campaigns blending bold storytelling with Pizza Hut\'s global identity.',
    client: {
      name: 'Pizza Hut Saudi Arabia',
      industry: 'Quick Service Restaurant',
      market: 'Saudi Arabian consumer market',
      audience: 'Young Saudi families, professionals, gaming audiences'
    },
    theBrief: 'Pizza Hut Saudi Arabia required social media creatives that respected regional cultural cues — Father\'s Day family moments, gaming-football cross-promotions, group dining occasions — while staying faithful to the global Pizza Hut visual language. Every piece needed bilingual Arabic and English layouts, appetite-driven food photography compositions, and clear call-to-action structures for app and dine-in conversions.',
    strategy: 'I anchored the campaign system on three pillars: (1) cultural relevance — recognizing distinct Saudi family moments rather than translating Western ones, (2) appetite appeal — every hero image leading with food, never decoration, and (3) consistency — leveraging Pizza Hut\'s iconic red across all touchpoints while introducing fresh layout patterns to keep the feed dynamic.',
    solution: 'Created a campaign system built around the brand\'s red palette with high-contrast lifestyle imagery. Hero concepts include: a "Respectfully To Each Item" series with four family hands holding pizza slices labeled mom/dad/sister/me; a Father\'s Day "flavour wala" emotional concept positioning pizza as a love language; and a gaming-meets-football stadium hybrid creative tapping into Saudi Arabia\'s booming esports audience.',
    process: [
      { step: '01', title: 'Cultural Research', desc: 'Studied Saudi family dining habits, gaming culture, and bilingual social patterns to ground creative direction.' },
      { step: '02', title: 'Concept Sprints', desc: 'Generated 12+ campaign concepts across three themes, narrowed to four hero ideas with client review loops.' },
      { step: '03', title: 'Visual Production', desc: 'Photo composition, food retouching, Arabic/English typography lockups, and brand-faithful color treatment.' },
      { step: '04', title: 'Adaptation & Delivery', desc: 'Resized for Instagram feed, story, reels covers, and in-app banner placements with consistent brand voice.' }
    ],
    deliverables: ['Instagram Feed Posts', 'Story Templates', 'Father\'s Day Campaign', 'Gaming Crossover Concepts', 'Bilingual Arabic/English Layouts', 'Hero Food Photography Compositions', 'Reels Cover Designs'],
    stats: [
      { n: '12+', l: 'Creatives Delivered' },
      { n: '4', l: 'Campaign Themes' },
      { n: 'KSA', l: 'Primary Market' }
    ],
    tools: 'Adobe Photoshop · Adobe Illustrator · Food Retouching · Brand System Adherence',
    learning: 'Cultural relevance beats translation. Global brands win in regional markets when their creative respects local moments rather than retrofitting Western templates. The "Respectfully To Each Item" concept performed because it understood Saudi family dynamics, not because it borrowed from a Western playbook.'
  },
  {
    number: '02',
    slug: 'imak-group',
    img: 'MY_Portfolio_cv_109.jpg',
    industry: 'B2B · Marble & Granite Export',
    title: 'IMAK Group',
    location: 'Egypt',
    locationEmoji: '🇪🇬',
    year: '2023',
    role: 'Brand Identity Designer',
    brief: 'Complete corporate identity for Egypt\'s leading marble and granite import-export firm.',
    client: {
      name: 'IMAK Group',
      industry: 'Marble & granite import-export (B2B)',
      market: 'Egypt with international export footprint',
      audience: 'Architects, contractors, commercial developers'
    },
    theBrief: 'IMAK Group, established in 2010, needed a corporate identity that conveyed authority and global ambition in the competitive Egyptian marble and granite export market. The brand mark needed to feel solid, refined, and equally credible on letterhead, business cards, packaging, vehicles, and trade-show signage — across English and Arabic markets.',
    strategy: 'Position IMAK as a premium B2B partner — not a commodity supplier — through visual cues borrowed from architecture and luxury goods rather than industrial categories. The mark should suggest layered geology (the product itself), structural authority (the industry), and modern Egyptian export ambition (the brand story).',
    solution: 'Designed a geometric "M" logomark sculpted from interlocking planes that read simultaneously as the letterform and as layered stone strata. Deep navy and gold palette signals permanence and craftsmanship while differentiating from competitors using generic industrial blacks and reds. Extended the system across letterheads, business cards, branded coffee cups, and full marketing collateral.',
    process: [
      { step: '01', title: 'Discovery & Audit', desc: 'Studied competitor identities, IMAK\'s 13-year history, and reviewed real client touchpoints from trade shows.' },
      { step: '02', title: 'Mark Exploration', desc: 'Developed 8 logomark directions ranging from literal stone references to architectural abstractions.' },
      { step: '03', title: 'Brand System', desc: 'Built color palette, typography hierarchy, photography style, and application rules for B2B contexts.' },
      { step: '04', title: 'Rollout Kit', desc: 'Delivered stationery, business cards, branded merchandise, and presentation templates for the sales team.' }
    ],
    deliverables: ['Primary Logo & Variants', 'Brand Guidelines Document', 'Letterhead & Stationery', 'Business Cards', 'Branded Coffee Cups', 'Marketing Collateral', 'Tagline Lockup'],
    stats: [
      { n: '15+', l: 'Brand Assets Designed' },
      { n: '2-Color', l: 'Refined Palette' },
      { n: 'B2B', l: 'Premium Positioning' }
    ],
    tools: 'Adobe Illustrator · Adobe Photoshop · Brand System Documentation · Print Production',
    learning: 'In commodity industries, the brand IS the differentiator. IMAK competes against suppliers offering similar marble at similar prices — the visual identity is often what gets them on the shortlist. Investing in a refined mark pays back across every sales conversation.'
  },
  {
    number: '03',
    slug: 'eelu',
    img: 'MY_Portfolio_cv_129.jpg',
    industry: 'Higher Education · E-Learning',
    title: 'Egyptian E-Learning University',
    location: 'Egypt',
    locationEmoji: '🇪🇬',
    year: '2023',
    role: 'Marketing Designer',
    brief: 'Student-facing marketing campaigns for Egypt\'s pioneer e-learning university.',
    client: {
      name: 'EELU (Egyptian E-Learning University)',
      industry: 'Higher education, pioneer of e-learning in Egypt since 2008',
      market: 'Egypt-wide student recruitment',
      audience: 'Young Egyptian students aged 17-25 considering university'
    },
    theBrief: 'EELU needed a flexible campaign system that could speak to young Egyptian students across very different moments: admissions calls-to-action, exam-period stress relief tips, festive seasonal greetings, theatre event promotions. Every piece needed to feel young, accessible, mobile-first, and unmistakably on-brand. Mixed Arabic and English typography requirements.',
    strategy: 'Build a system anchored on a relatable character — not stock photography. Egyptian students recognize themselves in illustration far better than in generic university imagery. The character becomes the brand\'s ambassador across every campaign, while seasonal hero pieces give the feed cinematic moments.',
    solution: 'Developed an illustration-led visual language built around an Egyptian student character (in hijab, with laptop and books) that appears across exam-guidance posts. Paired with cinematic seasonal hero pieces (New Year 2023 with Santa sleigh, festive theatre announcements) and event-specific admissions posters. Consistent red-and-blue palette anchors every touchpoint.',
    process: [
      { step: '01', title: 'Audience Mapping', desc: 'Researched Egyptian Gen Z social habits, decision triggers for university choice, and exam-period stress patterns.' },
      { step: '02', title: 'Character Design', desc: 'Designed the recurring student character with multiple poses for exam, study, online learning scenarios.' },
      { step: '03', title: 'Campaign Series', desc: 'Built six exam-guidance tip posts, festive seasonal heroes, and event-specific admissions announcements.' },
      { step: '04', title: 'Adaptation', desc: 'Resized for Instagram, Facebook, and university website banners with consistent visual identity.' }
    ],
    deliverables: ['Social Media Campaign System', 'Exam Tip Illustration Series (6 pieces)', 'Seasonal Greetings', 'Event & Theatre Posters', 'Custom Student Character Illustrations', 'Admissions Announcements'],
    stats: [
      { n: '8+', l: 'Campaign Pieces' },
      { n: '6', l: 'Exam Tip Series' },
      { n: '1M+', l: 'Student Reach' }
    ],
    tools: 'Adobe Illustrator · Adobe Photoshop · Custom Vector Illustration · Arabic Typography',
    learning: 'Education brands sell certainty in an anxious moment. Students don\'t buy a university — they buy confidence that they\'ll be okay. Illustration creates psychological warmth that stock photography can\'t.'
  },
  {
    number: '04',
    slug: 'mobilcom',
    img: 'MY_Portfolio_cv_111.jpg',
    industry: 'E-commerce · Electronics',
    title: 'Mobilcom',
    location: 'Egypt',
    locationEmoji: '🇪🇬',
    year: '2023',
    role: 'Brand & Packaging Designer',
    brief: 'Complete brand identity and packaging system for a trusted Egyptian online electronics retailer.',
    client: {
      name: 'Mobilcom',
      industry: 'E-commerce, electronics retail',
      market: 'Egyptian online shoppers',
      audience: 'Young tech-savvy consumers, 18-35'
    },
    theBrief: 'Mobilcom needed an identity that felt energetic and trustworthy in the saturated Egyptian electronics e-commerce category. The brand had to translate equally well across packaging, smartwatch product mockups, lifestyle photography, transparent phone cases, and a recognizable brand-led pattern for shipping bags. Tagline: "In Touch With Technology."',
    strategy: 'In e-commerce, the packaging IS the brand experience — most customers never see anything else. Build a logomark that doubles as a versatile pattern, so the brand shows up boldly on every shipping bag, product mockup, and lifestyle image. The mark should be instantly recognizable and Instagram-shareable.',
    solution: 'Built a bold red-and-navy identity with a speech-bubble "COM" mark that doubles as a recognizable shape — used as logomark, repeated pattern across shipping bags, and product callouts on smartwatch screens. Designed transparent phone case mockups, lifestyle ad creatives, and a complete product photography style guide positioning Mobilcom as the youthful choice for Egyptian tech buyers.',
    process: [
      { step: '01', title: 'Market Research', desc: 'Analyzed top Egyptian electronics retailers and global e-commerce brand patterns (Amazon, Souq, Jumia).' },
      { step: '02', title: 'Mark Development', desc: 'Designed the COM speech-bubble logomark with built-in pattern capability.' },
      { step: '03', title: 'Packaging System', desc: 'Created tiled COM-pattern shipping bags, branded transparent phone cases, and product mockup templates.' },
      { step: '04', title: 'Marketing Assets', desc: 'Produced lifestyle ad creatives showing real customers using products in everyday Egyptian contexts.' }
    ],
    deliverables: ['Logo & Brand Mark', 'Shipping Bag Pattern System', 'Phone Case Mockups', 'Smartwatch Product Mockups', 'Lifestyle Ad Creatives', 'Product Photography Style Guide'],
    stats: [
      { n: '6+', l: 'Brand Asset Types' },
      { n: '3-Color', l: 'System' },
      { n: 'D2C', l: 'E-commerce' }
    ],
    tools: 'Adobe Illustrator · Adobe Photoshop · Pattern Design · Product Mockup Composition',
    learning: 'For e-commerce brands, every package is a billboard. Customers don\'t see your storefront — they see your shipping bag. Designing the unboxing moment as the primary brand touchpoint changed the entire system.'
  },
  {
    number: '05',
    slug: 'storm',
    img: 'MY_Portfolio_cv_113.jpg',
    industry: 'Adventure Tourism · Entertainment',
    title: 'STORM Adventures',
    location: 'Saudi Arabia',
    locationEmoji: '🇸🇦',
    year: '2023',
    role: 'Brand Identity & Marketing Designer',
    brief: 'Brand identity and marketing for a Saudi desert tourism and entertainment experience.',
    client: {
      name: 'STORM Adventures',
      industry: 'Adventure tourism, desert experiences',
      market: 'Saudi domestic and inbound tourism',
      audience: 'Adventure seekers, families, and international tourists'
    },
    theBrief: 'STORM needed a brand that captured the magic of desert adventure with day-and-night versatility. The mark had to feel adventurous yet polished, working at billboard scale and on tiny mobile ad placements alike. Marketing had to drive bookings through clear calls-to-action while maintaining brand mystery.',
    strategy: 'Design a brand that adapts to time-of-day moments. Morning tours and night experiences are emotionally different products — the visual system should signal that without losing brand consistency. The mark should be recognizable in silhouette, allowing for color variations across different tour types.',
    solution: 'Circular badge mark featuring an active silhouette atop dunes — built with two color variants: warm orange "Morning" for daytime energy, navy "Night" for evening tours. Extended across outdoor billboards ("Explore the Power of Skating"), social campaigns ("Looking for a unique tourism experience?"), and on-location video signage shot in real desert settings.',
    process: [
      { step: '01', title: 'Brand Discovery', desc: 'Studied global adventure brands (REI, Patagonia) and Saudi tourism positioning to find a unique angle.' },
      { step: '02', title: 'Mark Design', desc: 'Created the circular badge with built-in day/night variant system using temperature-shifted palettes.' },
      { step: '03', title: 'Campaign Production', desc: 'Designed outdoor billboards, in-location signage, and digital booking-driven ad creatives.' },
      { step: '04', title: 'Activation Materials', desc: 'Built point-of-sale activation materials for kiosks, tour vehicles, and partner displays.' }
    ],
    deliverables: ['Primary Logo (Day Variant)', 'Logo (Night Variant)', 'Billboard Designs', 'Social Campaign Creatives', 'On-Location Signage', 'Booking CTAs', 'Tourism Marketing Materials'],
    stats: [
      { n: '2', l: 'Logo Variants' },
      { n: '5+', l: 'Touchpoints' },
      { n: 'KSA', l: 'Tourism Market' }
    ],
    tools: 'Adobe Illustrator · Adobe Photoshop · Billboard Mockup Composition · Brand System Design',
    learning: 'Experience brands sell anticipation. The marketing has to make the desert feel mythical before someone has even booked. Visual restraint — letting the desert imagery breathe — created more wonder than busy graphics ever could.'
  },
  {
    number: '06',
    slug: 'turkan',
    img: 'MY_Portfolio_cv_131.jpg',
    industry: 'F&B · Multi-Cuisine Restaurant',
    title: 'Turkan Restaurant',
    location: 'Saudi Arabia',
    locationEmoji: '🇸🇦',
    year: '2024',
    role: 'Social Media Designer',
    brief: 'Appetite-driven social campaigns for a Saudi grilled-specialties and Western-fusion restaurant.',
    client: {
      name: 'Turkan Restaurant',
      industry: 'Mid-tier restaurant, multi-cuisine',
      market: 'Saudi Arabia urban diners',
      audience: 'Young Saudi families and friend groups, ages 18-40'
    },
    theBrief: 'Turkan needed social content that worked just as hard for engagement (interactive maze puzzles, "warning: causes addiction" hooks) as for menu sales (pizza, shawarma, fatteh, burgers). All Arabic-led, all needed to feel premium-yet-fun, and consistent with the restaurant\'s warm brown-and-cream identity.',
    strategy: 'Build a content matrix that alternates between three modes: pure menu sales (hero food shots with clear pricing/availability), engagement-bait (puzzles, interactive content that drives saves and shares), and brand voice (warning-style humor that builds personality). Each mode shares the same visual DNA but solves a different goal.',
    solution: 'Layered content system: hero food photography for new menu launches ("Burger that causes severe addiction"), interactive maze puzzles for engagement, and warm-textured backgrounds (wood, checkered cloth) to evoke home-cooked comfort. Bold Arabic typography sets the tone across every piece while leaving space for English audiences.',
    process: [
      { step: '01', title: 'Content Audit', desc: 'Analyzed Turkan\'s previous posts and identified the gap: too much sales, not enough personality.' },
      { step: '02', title: 'Content Pillars', desc: 'Defined three content modes — sales, engagement, voice — with quantified weekly distribution.' },
      { step: '03', title: 'Asset Production', desc: 'Shot and composited hero dishes, designed interactive puzzles, built warning-style templates.' },
      { step: '04', title: 'Voice Calibration', desc: 'Refined Arabic copywriting tone in collaboration with the client to balance humor and brand respect.' }
    ],
    deliverables: ['Hero Menu Launch Posts', 'Engagement Carousels', 'Interactive Maze Puzzles', 'Hero Burger Campaign', 'Brand Voice Guidelines', 'Content Templates', 'Bilingual Captions'],
    stats: [
      { n: '5+', l: 'Content Formats' },
      { n: '3', l: 'Hero Dishes' },
      { n: 'AR/EN', l: 'Bilingual' }
    ],
    tools: 'Adobe Photoshop · Adobe Illustrator · Food Composition · Arabic Typography',
    learning: 'Restaurants that only post food look like menus. Personality is what builds the audience — and personality has to risk being weird. The "warning: causes severe addiction" line raised eyebrows in client review but it became the best-performing post.'
  },
  {
    number: '07',
    slug: 'modern-technology',
    img: 'MY_Portfolio_cv_135.jpg',
    industry: 'B2B · Construction Materials',
    title: 'Modern Technology',
    location: 'Egypt',
    locationEmoji: '🇪🇬',
    year: '2024',
    role: 'Print & Brand Designer',
    brief: 'Complete company profile brochure for a B2B aluminum, glass, and steel supplier.',
    client: {
      name: 'Modern Technology',
      industry: 'B2B aluminum, glass, and stainless steel works for commercial construction',
      market: 'Egypt commercial construction sector',
      audience: 'Architects, contractors, commercial developers'
    },
    theBrief: 'Modern Technology needed a sales-tool brochure that communicated technical capability, materials expertise, and trust to commercial buyers — architects, contractors, developers. The piece had to feel corporate yet contemporary, with clear navigation across Vision, Mission, Materials, Suppliers (Alumel, Technal, PS Systems), and After-Sales Maintenance Service.',
    strategy: 'In B2B construction, brochures aren\'t marketing — they\'re sales decks that close deals. The piece should be hand-deliverable, easy to flip through in a 5-minute meeting, and scannable enough that a decision-maker can grasp the value proposition without reading every word. Architecture imagery does the emotional work; structure and white space do the rest.',
    solution: 'Designed a 12-page horizontal landscape brochure built around clean navy-and-white architecture imagery. Bold "MODERN TECHNOLOGY" sans-serif cover sets industrial confidence; interior spreads use white space and accent ribbons to highlight key information. Includes Vision, Mission, Materials & Suppliers, After-Sales Maintenance Service (1-year warranty highlight), and Thank You / Get in Touch closing.',
    process: [
      { step: '01', title: 'Content Audit', desc: 'Worked with leadership to define what to keep, cut, and emphasize for the sales context.' },
      { step: '02', title: 'Structure Design', desc: 'Mapped the 12 pages to a buyer\'s decision journey — credibility, capability, contact.' },
      { step: '03', title: 'Visual System', desc: 'Built a navy-and-white architecture-led visual language with red accent ribbons for navigation.' },
      { step: '04', title: 'Print Production', desc: 'Prepared print-ready files with proper bleeds, color profiles, and paper stock recommendations.' }
    ],
    deliverables: ['12-Page Landscape Brochure', 'Cover Design', 'Vision & Mission Spreads', 'Materials & Suppliers Pages', 'After-Sales Maintenance Pages', 'Print-Ready Files (CMYK)', 'Brand-Aligned Color System'],
    stats: [
      { n: '12+', l: 'Brochure Pages' },
      { n: '5', l: 'Content Sections' },
      { n: '1 Year', l: 'Warranty Highlight' }
    ],
    tools: 'Adobe InDesign · Adobe Photoshop · Print Production · Color Management',
    learning: 'B2B sales decks are not marketing collateral — they\'re extensions of the salesperson. The piece has to do the convincing in the moments the salesperson isn\'t in the room. Every spread had to earn its place in a 5-minute scan.'
  },
  {
    number: '08',
    slug: 'maqam',
    img: 'MY_Portfolio_cv_127.jpg',
    industry: 'Beauty & Personal Care',
    title: 'MAQAM Cosmetics',
    location: 'Egypt',
    locationEmoji: '🇪🇬',
    year: '2023',
    role: 'Campaign Designer',
    brief: 'Campaign system for an Egyptian beauty company with three distinct sub-brands.',
    client: {
      name: 'MAQAM Cosmetics Solutions',
      industry: 'Egyptian beauty company, hair and skincare',
      market: 'Egypt beauty consumers',
      audience: 'Multi-segment: skincare women, haircare women, parents with babies'
    },
    theBrief: 'MAQAM\'s product family covers three distinct audiences: women seeking premium skincare (Tetra Glow), women seeking haircare (Tettelio), and parents seeking gentle baby skincare (Happiness). The campaign system had to unify them under one parent brand while letting each sub-brand speak to its specific buyer in voice, color, and visual register.',
    strategy: 'Create a parent visual system anchored on cinematic beauty photography — but vary the sub-brand expression. Tetra Glow uses sophisticated minimalism (close-up beauty shots), Tettelio uses metaphor-driven imagery (hair as music), and Happiness uses warm cartoon illustration for baby gentleness. Three voices, one family.',
    solution: 'Emotion-led campaign system anchored on cinematic beauty photography. Hero Tetra Glow ads with "no filter needed" angle (woman with phone selfie comparison), Tettelio "your hair is the strings of your life" hair concept with violin metaphor, and a softer "Happiness" cartoon child illustration for baby care. Cohesive brown-cream palette ties everything together.',
    process: [
      { step: '01', title: 'Sub-Brand Mapping', desc: 'Defined three distinct buyer personas and emotional triggers for each MAQAM product line.' },
      { step: '02', title: 'Concept Sprints', desc: 'Developed hero campaign concepts per sub-brand, with deliberate visual differentiation.' },
      { step: '03', title: 'Photography Direction', desc: 'Composed and retouched beauty photography to feel premium without leaving the Egyptian market.' },
      { step: '04', title: 'System Cohesion', desc: 'Established shared brown-cream palette and typography rules that signal "MAQAM family."' }
    ],
    deliverables: ['Tetra Glow Hero Campaign', 'Tettelio Hair Campaign', 'Happiness Baby Series', 'Hero Beauty Compositions', 'Sub-Brand Visual System', 'Multi-Demographic Targeting Guide'],
    stats: [
      { n: '3', l: 'Sub-Brands Unified' },
      { n: '6+', l: 'Hero Creatives' },
      { n: 'Multi', l: 'Demographic Reach' }
    ],
    tools: 'Adobe Photoshop · Adobe Illustrator · Beauty Retouching · Custom Illustration',
    learning: 'Sub-brands need permission to be different. Forcing every product line into one identical template kills each one\'s magic. The hardest part was getting MAQAM leadership comfortable with three visibly different visual approaches — but it\'s what made each sub-brand actually convert.'
  },
  {
    number: '09',
    slug: 'technology-valley',
    img: 'MY_Portfolio_cv_120.jpg',
    industry: 'Retail · Consumer Electronics',
    title: 'Technology Valley',
    location: 'Egypt',
    locationEmoji: '🇪🇬',
    year: '2024',
    role: 'Product Marketing Designer',
    brief: 'Unified product advertising system for an Egyptian electronics retailer carrying global brands.',
    client: {
      name: 'Technology Valley',
      industry: 'Egyptian electronics retailer (Samsung, Sharp, Zanussi, Realme, Tornado)',
      market: 'Egyptian B2C consumers',
      audience: 'Egyptian households shopping for home appliances and electronics'
    },
    theBrief: 'Technology Valley needed a unified ad template that could showcase wildly different products (refrigerators, washing machines, smart TVs, smartphones, kitchen appliances) from competing manufacturers while keeping the retailer\'s brand front-and-center. Each ad had to be sales-driven with hotline prominence and tagline placement.',
    strategy: 'In multi-brand retail, the retailer\'s identity is the through-line. Customers don\'t buy from "Samsung" or "Sharp" — they buy from Technology Valley, who happens to carry both. The ad system should subordinate manufacturer logos to the retailer\'s frame, while letting product imagery be the hero.',
    solution: 'Designed a modular ad system using vibrant color blocks (red, blue, dark navy) to differentiate product categories. Each creative pairs a hero product render against a bold color background, with consistent placement for the Technology Valley logo (bottom-left), Arabic tagline (top-right), and hotline 15641 (bottom-right). Themed creatives include a cinematic Samsung 4K UHD launch featuring Iron Man imagery for entertainment context.',
    process: [
      { step: '01', title: 'Template System', desc: 'Designed a modular grid that could host any product category with consistent retailer branding.' },
      { step: '02', title: 'Color Coding', desc: 'Mapped product categories to color blocks (red for kitchen, blue for tech, navy for entertainment).' },
      { step: '03', title: 'Hero Builds', desc: 'Produced flagship ads (Samsung 4K with Iron Man, Sharp refrigerator) as system anchors.' },
      { step: '04', title: 'Scale Pack', desc: 'Built reusable Photoshop templates so the in-house team could produce future ads on-system.' }
    ],
    deliverables: ['Modular Ad Template System', 'Samsung Hero Ad (4K UHD launch)', 'Sharp Refrigerator Ad', 'Multi-Brand Ad Library', 'Hotline-Focused CTAs', 'Color-Coded Category System', 'In-House Template Files'],
    stats: [
      { n: '5+', l: 'Multi-Brand Ads' },
      { n: '1', l: 'Unified System' },
      { n: 'B2C', l: 'Retail Focus' }
    ],
    tools: 'Adobe Photoshop · Adobe Illustrator · 3D Product Rendering · Template Engineering',
    learning: 'Retail brands win when their visual system makes the product the hero AND the retailer unmistakable. Building reusable templates was the highest-leverage decision — it let Technology Valley produce 50+ ads without me, on-brand every time.'
  },
  {
    number: '10',
    slug: 'flamingo',
    img: 'MY_Portfolio_cv_115.jpg',
    industry: 'Luxury F&B · Upscale Dining',
    title: 'Flamingo Restaurant',
    location: 'Egypt',
    locationEmoji: '🇪🇬',
    year: '2024',
    role: 'Brand Identity Designer',
    brief: 'Complete visual identity for an upscale restaurant inside a luxury Fayoum resort.',
    client: {
      name: 'Flamingo Restaurant',
      industry: 'Upscale restaurant inside Venezia Resort, Fayoum Governorate',
      market: 'Resort guests, luxury domestic tourism',
      audience: 'Vacationing families, business travelers, fine-dining enthusiasts'
    },
    theBrief: 'Flamingo needed an identity that signalled luxury without feeling stuffy — fitting for an upscale resort dining experience but inviting enough for vacationing families. The mark had to work across signage, takeout coffee cups, brown paper takeaway bags, dark navy menus, and Instagram storytelling. Tagline: "Taste of Luxury."',
    strategy: 'Resort dining brands win when they feel native to the location, not imported from a city restaurant playbook. Build a mark that nods to the resort\'s setting (palm trees, lush gardens) and the restaurant\'s name (flamingo). The color palette should feel Egyptian — vibrant pinks and teals — rather than European luxury muted neutrals.',
    solution: 'Delicate line-art flamingo-and-palm-tree badge that nods to the bird, the resort\'s lush setting, and luxury hospitality cues. Built a vibrant pink-and-teal Egyptian color palette that contrasts beautifully with the muted gold-stamped takeaway packaging. Extended across coffee cups, paper bags, social media campaigns, and a premium dark navy menu cover with embossed gold accents.',
    process: [
      { step: '01', title: 'Location Discovery', desc: 'Visited the resort context, studied competing Fayoum restaurants, and mapped the dining occasion.' },
      { step: '02', title: 'Mark Exploration', desc: 'Developed flamingo-led concepts ranging from minimalist to ornate; landed on a delicate line-art badge.' },
      { step: '03', title: 'Color System', desc: 'Built a vibrant pink-and-teal palette balanced by sophisticated dark navy for menus and signage.' },
      { step: '04', title: 'Touchpoint Rollout', desc: 'Designed coffee cups, paper takeaway bags, menu covers, and a launch social media campaign.' }
    ],
    deliverables: ['Primary Logo Mark', 'Brand Color Palette', 'Coffee Cup Design', 'Paper Takeaway Bags', 'Dark Navy Menu Cover', 'Social Media Launch Campaign', 'Signage System'],
    stats: [
      { n: '10+', l: 'Brand Touchpoints' },
      { n: '3', l: 'Color Variants' },
      { n: 'Resort', l: 'Luxury Hospitality' }
    ],
    tools: 'Adobe Illustrator · Adobe Photoshop · Mockup Composition · Brand Identity System',
    learning: 'Luxury isn\'t about restraint — it\'s about intention. Flamingo\'s vibrant pink and teal would feel cheap on a corporate identity, but on a resort restaurant in Egypt, it feels expressive and confident. Knowing when to break the "luxury must be muted" rule is what makes a brand feel native.'
  }
];

if (typeof module !== 'undefined') module.exports = CASE_STUDIES;
