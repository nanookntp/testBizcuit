// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./component/Input/index";
import React, { useState, useEffect } from "react";
const App = () => {
  const [beer, setBeer] = useState({});
  const [err, setErr] = useState(false);
  const [beers, setBeers] = useState([]);
  const [indexBeer, setIndexBeer] = useState(0);
  const [isLoader, setloader] = useState(false);
  const [mode, setMode] = useState(false);

  async function fetchData() {
    setloader(true);
    let res = await fetch("https://random-data-api.com/api/beer/random_beer");
    if (res.status === 200) {
      res
        .json()
        .then((data) => {
          setBeers([...beers, data]);
          setBeer(data);
          setloader(false);
        })
        .catch((res) => setErr(err));
    }
  }

  useEffect(() => {
    // console.log(props);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function genDataForm() {
    let formData = [];
    if (beers.length > 0) {
      //setloader(false)
      for (const [key, value] of Object.entries(beer)) {
        formData.push(
          <div className="col-6" key={key}>
            <Input data={{ key: key, value: value }}></Input>
          </div>
        );
      }
      return formData.map((e) => {
        return e;
      });
    }
    return;
  }
  const next = () => {
    if (beers[indexBeer + 1] !== undefined) {
      setBeer(beers[indexBeer + 1]);
      setIndexBeer(indexBeer + 1);
    } else {
      fetchData();
      setIndexBeer(indexBeer + 1);
    }
  };
  const previous = () => {
    if (beers[indexBeer - 1] !== undefined) {
      setBeer(beers[indexBeer - 1]);
      setIndexBeer(indexBeer - 1);
    } else {
      console.log("Not found");
    }
  };
  const setSwitch = () => {
    setMode(!mode);
    console.log(mode);
  };
  return (
    <div
      className={
        mode
          ? "p-2 text-white bg-opacity-25 bg-color-dark"
          : "p-2 text-dark bg-opacity-25 bg-color-light"
      }
    >
      <div className="container overflow-hidden p-5">
        {!isLoader && (
          <>
            <div className="card-customs pb-3">
              <div
                className={
                  mode
                    ? "d-flex justify-content-between card-header-custom-dark"
                    : "d-flex justify-content-between card-header-custom-light"
                }
              >
                <div>Beers</div>
                <div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onChange={(e) => setSwitch()}
                      checked={mode}
                    />
                    <label className="form-check-label">Dark Mode</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gy-3">{genDataForm()}</div>
            <div className="row mt-4">
              <div className="col-2 d-grid gap-2">
                <button
                  className="btn btn btn-secondary btn-sm"
                  type="button"
                  onClick={() => previous()}
                >
                  Previous
                </button>
              </div>
              <div className="col-8"></div>
              <div className="col-2 d-grid gap-2">
                <button
                  type="button"
                  className="btn btn btn-primary btn-sm"
                  onClick={() => next()}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
        {isLoader && (
          <>
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
