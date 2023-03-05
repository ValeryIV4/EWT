const shirts = [{
    "name": "Beep Boop",
    "description": "Once upon a time, a mighty guide guarded the intersection of Forbes and Morewood, and would dutifully direct distracted college students when it was safe to cross the street. Its voice was soothing, strong, and steady. Its name was beep boop.",
    "price": "$19.99",
    "colors": {
        "white": {
            "front": "beepboop-white-front.png",
            "back": "beepboop-white-back.png"
        },
        "blue": {
            "front": "beepboop-blue-front.png",
            "back": "beepboop-blue-back.png"
        },
        "pink": {
            "front": "beepboop-pink-front.png",
            "back": "beepboop-pink-back.png"
        },
        "red": {
            "front": "beepboop-red-front.png",
            "back": "beepboop-red-back.png"
        }
    },
    "default": {
        "front": "default-m-front.png",
        "back": "default-m-back.png"
    }
},
{
    "name": "Car",
    "description": "As you move in to campus, one of the first memories so many students have is driving up to their dorm, unloading their bags, and moving in. How do they arrive to campus? By car, of course!",
    "price": "$10.99",
    "colors": {
        "white": {
            "front": "car-white-front.png",
            "back": "car-white-back.png"
        },
        "blue": {
            "front": "car-blue-front.png",
            "back": "car-blue-back.png"
        },
        "green": {
            "front": "car-green-front.png",
            "back": "car-green-back.png"
        },
        "yellow": {
            "front": "car-yellow-front.png",
            "back": "car-yellow-back.png"
        },
        "red": {
            "front": "car-red-front.png",
            "back": "car-red-back.png"
        }
    },
    "default": {
        "front": "default-w-front.png",
        "back": "default-w-back.png"
    }
},
{
    "name": "Forever Plaid",
    "price": "$13.99",
    "description": "Proudly wear your tartan plaid as a patch on your front shirt pocket. And on the back, ask the important question that all CMU students should know the answer to: got plaid?",
    "colors": {
        "white": {
            "front": "plaid-white-front.png",
            "back": "plaid-white-back.png"
        },
        "pink": {
            "front": "plaid-pink-front.png",
            "back": "plaid-pink-back.png"
        }
    },
    "default": {
        "front": "default-w-front.png",
        "back": "default-w-back.png"
    }
},
{
    "name": "BSUIR",
    "description": "BSUIR mission is to train engineers and scientists capable of generating and implementing innovative ideas, creating competitive high technology products in the spheres of computer science and electronics.",
    "price": "$6.99",
    "colors": {
        "white": {
            "front": "bsuir-white-front.png",
            "back": "bsuir-white-back.png"
        }
    },
    "default": {
        "front": "default-m-front.png",
        "back": "default-m-back.png"
    }
},
{
    "name": "Beep Boop",
    "description": "Once upon a time, a mighty guide guarded the intersection of Forbes and Morewood, and would dutifully direct distracted college students when it was safe to cross the street. Its voice was soothing, strong, and steady. Its name was beep boop.",
    "price": "$19.99",
    "colors": {
        "white": {
            "front": "beepboop-white-front.png",
            "back": "beepboop-white-back.png"
        },
        "blue": {
            "front": "beepboop-blue-front.png",
            "back": "beepboop-blue-back.png"
        },
        "pink": {
            "front": "beepboop-pink-front.png",
            "back": "beepboop-pink-back.png"
        },
        "red": {
            "front": "beepboop-red-front.png",
            "back": "beepboop-red-back.png"
        }
    },
    "default": {
        "front": "default-m-front.png",
        "back": "default-m-back.png"
    }
},
{
    "name": "BSUIR",
    "description": "BSUIR mission is to train engineers and scientists capable of generating and implementing innovative ideas, creating competitive high technology products in the spheres of computer science and electronics.",
    "price": "$6.99",
    "colors": {
        "white": {
            "front": "bsuir-white-front.png",
            "back": "bsuir-white-back.png"
        }
    },
    "default": {
        "front": "default-m-front.png",
        "back": "default-m-back.png"
    }
},
];

let content = document.querySelector(".content");

function build_goods_list(){

    shirts.forEach(shirt => {
        let card_container = document.createElement("div");
        card_container.classList.add('card_container');

        let card_image = document.createElement("img");
        card_image.classList.add('card_image');
        card_image.src = shirt.colors.white?.front

        let card_header = document.createElement("h3");
        card_header.classList.add('card_header');
        card_header.innerText = shirt.name

        let card_available_count = document.createElement("p")
        card_available_count.classList.add('card_available_count');
        card_available_count.innerText = string_available(Object.keys(shirt.colors).length)

        let quick_view_button = document.createElement("button");
        quick_view_button.classList.add('quick_view_button');
        quick_view_button.innerText = 'Quick View'
        quick_view_button.setAttribute("type","submit")
        

        card_container.appendChild(card_image)
        card_container.appendChild(card_header)
        card_container.appendChild(card_available_count)
        card_container.appendChild(quick_view_button)
        content.appendChild(card_container)
    });
}

function string_available(quantity) {
    return `Available in ${quantity} colors`
}

build_goods_list();

