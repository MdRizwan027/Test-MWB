import React, { useState } from "react";
import { ActionButton } from "@/components/atoms/Button/ActionButton";
import { useKycFormStyles } from "@/static/stylesheets/molecules";
import { Avatar, FormControl, Input, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import LogoDelete from "@/static/icons/ic_delete.png";
import LogoEdit from "@/static/icons/ic_edit.png";

const WholsellerKycForm = () => {
  const classes = useKycFormStyles();
  const [masterType, setMasterType] = useState("Regional Wholeseller");

  const handleChangeMasterType = (event: SelectChangeEvent) => {
    setMasterType(event.target.value as string);
  };

  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e:any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImage(e.target.files[0]);
    }
  };

  const [selectedImageT, setSelectedImageT] = useState();

  const imageChangeTwo = (e:any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImageT(e.target.files[0]);
    }
  };


  const [selectedImageTH, setSelectedImageTH] = useState();

  const imageChangeTH = (e:any) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setSelectedImageTH(e.target.files[0]);
    }
  };


  const removeSelectedImage = (e:any) => {
    // setSelectedImage();
  };


  return (
    <div className={classes.root}>
      <div className="headContainer">
     
        <Avatar  sx={{ width: 100,  height: 100, }} >
        {selectedImage ===undefined ? 'logo' :selectedImage && (
            <img src={URL.createObjectURL(selectedImage)}/>
            ) } 
        </Avatar>
         
        <div className={"buttonKycForms"}>
          <ActionButton variant="default" title="Upload new picture" />
          <input accept="image/*" onChange={imageChange} className={"kycForms"} type="file" />
        </div>
       <span onClick={removeSelectedImage}>Remove picture</span>
      </div>
      <div className="field">
         <div className="flex items-center gap-8 mt-6">
            <TextField label="Firm Name" variant="standard" id="fullWidth" className="w-1/2" />
            <TextField label="Contact Person" variant="standard" id="fullWidth" className="w-1/2" />
          </div>

          <div className="flex items-center gap-8 mt-6">
            <FormControl variant="standard" className="w-1/2">
              <InputLabel htmlFor="standard-adornment-amount">Phone number</InputLabel>
              <Input id="standard-adornment-amount" startAdornment={<InputAdornment position="start">+91 </InputAdornment>} type="number" />
            </FormControl>
          
            <FormControl variant="standard" className="w-1/2">
              <InputLabel htmlFor="standard-adornment-amount">Phone number</InputLabel>
              <Input id="standard-adornment-amount" startAdornment={<InputAdornment position="start">+91 </InputAdornment>} type="number" />
            </FormControl>
          </div>

          <div className="bazaarField flex items-center gap-8 mt-6">
              <FormControl variant="standard" className="w-1/2">
                <InputLabel htmlFor="standard-adornment-amount">Email Address</InputLabel>
                <Input id="standard-adornment-amount" type="email" />
              </FormControl>
              <div className="w-1/2">
                <InputLabel id="Bazaar">Bazaar</InputLabel>
                <Select label="Bazaar" labelId="Bazaar" variant={"standard"} fullWidth={true} value={masterType} onChange={handleChangeMasterType} className="w-1/2">
                  <MenuItem value={"Regional Wholeseller"}>Electronic, Computer + 1</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>Electronic, Computer + 2</MenuItem>
                </Select>
              </div>
          </div>
          <div className="flex items-center gap-8 mt-6">
              <FormControl variant="standard" className="w-1/2">
                <InputLabel htmlFor="standard-adornment-amount">Aadhaar</InputLabel>
                <Input id="standard-adornment-amount"  type="number" />
              </FormControl>
          </div>
          <div className="bazaarField flex items-center gap-8 mt-6">
            <div className="w-1/2">
                <InputLabel id="Bazaar">Bazaar</InputLabel>
                <Select label="Bazaar" labelId="Bazaar" variant={"standard"} fullWidth={true} value={masterType} onChange={handleChangeMasterType} className="w-1/2">
                  <MenuItem value={"Regional Wholeseller"}>Electronic, Computer + 1</MenuItem>
                  <MenuItem value={"Regional Wholeseller 1"}>Electronic, Computer + 2</MenuItem>
                </Select>
            </div>
          </div>
          <div className="flex items-center gap-8 mt-6">
             <FormControl variant="standard" className="w-1/2">
                <InputLabel htmlFor="standard-adornment-amount">GST Number</InputLabel>
                <Input id="standard-adornment-amount"  type="number" />
              </FormControl>
              <TextField label="Firm PAN Number" variant="standard" id="fullWidth" className="w-1/2" />
          </div>
          <div className="flex items-center gap-8 mt-6">
            <TextField label="Address" variant="standard" id="fullWidth" className="w-1/2" />
            <TextField label="Landmark" variant="standard" id="fullWidth" className="w-1/2" />
          </div>
          <div className="flex items-center gap-8 mt-6">
            <TextField label="State" variant="standard" id="fullWidth" className="w-1/2" />
            <TextField label="City" variant="standard" id="fullWidth" className="w-1/2" />
          </div>
          <div className="flex items-center gap-8 mt-6">
              <FormControl variant="standard" className="w-1/2">
                <InputLabel htmlFor="standard-adornment-amount">Pincode</InputLabel>
                <Input id="standard-adornment-amount"  type="number" />
              </FormControl>
          </div>
      </div>
      

      <div className="mapButton mt-8">
        <p>Set Location via Google Maps</p>
        <ActionButton variant="primary" title="Set Location" />
      </div>

      <div className="docContainer">
        <p>Documents</p>
        <div className="Attachment-file">
          <div className={"buttonKycForms"}>
            Aadhaar Card
            <Avatar
              sx={{
                width: 100,
                height: 100,
              }}
              variant="square"
            >
               {selectedImageT ===undefined ? 'Card' :selectedImageT && (
            <img src={URL.createObjectURL(selectedImageT)}/>
            ) } 
            </Avatar>
            <input accept="image/*"  onChange={imageChangeTwo}  className={"kycFormsTwo"} type="file"/>
            <div className="documentButton">
              <div className="ActionLogo">
                <img src={LogoDelete} alt={"Logo"} />
               
                <div className="dividor"></div>
                <img src={LogoEdit} alt={"Logo"} />
              </div>
            </div>
          </div>
          <div className={"buttonKycForms"}>
            Pan Card
            <Avatar
              sx={{
                width: 100,
                height: 100,
              }}
              variant="square"
            >
              {selectedImageTH ===undefined ? 'Card' :selectedImageTH && (
            <img src={URL.createObjectURL(selectedImageTH)}/>
            ) } 
            </Avatar>
            <input accept="image/*"  onChange={imageChangeTH}  className={"kycFormsTwo"} type="file"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WholsellerKycForm };
