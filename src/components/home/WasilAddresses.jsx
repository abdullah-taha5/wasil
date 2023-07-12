import React, { useEffect } from "react";
import { SRC_IMG_API } from "../../apis/apis";

import { getBranchs } from "../../redux/features/branchsSlice";
import { useDispatch, useSelector } from "react-redux";

function WasilAddresses() {
  const branchs = useSelector((state) => state.branchs.branchs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBranchs());
  }, [branchs]);
  return (
    <section className="Addresses">
      <div className="container">
        <div className="all-head" data-aos="fade-up" data-aos-duration="2000">
          <h4>
            <span>WASIL</span>
            Addresses
          </h4>
          <p>
            Get your own personal address suite that ou can use freely to shop
            from the most famous websites in <span> USA, Turkey and UAE.</span>
          </p>
        </div>
        <div className="row" data-aos="fade-down" data-aos-duration="1000">
          {branchs.map((branch) => (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="box-addres">
                <img src={`${SRC_IMG_API}/${branch.icon}`} alt="branch icon" loading="lazy"/>
                <h4>{branch.name}</h4>
                <p>{branch.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WasilAddresses;