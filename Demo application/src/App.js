// eslint-disable-next-line
import react, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { fetchAssets } from './Utils/AssetFetcher';

function App() {
  const [addToCartStatus, setAddToCartStatus] = useState(true);
  let event = new Event("items_added_to_cart", { 
    bubbles: true
  });

  const addToCart = () => {
    setAddToCartStatus(false);

    window.dispatchEvent(event);

    // Remove sucess message back to add to cart
    setTimeout( ()=> {
      setAddToCartStatus(true);
    }, 2000)
  }

  const [ assetsFetched, setAssetsFetched ] = useState(false);

  useEffect(() => {
    if(!assetsFetched) {
      fetchAssets();
      setAssetsFetched(true);
    }
  }, [assetsFetched]);

  return (
    <div className="App">
      <article className="page">
        <section className="fw-section padding-top-3x padding-bottom-2x">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-5 padding-right-1x" style={{ paddingRight: '30px' }}>
                <div className="cv-box cv-tertiary-bg" style={{ backgroundSize: 'cover', backgroundImage: "url('')" }}>
                  <div className="cv-box-container">
                    <span className="text-light">Micro frontend</span>
                    <span className="cv-underline"></span>
                    <h2 className="text-light">
                      Micro frontend is a way of decomposing a frontend app into individual and more manageable fragments that can be built,
                      maintained and released by different teams.
                    </h2>
                  </div>
                  
                </div>
              </div>
    
              <div className="col-lg-7 col-md-7 col-sm-6" style={{paddingLeft: "10%"}}>
                <h2 className="block-title text-dark text-left" style={{ padding: '100px 0 0 0' }}>
                  Benefits
                </h2>
                <ul style={{listStyle: "square"}}>
                  <li>Independent development</li>
                  <li>Simplified maintenance of codebases</li>
                  <li>Way simpler to update</li>
                  <li>Independent deployments/releases</li>
                  <li>Bonus: No more dev battles over release of new features :)</li>
                </ul>
                <div className="padding-bottom-2x hidden-xs"></div>
              </div>
            </div>
          </div>
          <button className={ addToCartStatus ? "add-to-cart" : 'added' } onClick={addToCart}> 
            { addToCartStatus ? "Add To Cart" : 'Success' }
          </button>

        </section>
      </article>

    </div>
  );
}

export default App;

