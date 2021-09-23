import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Cabaña",
      artist: "Juan Rios",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#F6BBB4", "#572446"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21647",
    },
    {
      name: "Vitamin D",
      artist: "fantompower",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#CBDFE0", "#DCBADB"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22790",
    },
    {
      name: "Trainspotting",
      artist: "Aarigod, Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#14231E", "#EEEAD1"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20120",
    },
    {
      name: "Opia",
      artist: "Toonorth",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#4E5369", "#A0ABFA"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17946",
    },
  ];
}
export default chillHop;
