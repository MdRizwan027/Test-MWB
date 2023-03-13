import React, { useState } from "react";
import { useSubCategoriesStyles } from "@/static/stylesheets/screens/subcategoriesStyles";
import MuiTreeView from "@/components/atoms/MuiTreeView/MuiTreeView";
import BulkIcon from "@/static/svg/ic_bulkuploads.svg";
import { Grid, TextField } from "@mui/material";
import UploaderFrame from "@/static/icons/uploader-frame.png";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import LogoAdd from "@/static/icons/ic_add.png";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { TreeView, TreeItem } from "@mui/lab";
import { Alert } from "@/alert/Alert";
import { AppService } from "@/service/AllApiData.service";

const SubCategories = (props: {
  formData: any;
  setFormData: (arg0: any) => void;
}) => {
  const classes = useSubCategoriesStyles();
  const [masterType, setMasterType] = useState("Regional Wholeseller");
  const [node, setNode] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const event = new Date();
  const [addData, setAddData] = React.useState({
    product_name: "",
    product_description: "test",
    product_active: true,
    product_brand_name:"",
    product_unit: 1,
    product_total_mrp: "",
    product_per_unit_weight: 1,
    product_mrp: "",
    product_gst_no:"" ,
    product_hsn_code:"" ,
    product_upload_front_image: null,
    product_upload_back_image: null,
    product_upload_mrp_label_image: null,
    product_added_date: event.toString(),
    product_updated_date: event.toString(),
    product_subcategory: props.formData.bazaar_subcategory.join(),
    product_updated_by: 2
  });

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };
  // const handleSelectedItems = (event:any, nodeId:any) => {
  //   // console.log(event.target.value);
  //   setNode(nodeId);
  // }

  const [selectedImage, setSelectedImage] = useState();
  const imageChange = (e:any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImage(e.target.files[0]);
    }
  };
  const [selectedImage2, setSelectedImage2] = useState();
  const imageChange2 = (e:any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImage2(e.target.files[0]);
    }
  };
  const [selectedImage3, setSelectedImage3] = useState();
  const imageChange3 = (e:any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImage3(e.target.files[0]);
    }
  };

  const handleChange = (event: {
    preventDefault(): unknown; target: { name: any; value: any; }; 
}) => {
    event.preventDefault();
    setAddData({ ...addData, [event.target.name]: [event.target.value] });
    // props.setFormData({
    //   ...props.formData,
    //   bazaar_product: [contactInfo],
    // });
  };


  const [ListGroups, setListGroups] = useState([]);
  const [IDS, setIDS] = React.useState([]);
  const [HideTable, setHideTable] = React.useState(false);
  const [firstTableHide, setFirstTableHide] = React.useState(false);
  
  
  
  const detailIB = async (ID:any) =>{
    // setAddData({ ...addData, product_subcategory: ID });
  const responseJson = await AppService.detailPrdCate(ID);
  setIDS(responseJson.data);
  console.log(responseJson.data);
  setFirstTableHide(true);
  setHideTable(false);
  // Alert("save successfully");
  }
  
    const [inputFields, setInputFields] = useState([{
      fullName:'',
      image:'',
  } ]);
  
  const addInputField = ()=>{
    setIDS([]);
      setHideTable(true);
      setFirstTableHide(false);
      
    
  }
  const removeInputFields = (index: number)=>{
      const rows = [...inputFields];
      rows.splice(index, 1);
      setInputFields(rows);
  }
  // const handleChange = (index: string | number, evnt: React.ChangeEvent<HTMLInputElement>)=>{
  
  // const { name, value } = evnt.target;
  // const list = [...inputFields];
  // // list[index][name] = value
  // console.log(list);
  // setInputFields(list);
  // // props.setFormData({
  // //   ...props.formData,
  // //   bazaar_gorup_category: list,
  // // });
  // }
  
  
  // const [selectedImage, setSelectedImage] = useState();
  // const [selected, setSelected] = React.useState([]);
  // const [node, setNode] = React.useState("");
  
  // const imageChange = (e:any) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     console.log(e.target.files[0]);
  //     setSelectedImage(e.target.files[0]);
  //   }
  // };
  
  const dataSave = (e:any) => {
    // console.log(e.target.value);
    // props.setFormData({
    //   ...props.formData,
    //   bazaar_gorup_category: [selectedImage, e.target.value],
    // });
  }
  
  
  const handleSelectedItems = (event:any, nodeId:any) => {
    console.log(nodeId);
    setNode(nodeId);
    detailIB(nodeId);
    setHideTable(false);
    setFirstTableHide(true);
    props.setFormData({
      ...props.formData,
      bazaar_product: [nodeId],
    });
  }
  
  const getAllLists = async () => {
      const responseJson = await AppService.listPrdproducts();
      // console.log(responseJson.data.bazaar);
      setListGroups(responseJson.data.results);
     
    };
  
    const deletes = async(id:any)=>{
      setFirstTableHide(false);
      const responseJson = await AppService.deletePrdCate(id);
      console.log(responseJson.data);
      Alert("delete successfully");
      getAllLists();
  
    }
    const edit = async(id:any)=>{
      setFirstTableHide(false);
      const responseJson = await AppService.updatePrdCate(id, addData);
      console.log(responseJson.data);
      Alert("update successfully");
      getAllLists();
    }
  
    
  
  
  React.useEffect(() => {
    // console.log(formData);
    getAllLists();
    
      
      }, []);
  
      const hideTabs = async (e:any) =>{
        setFirstTableHide(true);
        setHideTable(false);
      }
  
      const handleChanges = (event:any) => {
        event.preventDefault();
        setAddData({ ...addData, [event.target.name]: event.target.value });
        if (event.target.files && event.target.files.length > 0) {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }
        // props.setFormData({
        //   ...props.formData,
        //   bazaar_product: [contactInfo],
        // });
     
      };
  
  
      const save = async () =>{
        const responseJson = await AppService.addPrdCate(addData);
        // setIDS(responseJson.data);
        // console.log(responseJson.data);
        Alert("AddNew successfully");
        getAllLists();
        setHideTable(false);
        }

  return (
    <div className={classes.root}>
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={3}>
          <TreeView
        className="treefont"
        aria-label="file system navigator"
        selected={selected}
        // onNodeToggle={handleToggle}
        onNodeSelect={handleSelectedItems}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          height: 300,
          flexGrow: 1,
          maxWidth: 300,
          overflowY: "auto",
          border: 2,
          padding: "30px",
          borderColor: "#E1E1E1",
          borderRadius: "6px",
        }}
      >
        {ListGroups.map((items:any, index)=>(
        <TreeItem nodeId={items.id} label={items.product_name}>
          {/* <TreeItem nodeId={items.id} label={items.parent_category_name} /> */}
        </TreeItem>
        ))}
       
      </TreeView>
          </Grid>
          <Grid item xs={9}>
            <div className="rightContainer">
              <div className="addButton flex justify-items-center items-center">
                <img src={BulkIcon} alt={"Logo"} />
                <p>Bulk Upload</p>
              </div>
            </div>
            {[IDS].map((items:any)=>(
            <div className="border-2 p-5 mt-3 rounded-md " hidden={!firstTableHide}>
              <div className="flex gap-5">
                <div className="uploadCard">
                  <div className="uploadIcon px-3" style={{position:"relative"}}>
                    

                    {selectedImage3 ===undefined ? <img src={UploaderFrame} alt={"Uploader"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage3)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '130px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange3}  name="image"  />
                  </div>

                  <div className="content">
                    <div className={"title"}>Upload front Image</div>
                    <div className={"subtitle"}>
                      Image can be size of 512 PX by 512 PX Only
                    </div>
                  </div>
                </div>

                <div className="uploadCard">
                  <div className="uploadIcon px-3" style={{position:"relative"}}>
                    

                    {selectedImage ===undefined ? <img src={UploaderFrame} alt={"Uploader"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '130px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange}  name="image"  />
                  </div>

                  <div className="content">
                    <div className={"title"}>Upload front Image</div>
                    <div className={"subtitle"}>
                      Image can be size of 512 PX by 512 PX Only
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 py-5">
                <div className="uploadCard">
                  <div className="uploadIcon px-3" style={{position:"relative"}}>
                    

                    {selectedImage2 ===undefined ? <img src={UploaderFrame} alt={"Uploader"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage2)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '130px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange2}  name="image"  />
                  </div>

                  <div className="content">
                    <div className={"title"}>Upload front Image</div>
                    <div className={"subtitle"}>
                      Image can be size of 512 PX by 512 PX Only
                    </div>
                  </div>
                </div>
              </div>

              <div className="field">
                <div className="bazaarField">
                  <div>
                    <p className="commonSelectText">Product Name</p>
                    <TextField onChange={handleChange} name="product_name" value={items.product_name}
           variant="standard" fullWidth={true} />
                  </div>

                  <div>
                    <p className="commonSelectText">Brand Name</p>
                    <TextField onChange={handleChange} name="product_brand_name"
            variant="standard" fullWidth={true}  value={items.product_brand_name}/>
                  </div>
                </div>

                <div className="stateField">
                  <div>
                    <p className="commonSelectText">Total Weight</p>
                    <div className="flex gap-4">
                      <div>
                        <TextField onChange={handleChange} name="product_total_mrp"
            variant="standard" fullWidth={true}  value={items.product_total_weight} />
                      </div>
                      <div>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType} 
                        >
                          <MenuItem value={"Regional Wholeseller"}>Kg</MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            Kg
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="commonSelectText">No. of Units</p>
                    <div className="flex gap-4">
                      <div>
                        <TextField onChange={handleChange} value={items.product_unit} name="product_unit" variant="standard" fullWidth={true} />
                      </div>
                      <div>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType}
                        >
                          <MenuItem value={"Regional Wholeseller"}>
                            Unit
                          </MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            Unit
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="commonSelectText">Total MRP</p>
                    <TextField onChange={handleChange} value={items.product_total_mrp} variant="standard" name="product_total_mrp" fullWidth={true} />
                  </div>
                  <div>
                    <p className="commonSelectText">Per Unit Weight</p>
                    <div className="flex gap-4">
                      <div>
                        <TextField onChange={handleChange} value={items.product_per_unit_weight} variant="standard"  name="product_per_unit_weight" fullWidth={true} />
                      </div>
                      <div>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType}
                        >
                          <MenuItem value={"Regional Wholeseller"}>Kg</MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            Kg
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="commonSelectText">HSN Code</p>
                    <TextField onChange={handleChange} value={items.product_hsn_code} variant="standard"  name="product_hsn_code" fullWidth={true} />
                  </div>
                </div>

                <div className="cityField">
                  <div>
                    <p className="commonSelectText">GST</p>
                    <TextField onChange={handleChange} value={items.product_gst_no} variant="standard" name="product_gst_no" fullWidth={true} />
                  </div>
                 
                  <div>
                    <p className="commonSelectText">MRP</p>
                    <TextField variant="standard"  name="product_mrp" 
                    onChange={handleChange} value={items.product_mrp} fullWidth={true} />
                  </div>
                </div>
              </div>
            </div>
            ))}


<div className="border-2 p-5 mt-3 rounded-md " hidden={!HideTable}>
              <div className="flex gap-5">
                <div className="uploadCard">
                  <div className="uploadIcon px-3" style={{position:"relative"}}>
                    

                    {selectedImage3 ===undefined ? <img src={UploaderFrame} alt={"Uploader"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage3)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '130px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange3}  name="image"  />
                  </div>

                  <div className="content">
                    <div className={"title"}>Upload front Image</div>
                    <div className={"subtitle"}>
                      Image can be size of 512 PX by 512 PX Only
                    </div>
                  </div>
                </div>

                <div className="uploadCard">
                  <div className="uploadIcon px-3" style={{position:"relative"}}>
                    

                    {selectedImage ===undefined ? <img src={UploaderFrame} alt={"Uploader"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '130px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange}  name="image"  />
                  </div>

                  <div className="content">
                    <div className={"title"}>Upload front Image</div>
                    <div className={"subtitle"}>
                      Image can be size of 512 PX by 512 PX Only
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 py-5">
                <div className="uploadCard">
                  <div className="uploadIcon px-3" style={{position:"relative"}}>
                    

                    {selectedImage2 ===undefined ? <img src={UploaderFrame} alt={"Uploader"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage2)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '130px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange2}  name="image"  />
                  </div>

                  <div className="content">
                    <div className={"title"}>Upload front Image</div>
                    <div className={"subtitle"}>
                      Image can be size of 512 PX by 512 PX Only
                    </div>
                  </div>
                </div>
              </div>

              <div className="field">
                <div className="bazaarField">
                  <div>
                    <p className="commonSelectText">Product Name</p>
                    <TextField onChange={handleChange} name="product_name" 
           variant="standard" fullWidth={true} />
                  </div>

                  <div>
                    <p className="commonSelectText">Brand Name</p>
                    <TextField onChange={handleChange} name="product_brand_name"
            variant="standard" fullWidth={true}  />
                  </div>
                </div>

                <div className="stateField">
                  <div>
                    <p className="commonSelectText">Total Weight</p>
                    <div className="flex gap-4">
                      <div>
                        <TextField onChange={handleChange} name="product_total_mrp"
            variant="standard" fullWidth={true}   />
                      </div>
                      <div>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType} 
                        >
                          <MenuItem value={"Regional Wholeseller"}>Kg</MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            Kg
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="commonSelectText">No. of Units</p>
                    <div className="flex gap-4">
                      <div>
                        <TextField onChange={handleChange} name="product_unit" variant="standard" fullWidth={true} />
                      </div>
                      <div>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType}
                        >
                          <MenuItem value={"Regional Wholeseller"}>
                            Unit
                          </MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            Unit
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="commonSelectText">Total MRP</p>
                    <TextField onChange={handleChange}  variant="standard" name="product_total_mrp" fullWidth={true} />
                  </div>
                  <div>
                    <p className="commonSelectText">Per Unit Weight</p>
                    <div className="flex gap-4">
                      <div>
                        <TextField onChange={handleChange}  variant="standard"  name="product_per_unit_weight" fullWidth={true} />
                      </div>
                      <div>
                        <Select
                          label="Age"
                          variant={"standard"}
                          fullWidth={true}
                          value={masterType}
                          onChange={handleChangeMasterType}
                        >
                          <MenuItem value={"Regional Wholeseller"}>Kg</MenuItem>
                          <MenuItem value={"Regional Wholeseller 1"}>
                            Kg
                          </MenuItem>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="commonSelectText">HSN Code</p>
                    <TextField onChange={handleChange}  variant="standard"  name="product_hsn_code" fullWidth={true} />
                  </div>
                </div>

                <div className="cityField">
                  <div>
                    <p className="commonSelectText">GST</p>
                    <TextField onChange={handleChange}  variant="standard" name="product_gst_no" fullWidth={true} />
                  </div>
                 
                  <div>
                    <p className="commonSelectText">MRP</p>
                    <TextField variant="standard"  name="product_mrp" 
                    onChange={handleChange}  fullWidth={true} />
                  </div>
                  <div><button style={{marginTop:'20px'}}
                  className="MuiButtonBase-root MuiButton-root MuiButton-text
                   MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium nextButton css-1e6y48t-MuiButtonBase-root-MuiButton-root"
                     type="button" onClick={()=> save()}>Save<span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button></div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center border-dashed border-2 border-[#4E2FA9] p-3 rounded-md w-[300px] justify-center cursor-pointer mt-10">
                <img className="w-[20px]" src={LogoAdd} alt={"Logo"} />
                <p className="text-[#4E2FA9]" onClick={addInputField}>Add New Product</p>
              </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SubCategories;
