// Basic product data stored in a JavaScript object
battlepacks = [
  {
    id: 0,
    name: "Diamond Armor",
    images: [
      "https://www.minecraftskins.com/uploads/preview-skins/2024/05/05/bloxd-io-diamond-armor-22514594.png?v677",
      "https://www.minecraftskins.com/uploads/preview-skins/2024/05/02/bloxd-io-diamond-armor-22510162.png?v690",
      "https://www.minecraftskins.com/uploads/preview-skins/2024/05/05/bloxd-diamond-armor-22514550.png?v677",
    ],
    rating: `Minecraft is rated E10+.
      This means the game is suitable
      for players aged 10 and above,
      due to Mild fantasy violence
      and Interactive elements Parental
      discretion advised.`,
    price: "$1.00 USD ",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
  },

  {
    id: 1,
    name: "Gold Armor",
    images: [
      "https://www.minecraftskins.com/uploads/preview-skins/2023/08/20/bloxd-gold-armour-21910505.png?v637",
      "https://www.minecraftskins.com/uploads/preview-skins/2021/06/04/guy-in-gold-armor-18018479.png?v694",
      "https://www.minecraftskins.com/uploads/preview-skins/2013/06/20/skin_20130620211049122625both.png?v694",
    ],
    rating: `Minecraft is rated E10+.
      This means the game is suitable
      for players aged 10 and above,
      due to Mild fantasy violence
      and Interactive elements Parental
      discretion advised.`,
    price: "$1.00 USD ",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
  },
  {
    id: 2,
    name: "Iron Armor",
    images: [
      "https://www.minecraftskins.com/uploads/preview-skins/2023/08/21/bloxd-iron-armour-21913591.png?v675",
      "https://www.minecraftskins.com/uploads/preview-skins/2020/09/03/iron-armor-steve-15205016.png?v694",
      "https://www.minecraftskins.com/uploads/preview-skins/2021/08/26/man-with-an-iron-armor-18760641.png?v678",
    ],
    rating: `Minecraft is rated E10+.
      This means the game is suitable
      for players aged 10 and above,
      due to Mild fantasy violence
      and Interactive elements Parental
      discretion advised.`,
    price: "$1.00 USD ",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
  },
  {
    id: 3,
    name: "Wood Armor",
    images: [
      "https://www.minecraftskins.com/uploads/preview-skins/2023/08/21/bloxd-wood-armour-21913634.png?v675",
      "https://www.minecraftskins.com/uploads/preview-skins/2024/09/03/leather-armor-steve--back-to-basics--22747146.png?v678",
      "https://www.minecraftskins.com/uploads/preview-skins/2021/07/15/my-last-skin-becose-people-coppy-me-18404141.png?v694",
    ],
    rating: `Bloxd.io is rated E4+.
      This means the game is suitable
      for players aged 4 and above,
      due to less fantasy violence
      and Interactive education in building by exploring`,
    price: "$1.00 USD ",
    logo: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub511.app51240/logo/bloxd-io.png",
  },
];

// Get product ID from the URL
const params = new URLSearchParams(window.location.search);
const battlepackid = params.get("id");
// Load product details if the ID is found
if (battlepackid && battlepacks[battlepackid]) {
  const battlepack = battlepacks[battlepackid];
  document.getElementById("gamename").textContent = battlepack.name;
  document.getElementById("productPrice").textContent = battlepack.price;
  document.getElementById("img1").src = battlepack.images[0];
  document.getElementById("img2").src = battlepack.images[1];
  document.getElementById("img3").src = battlepack.images[2];
}
