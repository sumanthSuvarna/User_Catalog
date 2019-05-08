const products = [
    {
      "id": "1",
      "type": "list_ad",
      "attributes": {
        "title": "Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty) + Screen Protector",
        "price": "RM 1,289",
        "condition": "Brand new in the box",
        "location": "Bangsar south, Kuala Lumpur",
        "seller_name": "Takeshi Nakamura",
        "seller_type": "Private seller",
        "phone": "017 6895xxx",
        "description": "Do what you never thought possible with Nintendo Switch. Go from single- and multi-player thrills at home, to playing the same title wherever and whenever you want. Simply attach the Joy-Con controllers to the bright, hi-def display and you’re all set. Or detach the controllers and give one to a friend for some on-the-go, local multiplayer action.\\n\\nIntroducing Nintendo Switch! In addition to providing single and multiplayer thrills at home, the Nintendo Switch system also enables gamers to play the same title wherever, whenever and with whomever they choose. The mobility of a handheld is now added to the power of a home gaming system to enable unprecedented new video game play styles.\\n\\nWhat is in the box:\\n1 x Nintendo Switch console\\n1 x Nintendo Switch dock\\n1 x Joy-Con (L) and Joy-Con (R)(Blue and red)\\n1 x Two Joy-Con strap accessories\\n1 x One Joy-Con grip\\n1 x HDMI cable\\n1 x Nintendo Switch AC adapter\\nConsole is 1 year warranty by Maxsoft Malaysia .",
        "links": {
          "self": "/view/1.html",
          "image": "/image/1.jpg"
        }
      }
    },
    {
      "id": "2",
      "type": "list_ad",
      "attributes": {
        "title": "Nintendo Switch grey Joy-Con",
        "price": "RM 1,200",
        "condition": "Brand new in the box",
        "location": "Bangsar south, Kuala Lumpur",
        "seller_name": "Takeshi Nakamura",
        "seller_type": "Private seller",
        "phone": "017 6895xxx",
        "description": "Do what you never thought possible with Nintendo Switch. Go from single- and multi-player thrills at home, to playing the same title wherever and whenever you want. Simply attach the Joy-Con controllers to the bright, hi-def display and you’re all set. Or detach the controllers and give one to a friend for some on-the-go, local multiplayer action.\\n\\nIntroducing Nintendo Switch! In addition to providing single and multiplayer thrills at home, the Nintendo Switch system also enables gamers to play the same title wherever, whenever and with whomever they choose. The mobility of a handheld is now added to the power of a home gaming system to enable unprecedented new video game play styles.\\n\\nWhat is in the box:\\n1 x Nintendo Switch console\\n1 x Nintendo Switch dock\\n1 x Joy-Con (L) and Joy-Con (R)(Blue and red)\\n1 x Two Joy-Con strap accessories\\n1 x One Joy-Con grip\\n1 x HDMI cable\\n1 x Nintendo Switch AC adapter\\nConsole is 1 year warranty by Maxsoft Malaysia .",
        "links": {
          "self": "/view/2.html",
          "image": "/image/2.jpg"
        }
      }
    }
  ]

  class ProductListApi {
    static getAllProducts() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], products));
        }, delay);
      });
    }
  }

  export default ProductListApi;