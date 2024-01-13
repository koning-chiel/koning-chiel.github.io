let txt = "txt";
let catagories = [
  "in least time",
  "in least portals",
  "with sar_give_fly",
  "without jumping",
  "with viewsnaps",
  'without using "W" "A" or "D"',
  "with noclip...",
  "out of bounds",
  "in least steps",
  "with sar_give_betsrighter",
  "with sv_gravity 0",
  "with sv_gravity -500",
  "with host_timescale 2",
  "with portals_resizeall 55 55",
  "with portals_resizeall 27 27",
  "with sv_portal_placement_never_fail 1",
  "with thirdpersonshoulder"
];
let hoofdstukken = {
  "Chapter 1 The Courtesy Call": [
    "Container Ride",
    "Portal Carousel",
    "Portal Gun",
    "Smooth Jazz",
    "Cube Momentum",
    "Future Starter",
    "Secret Panel",
    "Wake Up",
    "Incinerator"
  ],
  "Chapter 2 The Cold Boot": [
    "Laser Intro",
    "Laser Stairs",
    "Dual Lasers",
    "Laser Over Goo",
    "Catapult Intro",
    "Trust Fling",
    "Pit Flings",
    "Fizzler Intro"
  ],
  "Chapter 3 The Return": [
    "Ceiling Catapult",
    "Ricochet",
    "Bridge Intro",
    "Bridge the Gap",
    "Turret Intro",
    "Laser Relays",
    "Turret Blocker",
    "Laser Vs. Turret",
    "Pull The Rug"
  ],
  "Chapter 4 The Surprise": ["Column Blocker", "Laser Chaining", "Triple Laser", "Jailbreak", "Escape"],
  "Chapter 5 The Escape": ["Turret Factory", "Turret Sabotage", "Neurotoxin Sabotage", "Tube Ride", "Core"],
  "Chapter 6 The Fall": ["Underground", "Cave Johnson", "Repulsion Intro", "Bomb Flings", "Crazy Box", "PotatOS"],
  "Chapter 7 The Reunion": ["Propulsion Intro", "Propulsion Flings", "Conversion Intro", "Three Gels"],
  "Chapter 8 The Itch": [
    "Test",
    "Funnel Intro",
    "Ceiling Button",
    "Wall Button",
    "Polarity",
    "Funnel Catch",
    "Stop The Box",
    "Laser Catapult",
    "Laser Platform",
    "Propulsion Catch",
    "Repulsion Polarity"
  ],
  "Chapter 9 The Part Where He Kills You": ["Finale 1", "Finale 2", "Finale 3", "Finale 4"],
  key: function (n) {
    return Object.keys(this)[n];
  }
};

function generate() {
  let hoofdstuk = getRandomObj(hoofdstukken);
  let result = `${hoofdstuk}: ${getRandomArr(hoofdstukken[hoofdstuk])} ${getRandomArr(catagories)}`;
  return result;
}

function getRandomArr(arr) {
  if (arr.length == 0) {
    return null;
  }
  return arr[Math.floor(Math.random() * arr.length)];
}
function getRandomObj(obj) {
  let l = Object.entries(obj).length;
  if (l == 0) {
    return null;
  }
  let rand = Math.floor(Math.random() * (l - 1));
  let result = obj.key(rand);
  return result;
}
