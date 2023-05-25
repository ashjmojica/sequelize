
const express = require("express");
const app = express();
const express = require("express")
const { Customers, Post, User, Transactions } = require("./models/index")
const PORT = 3001;
const {Op} = require("sequelize")

// GET ALL CUSTOMERS
app.get("/get_all_customers", async (req,res) => {
    const customers = await Customers.findAll()
res.send(customers)
});

app.get("/get_customer/:id", async (req, res) => {
  const {id} = req.params;
    const customer = await Customers.findAll({
    where: {
        id: id,
    },
});
  res.send(customer);
});

app.get("/get_all_transactions", async (req, res) => {
  const transactions = await Transactions.findAll();
  res.send(transactions);
});

//delete customer by id
app.delete("/delete_customer/:id", async (req, res) => {
  const { id } = req.params;
  const deleteCustomer = await Customer.destroy({
    where: {
      id: id,
    },
  });
  res.send(deleteCustomer);
});

//all customers that first name that starts with a "J"
app.get("/starts_with_j_savings", async (req, res) => {
  const { id } = req.params;
  const customer = await Customers.update(
    {
        accountType: "Savings",
    },
    {
    where: {
        name: {
      [Op.startsWith]: "J",
    },
  },
},
  );
  res.send(customer);
});

app.get("/get_post_by_user", async (req, res) => {
  const post = await Post.findAll({
    attributes: ["title", "content"],
    include: [
      {model: User,
        attributes: ["name", "email"],
      },
    ],
  });
  res.send(post);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));