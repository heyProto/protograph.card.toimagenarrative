var SSR = require('./dist/0.0.1/ssr-card.min.js')
var state = {
    "dataJSON": {
        "data": {
            "img_url": "https://images.indianexpress.com/2015/11/parekh-main.jpg",
            "caption": "Sample Caption",
            "caption_url": "#"
        }
    }
}

var state = {
    "dataJSON": {
        "data": {
            "title": "Jaipur3",
            "img_url": "https://d1mlpll2wuxstr.cloudfront.net/images/TheWire/4b0121672ac75094/5692.jpeg",
            "caption": "A sewer jetting machine clearing a sewer line in Jaipur\u2019s Sindhi Camp area. Image credit: Shruti Jain",
            "caption_url": "#",
        }
    }
}
let x = SSR.render(state);

console.log(x.content)