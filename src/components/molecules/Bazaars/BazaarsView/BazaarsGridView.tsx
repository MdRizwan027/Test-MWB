import React, { useEffect, useState } from "react";
import { BazaarCard } from "@/components/molecules/Bazaars";
import { Grid, Pagination } from "@mui/material";
import { useBazaarCardStyles } from "@/static/stylesheets/molecules";
import { AppService } from "../../../../service/AllApiData.service";
import { useNavigate } from "react-router-dom";

const BazaarsGridView = () => {
  const classes = useBazaarCardStyles();
  const navigate = useNavigate();
  const [getAllBazar, setGetAllBazar] = useState([]);
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  const handlePageChange = (event:any, value:any) => {
    setCurrentPage(value);
    getAllLists(value);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = getAllBazar;
  const getAllLists = async (data:any) => {
    const responseJson = await AppService.getAllBazarList(data);
    setGetAllBazar(responseJson.data.results);
    // console.log("ecomprd", responseJson.data.results);
  };
  const getViaID = async (ID:any) =>{
    // console.log(ID.id);
    localStorage.setItem("IDS", ID.id);
    navigate("/electronicsbazaar");
    
  }
  

  useEffect(() => {
    getAllLists(currentPage);
  }, []);
  return (
    <>
    {/* {console.log("pr", getAllBazar)} */}
      <div className={classes.root}>
        <Grid container spacing={2}>
        {getAllBazar===undefined ? <></>:getAllBazar.map((addr:any) =>(   
            
        <Grid item xs={4}>
    <div
      className={classes.root}
      onClick={() => getViaID(addr)}
    >
      <div className={classes.container}>
        <div className={classes.bazaarContainer}>
          <div className={classes.bazaarCard}>
            <img className="brandLogo" src={addr.bazaar_image} alt={"Logo"} />
            <p className="headTitle">{addr.bazaar_name}</p>
            <p className="headSubtitle">{addr.bazaar_description}</p>
          </div>

          <div className={classes.wholeSellerContainer}>
            <div className={classes.wholesellerCard}>
              <div className="container">
                <p className="headTitle">{addr.wholesellers}</p>
                <p className="headSubtitle">Wholesellers</p>
              </div>

              <div className="container">
                <p className="headTitle">{addr.agents}</p>
                <p className="headSubtitle">Agents</p>
              </div>

              <div className="container">
                <p className="headTitle">{addr.bazaar_state}</p>
                <p className="headSubtitle">States</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.revinerContainer}>
          <div className={classes.reveniewCard}>
            <div className="container">
              <div>
                <p className="headTitle">Total Revenue Earned</p>
                <p className="headSubtitle">{addr.earnings}</p>
              </div>

              <div>
                <p className="headTitle">No. of Bills</p>
                <p className="headSubtitle">{addr.bills}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </Grid>
        ))}
         <div className="flex items-center justify-between pagination" style={{display:"flex",width:'100%'}}>
            <div className="text-[#84818A] text-sm font-medium">Show <span>{ITEMS_PER_PAGE}</span> from {getAllBazar.length} products</div>
        
           <Pagination count={10} page={currentPage} onChange={handlePageChange} />
          </div>
            
         
        </Grid>
      </div>
    </>
  );
};

export { BazaarsGridView };
