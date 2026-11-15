const mudraImages = {
  "gyan mudra": {
    src: "https://cdn.shopify.com/s/files/1/0566/4800/7733/files/Gyan_Mudra_Gesture_of_Knowledge_Angle_600x600.png?v=1752152891",
    credit: "Asivana Yoga",
    source: "https://asivanayoga.com/blogs/hand-mudras/gyan-mudra",
  },
  "yoni mudra": {
    src: "https://cdn.shopify.com/s/files/1/0566/4800/7733/files/Yoni_Mudra_Close_Up_600x600.jpg?v=1733962962",
    credit: "Asivana Yoga",
    source: "https://asivanayoga.com/blogs/hand-mudras/yoni-mudra",
  },
  "linga mudra": {
    src: "https://cdn.shopify.com/s/files/1/0566/4800/7733/files/Linga_Mudra_Gesture_of_the_Creative_Source_Left_Thumb_eca0cef3-c846-4a99-a68b-58e3c5673b49_600x600.png?v=1752152764",
    credit: "Asivana Yoga",
    source: "https://asivanayoga.com/blogs/hand-mudras/linga-mudra",
  },
  "prana mudra": {
    src: "https://cdn.shopify.com/s/files/1/0566/4800/7733/files/Powerful_Mudras_Prana_Mudra_powerful_Mudra_for_Energy_Lifeforce_600x600.jpg?v=1688077056",
    credit: "Asivana Yoga",
    source: "https://asivanayoga.com/blogs/hand-mudras/prana-mudra",
  },
  "apana mudra": {
    src: "https://cdn.shopify.com/s/files/1/0566/4800/7733/files/Apana_Mudra_Asivana_Yoga_Mudra_Catalog_by_Jack_Utermoehl_600x600.jpg?v=1701375254",
    credit: "Asivana Yoga",
    source: "https://asivanayoga.com/blogs/hand-mudras/apana-mudra",
  },
  "shakti mudra": {
    src: "https://cdn.shopify.com/s/files/1/0566/4800/7733/files/powerful_Mudras_Shakti_Mudra_Powerful_mudra_for_power_600x600.jpg?v=1688077080",
    credit: "Asivana Yoga",
    source: "https://asivanayoga.com/blogs/hand-mudras/shakti-mudra",
  },
  "vata mudra": {
    src: "https://cdn.shopify.com/s/files/1/0566/4800/7733/files/Vayu_Mudra_Asivana_Yoga_Mudra_Catalog_by_Jack_Utermoehl_600x600.jpg?v=1701381591",
    credit: "Asivana Yoga (Vayu Mudra reference)",
    source: "https://asivanayoga.com/blogs/hand-mudras/vayu-mudra",
  },
};

export const reflexologyImage = {
  src: "https://images.squarespace-cdn.com/content/v1/5b76465b5b409bcadedcc6b8/1607650640750-UAIJNAFFWRIPMGKF1PPR/thumb%2Bpressed%2Binto%2Bthe%2Bbottom%2Bof%2Ba%2Bfoot%2Bapplies%2Breflexology%2Bpressure%2Bfor%2Bbalancing%2Benergy%2Band%2Bhealth",
  credit: "Alison Zeidler, Wholistic Wellness Facilitator",
  source: "https://www.alisonzeidler.com/reflexology-whitehorse",
};

export function getMudraImage(name = "") {
  const normalizedName = name.trim().toLowerCase();
  return mudraImages[normalizedName] || mudraImages["gyan mudra"];
}
