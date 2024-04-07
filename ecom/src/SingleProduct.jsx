import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { add } from "./Stores/cartSlice";
const SingleProduct = () => {
  const [product, setProducts] = useState([]);

  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const res = await fetch(`http://localhost:5000/product/${params.id}`);
    const product = await res.json();
    setProducts(product);
    console.log(product);
  };
  const { _id, image, name, price } = product;

  return (
    <>
      <section>
        <div className="container">
          <div className="display">
            <div className="box">
              <div className="image">
                {" "}
                <img src={image} alt="" />
              </div>
            </div>
            <div className="box">
              <div style={{ marginBottom: "20px" }}>
                <h2> {name}</h2>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <p style={{ fontSize: "17px", fontWeight: "500" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae perspiciatis minus impedit optio non, maiores ullam
                  vero fugiat atque exercitationem cum dolore vel suscipit vitae
                  explicabo blanditiis similique, veniam molestias asperiores
                  porro eum pariatur tempora sapiente quis! Nobis et,
                  perspiciatis deleniti ratione consequatur illo perferendis
                  magnam repudiandae debitis sit in totam id deserunt recusandae
                  cumque aut tempora eveniet ad asperiores harum magni odio
                  accusantium sunt illum. Quidem, est? Sequi tempore quaerat
                  voluptates impedit necessitatibus magnam quis dignissimos
                  totam maxime nisi vero et aspernatur, praesentium illum optio,
                  atque eaque quas reiciendis repellat recusandae laborum? Rerum
                  amet nam molestiae architecto? Numquam similique consectetur
                  blanditiis facere laborum natus optio eius. Eius consequuntur
                  dolorum nulla error, odit facere, aliquid quisquam ipsum ab
                  amet hic repellat, tempora exercitationem doloribus provident
                  commodi sint eaque ex ipsa! Numquam mollitia neque porro, rem
                  enim possimus ratione aut, expedita quisquam iste deleniti
                  quo, vitae officia. Sunt, labore corporis. Ab ipsa veritatis
                  eos fugiat cupiditate ea nostrum minima soluta et dolorum. At
                  rerum perspiciatis enim, voluptatum libero ipsa laudantium
                  placeat totam sequi ipsum quisquam quasi architecto quas animi
                  debitis illo saepe explicabo ducimus quibusdam in maiores
                  odio! Architecto, placeat animi laudantium voluptas cumque
                  repellat commodi corporis quis optio, iure quaerat!
                </p>{" "}
              </div>
              <div>
                <button
                  style={{ marginBottom: "20px" }}
                  onClick={() => dispatch(add({ _id, image, name, price }))}
                >
                  Add To Cart
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
