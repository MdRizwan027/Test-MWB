import React, { useEffect, useState } from "react";
import { useAddbazaarStyles } from "@/static/stylesheets/molecules";
import UploaderFrame from "@/static/icons/uploader-frame.png";
import { Checkbox, ListItemText, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { AppService } from "@/service/AllApiData.service";
import { Alert } from "@/alert/Alert";

const BazaarDetails = (props: {
  formData: any;
  setFormData: (arg0: any) => void;
}) => {
  const classes = useAddbazaarStyles();

  const [masterType, setMasterType] = React.useState<any[]>([]);
  const [masterType2, setMasterType2] = React.useState<any[]>([]);
  const [masterType3, setMasterType3] = React.useState<any[]>([]);
  const [AllState, setAllState] = React.useState([]);
  const [AllDis, setAllDis] = React.useState([]);
  const [AllCity, setAllCity] = React.useState([]);
 


  const handleChangeMasterType = (event: any) => {
    setMasterType(event.target.value);
    console.log(event.target.value.join(","));
    const int = event.target.value.map(Number);
    props.setFormData({
      ...props.formData,
      bazaar_state: [int],
    });

    
  };

  const handleChangeMasterType2 = (event: any) => {
    // setMasterType(event.target.value as string);
    setMasterType2(event.target.value);
    console.log(event.target.value.join( ',' ));
    const str = event.target.value.map(Number);
    props.setFormData({
      ...props.formData,
      bazaar_district: [str],
    });
  
  };
  const handleChangeMasterType3 = (event: any) => {
    setMasterType3(event.target.value);
    console.log(event.target.value.join());
    const str = event.target.value.map(Number);
    props.setFormData({
      ...props.formData,
      bazaar_city: [str],
    });
   
  };
  const [file, setFiles] = useState("");
  const [fileName, setFileName] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const imageChange = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImage(e.target.files[0]);
      props.setFormData({
        ...props.formData,
        bazaar_image: e.target.files[0],
      });


 


// localStorage.getItem("lastname");
      // props.setFormData({
      //   ...props.formData,
      //   bazaar_image: e.target.files[0].name,
      // });
    }
  };



 

  // const convertimage = (file: Blob) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });
  // };

 

  const getAllLists = async () => {
    const responseJson = await AppService.getAllStates();
    // console.log(responseJson.data.bazaar);
    setAllState(responseJson.data.results);
   
  };

  const getAllDis = async () => {
    const responseJson = await AppService.getAllDistric();
    // console.log(responseJson.data.bazaar);
    setAllDis(responseJson.data.results);
   
  };

  const getAllCity= async () => {
    const responseJson = await AppService.getAllCity();
    // console.log(responseJson.data.bazaar);
    setAllCity(responseJson.data.results);
   
  };



const datasss =  async () =>{
  if(props.formData.bazaar_state==='' || props.formData.bazaar_district ==='' || props.formData.bazaar_city ===''){
}else{
  setMasterType([props.formData.bazaar_state]);
  setMasterType2([props.formData.bazaar_district]);
  setMasterType3([props.formData.bazaar_city]);
  setSelectedImage(props.formData.bazaar_image);
}
}

  useEffect(() => {
    // console.log(props);
    getAllLists();
    getAllDis();
    getAllCity();
    datasss();
   
  }, []);
  

  return (
    <div className={classes.root}>
      <div className="pt-[50px]">
        <div className={classes.content}>
          <div className="py-5">
            <div className="uploadIcon">
              {/* <img src={UploaderFrame} alt={"Uploader"} /> */}
              {selectedImage ===undefined ? <img src={UploaderFrame} alt={"Uploader"} /> :selectedImage && (
            <img style={{position: "absolute",
              width: "100%",
              zIndex: "1",
              height: "145px"}} src={URL.createObjectURL(selectedImage)}/>
            ) } 
              <input
                onChange={imageChange} 
                className={"kycForms"}
                type="file"
                name="file"
                id="formFile"
              />
            </div>
            <div className={"title"}>Upload Media here</div>-
            <div className={"subtitle"}>
              Image can be size of 512 PX by 512 PX Only
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px]">
        <div>
          <p className="fieldTitle">Bazaar Name</p>
          <TextField variant="standard" value={props.formData.bazaar_name} onChange={e => props.setFormData({
      ...props.formData, bazaar_name: e.target.value})} fullWidth={true} />
        </div>

        <div className="flex gap-4 py-[20px]">
          <div>
            <p className="fieldTitle">Select State</p>
            <Select
              label="Age" 
              variant={"standard"}
              fullWidth={true}
              multiple={true} 
              value={masterType}
              onChange={handleChangeMasterType}
            >
              {AllState.map((items:any)=>(
              <MenuItem key={items.id}  value={items.id}>
              {items.state}
              
             
              </MenuItem>
            
              
              ))}
            </Select>
          </div>

          <div>
            <p className="fieldTitle">District</p>
            <Select
              label="Age"
              variant={"standard"}
              fullWidth={true}
              multiple={true} 
              value={masterType2}
              onChange={handleChangeMasterType2}
            >
             {AllDis.map((items:any)=>(
              <MenuItem value={items.id}>
              {items.district}
              </MenuItem>
                ))}
            </Select>
          </div>
        </div>

        <div>
          <p className="fieldTitle">City</p>
          <Select
            label="Age"
            variant={"standard"}
            fullWidth={true}
            multiple={true}
            value={masterType3}
            onChange={handleChangeMasterType3}
          >
            {AllCity.map((items:any)=>(
              <MenuItem value={items.id}>
              {items.city}
              </MenuItem>
                ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default BazaarDetails;
