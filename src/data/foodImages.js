const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=640&q=80`;

const healthyPhotos = {
  fruit: photo("photo-1490474418585-ba9bad8fd0ea"),
  vegetables: photo("photo-1512621776951-a57141f2eefd"),
  grains: photo("photo-1509440159596-0249088772ff"),
  legumes: photo("photo-1515543904379-3d757afe72e4"),
  nuts: photo("photo-1508061253366-f7da158b6d46"),
  fish: photo("photo-1519708227418-c8fd9a32b7a2"),
  protein: photo("photo-1604503468506-a8da13d82791"),
  dairy: photo("photo-1563636619-e9143da7973b"),
  general: photo("photo-1547592180-85f173990554"),
};

const avoidPhotos = {
  sugar: photo("photo-1499636136210-6f4ee915583e"),
  processed: photo("photo-1621939514649-280e2aa73f36"),
  fried: photo("photo-1573080496219-bb080dd4f877"),
  fastFood: photo("photo-1568901346375-23c9450c58cd"),
  drinks: photo("photo-1527960471264-932f39eb5846"),
  coffee: photo("photo-1509042239860-f550ce710b93"),
  alcohol: photo("photo-1514362545857-3bc16c4c7d1b"),
  general: photo("photo-1504674900247-0877df9cc836"),
};

export function getFoodImage(foodName, avoid = false) {
  const normalized = String(foodName || "").toLowerCase();

  if (avoid) {
    if (/alcohol|wine|beer|liquor/.test(normalized)) return avoidPhotos.alcohol;
    if (/soda|carbonated|soft drink|energy drink/.test(normalized)) return avoidPhotos.drinks;
    if (/caffeine|coffee|espresso/.test(normalized)) return avoidPhotos.coffee;
    if (/sugar|sweet|candy|dessert|chocolate|syrup/.test(normalized)) return avoidPhotos.sugar;
    if (/fried|deep.fried|high fat|trans fat|salt|salty/.test(normalized)) return avoidPhotos.fried;
    if (/junk|burger|fast food|pizza|fries/.test(normalized)) return avoidPhotos.fastFood;
    if (/processed|packaged|instant|preservative/.test(normalized)) return avoidPhotos.processed;
    return avoidPhotos.general;
  }

  if (/fruit|berry|berries|citrus|apple|banana|mango|papaya/.test(normalized)) return healthyPhotos.fruit;
  if (/vegetable|leafy|greens|spinach|broccoli|salad/.test(normalized)) return healthyPhotos.vegetables;
  if (/grain|oat|rice|quinoa|whole wheat|wholemeal|millet/.test(normalized)) return healthyPhotos.grains;
  if (/lentil|legume|bean|chickpea|pulse/.test(normalized)) return healthyPhotos.legumes;
  if (/nut|seed|almond|walnut|chia|flax/.test(normalized)) return healthyPhotos.nuts;
  if (/fish|seafood|omega.3/.test(normalized)) return healthyPhotos.fish;
  if (/protein|chicken|egg|lean meat|tofu/.test(normalized)) return healthyPhotos.protein;
  if (/dairy|milk|yogurt|yoghurt|calcium/.test(normalized)) return healthyPhotos.dairy;
  return healthyPhotos.general;
}
