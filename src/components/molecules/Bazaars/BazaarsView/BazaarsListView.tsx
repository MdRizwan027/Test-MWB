import React, { useEffect, useState } from "react";
import { useBazaarListStyles } from "@/static/stylesheets/molecules/";
import LogoEcBazaar from "@/static/icons/ic_bookmark.png";
import LogoDot from "@/static/icons/ic_dot.png";
import { AppService } from "../../../../service/AllApiData.service";
import { Pagination } from "@mui/lab";

const BazaarsListView = () => {
  const classes = useBazaarListStyles();
  const [getAllBazar, setGetAllBazar] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  const handlePageChange = (event:any, value:any) => {
    setCurrentPage(value);
    getAllLists(value);
    console.log(value);
  };
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = getAllBazar;

  const getAllLists = async (data:any) => {
    const responseJson = await AppService.getAllBazarList(data);
    setGetAllBazar(responseJson.data.results);
  };

  useEffect(() => {
    getAllLists(currentPage);
  }, []);


  return (
    <div className={classes.root}>
      <table>
        <tr>
          <th className="nameTitle">BAZAAR NAME</th>
          <th className="categoryTitle">GROUP CATEGORY</th>
          <th className="wholesellerTitle">WHOLESELLERS</th>
          <th className="agentTitle">AGENTS</th>
          <th className="statesTitle">STATES</th>
          <th className="revenewEarned">REVENUE EARNED</th>
          <th className="billsTitle">NO. OF BILLS</th>
          <th></th>
        </tr>
        {currentItems.map((item: any) => (
          <tr>
            <td>
              <div className="brandData">
                <img className="brandLogo" src={LogoEcBazaar} alt={"Logo"} />
                {item.bazaar_name}
              </div>
            </td>
            <td>Home and kichen appliances</td>
            <td> {item.wholesellers}</td>
            <td>{item.agents}</td>
            <td>{item.states}</td>
            <td>Rs. {item.earnings}</td>
            <td>{item.bills}</td>
            <td>
              <img src={LogoDot} alt={"Logo"} />
            </td>
          </tr>
        ))}
      </table>
      <div className="flex items-center justify-between pagination" style={{display:"flex"}}>
            <div className="text-[#84818A] text-sm font-medium">Show <span>{ITEMS_PER_PAGE}</span> from {getAllBazar.length} products</div>
        
           <Pagination count={10} page={currentPage} onChange={handlePageChange} />
          </div>
    </div>
  );
};

export { BazaarsListView };
