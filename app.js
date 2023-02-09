const express = require("express");
const app = express();
const port = 3000;
const { Movie, Author, Actor } = require("./models/index");

app.use(express.json());

// READ route
app.get("/movie", async (req, res) => {
  try {
    const getProduct = await Movie.findAll();

    res.status(200).json({
      data: getProduct,
    });
  } catch (error) {
    throw error;
  }
});

app.get("/actor", async (req, res) => {
  try {
    const getActor = await Actor.findAll();

    res.status(200).json({
      data: getActor,
    });
  } catch (error) {
    throw error;
  }
});

app.get("/author", async (req, res) => {
  try {
    const getAuthor = await Author.findAll();

    res.status(200).json({
      data: getAuthor,
    });
  } catch (error) {
    throw error;
  }
});

// CREATE route
app.post("/author", async (req, res) => {
  try {
    const { name, nationality, age } = req.body;

    await Author.create({ name, nationality, age });

    res.status(201).json({
      message: "Author create succesfully",
    });
  } catch (error) {
    throw error;
  }
});

// DELETE route
app.delete("/author/:id", async (req, res) => {
  try {
    let id = req.params.id;

    await Author.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({
      message: `Author #${id} has been deleted`,
    });
  } catch (error) {
    throw error;
  }
});

// UPDATE route
app.put("/movie/:id", async (req, res) => {
  const { id } = req.params;
  const { genre } = req.body;

  await Movie.update(
    {
      genre,
    },
    {
      where: {
        id,
      },
    }
  );

  res.status(200).json({
    message: "Update Success",
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
