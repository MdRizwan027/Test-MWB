import React, { useEffect, useState }  from "react";
import { GridOptionButton } from "@/components/atoms/Button";
import { Switch } from "@/components/atoms/Switch";
import { useProductListStyles } from "@/static/stylesheets/molecules";
import LogoContract from "@/static/icons/uploader-frame.png";
import { AppService } from "@/service/AllApiData.service";

// interface ProductListProps {
//   type?: "WholeSeller" | "Retailer";
// }

const ProductsList = (props:any) => {
  const classes = useProductListStyles();
  const data = [1, 2, 3, 4, 5, 6];
  // const data = [1, 2, 3, 4, 5, 6];
  const [getAllPrdList, setGetAllPrdList] = useState([]);
  const [iDS, setIDS] = useState(localStorage.getItem("IDS"));


  const getAllListss = async (iDS:any) => {
    const responseJson = await AppService.getAllBazarProductList(iDS);
    setGetAllPrdList(responseJson.data.results);
    // console.log("ecomprd", responseJson.data.results);
  };


  const getAllListssSearch = async () => {
    if(props.keys === ""){
    
    }else{
      const responseJson = await AppService.getAllBazarProductListSearch(iDS, props.keys);
    // setGetAllWholesellers(responseJson.data.results);
    console.log("ecomprdserd", responseJson.data);
    setGetAllPrdList(responseJson.data.results);
    
    }
  };

  useEffect(() => {
    console.log("ddd", props.keys);
      getAllListss(iDS);
      getAllListssSearch();
    }, [props.keys]);
  // const { type } = props;

  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Group Category</th>
          <th>Category</th>
          <th>Sub-Category</th>
          <th>Weight</th>
          <th>MRP</th>
          <th>Active/Inactive</th>
          <th></th>
        </tr>
        {getAllPrdList.map((item: any) => (
          <tr>
            <td>
              <div className="brandData">
                <img className="brandLogo" src={LogoContract} alt={"Logo"} />
                {item.product_name}
              </div>
            </td>
            <td>{item.brand}</td>
            <td>
              <div className="status">{item.group_category}</div>
            </td>
            <td>
              <div className="status">{item.category}</div>
            </td>
            <td>
              <div className="status">{item.sub_category}</div>
            </td>
            <td>{item.weight}</td>
            <td>{item.mrp}</td>
            <td>
              <div>
                <Switch SwitchProps={item.active} />
              </div>
            </td>
            <td>
              <GridOptionButton icon={"vertical-options"} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export { ProductsList };
