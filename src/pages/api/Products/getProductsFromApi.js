export default async function handler(req, res) {
    console.log("2ripueuoerburverveburvbuoe")
    if (req.method === "POST") {
        //"{\"price\": [500, 1000], \"category\": 1, \"tag\": [\"clothing\", \"sports\"]}"
        // const obj = {
        //     "category": "For Them",
        //     "tags": [
        //         "Technology",
        //         "Accessories",
        //         "Decoration Pieces"
        //     ],
        //     "price": [
        //         0,
        //         1000
        //     ]
        // }
       const{items} = req.body;
       const obj = items
       console.log("obj",obj)
       const jsonString = `{"price": ${JSON.stringify(obj.price)}, "category": ${JSON.stringify(obj.category)}, "tag": ${JSON.stringify(obj.tags)}}`;
       const d = await JSON.stringify(jsonString)
        //console.log(d)
        // const{items} = req.body;
        const options = {
            mode: 'no-cors',
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({
            //     "category": 1,
            //     "tag": [
            //         "technology",
            //         "accessories"
            //     ],
            //     "price": [0,1000]
            // })
            body: d
        };
        await fetch(`http://irucs.pythonanywhere.com/`, options)
        .then(async response => await response.json())
        .then(async jsonData => {
            // res.status(200).json({ products });
            // console.log(jsonData.recommended_products)
            const temp = jsonData.recommended_products
            res.status(200).json({ products:temp });
            // console.log("*********************puoerfhq************",jsonData.recommended_products)
            // setData(jsonData.products);
            // setIsLoading(false);
        })
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }