
const getAllProducts = (req, res) => {

  const allProducts = [
    {id: 1, name : 'Samsung TV', description: 'Samsung TV'}, 
    {id: 2, name : 'Samsung Mobile', description: 'Samsung Mobile'}, 
  ]

  // res.send(allProducts);
  res.render("products", {
    // allProducts : allProducts
    allProducts
  })
}

module.exports = {getAllProducts};

