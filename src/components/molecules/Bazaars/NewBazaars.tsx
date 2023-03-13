import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BazaarDetails from "@/screens/BazaarDetails";
import GroupCategories from "@/screens/GroupCategories";
import Categories from "@/screens/Categories";
import Categories2 from "@/screens/Categories2";
import SubCategories from "@/screens/SubCategories";
import { useBazaarStepperdStyles } from "@/static/stylesheets/molecules";
import LogoPrev from "@/static/icons/ic_previous.png";
import { AppService } from "@/service/AllApiData.service";
import { Alert } from "@/alert/Alert";
import axios from "axios";

const steps = [
  "Bazaar Details",
  "Group Categories",
  "Categories",
  "Sub- Categories",
  "Products",
];

export default function NewBazaars() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [AllState, setAllState] = React.useState([]);
  const getAllLists = async () => {
    const responseJson = await AppService.getAllStates();
    // console.log(responseJson.data.bazaar);
    setAllState(responseJson.data.results);
   
  };
 


  React.useEffect(() => {
    getAllLists();
  }, []);
  const event = new Date();
  const [formData, setFormData] = React.useState({
  wholesellers: "123",
    agents: "2",
    states: "2",
    earnings: "154000",
    bills: "52",
    bazaar_description: "test",
    bazaar_name: "",
    bazaar_image: "",
    bazaar_added_date: event.toISOString(),
    bazaar_updated_date: event.toISOString(),
    bazaar_updated_by: '1',
    bazaar_state: "",
    bazaar_city: "",
    bazaar_district: "",
    bazaar_gorup_category: "",
    bazaar_category: "",
    bazaar_subcategory: "",
    bazaar_product: ""
  });

  const saveBazaarData = async () => {
    const formdatas = new FormData(); 
    formdatas.append('wholesellers', formData.wholesellers);
    formdatas.append('agents', formData.agents);
    formdatas.append('states', formData.states);
    formdatas.append('earnings', formData.earnings);
    formdatas.append('bills', formData.earnings);
    formdatas.append('bazaar_description', formData.bazaar_description);
    formdatas.append('bazaar_name', formData.bazaar_name);
     formdatas.append('bazaar_image', formData.bazaar_image);
     formdatas.append('bazaar_added_date', formData.bazaar_added_date);
     formdatas.append('bazaar_updated_date', formData.bazaar_updated_date);
     formdatas.append('bazaar_updated_by', formData.bazaar_updated_by);
     formdatas.append('bazaar_state', formData.bazaar_state);
     formdatas.append('bazaar_city', formData.bazaar_city);
     formdatas.append('bazaar_district', formData.bazaar_district);
     formdatas.append('bazaar_gorup_category', formData.bazaar_gorup_category);
     formdatas.append('bazaar_category', formData.bazaar_category);
     formdatas.append('bazaar_subcategory', formData.bazaar_subcategory);
     formdatas.append('bazaar_product', formData.bazaar_product);
    axios.post("https://knackfee.com/api/bazaar/data/", formdatas,{   
      headers: AppService.authHeader()
  })
  .then(res => { // then print response status
  console.log(res);
  Alert("save successfully");
  
  })
  }

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = async (e:any) => {
    console.log(activeStep);
    console.log(formData);
    if(activeStep===4){
      saveBazaarData();
      // Alert("save successfully");
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      console.log(activeStep);
  
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    console.log(formData);
  };

  
  
  const handleReset = () => {
    setActiveStep(0);
  };
  React.useEffect(() => {
    console.log(formData);
    
      
      }, []);

  const classes = useBazaarStepperdStyles();

  return (
    <div className={classes.root}>
      <div className="headContainer">
        <div className="icon">
          <img src={LogoPrev} alt={"Logo"} />
        </div>
        <div className="headTitle">Add New Bazaar</div>
      </div>
      <div className={classes.stepperContainer}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                <div className="headTitle">completed</div>
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button className="nextButton" onClick={handleReset}>
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && <BazaarDetails  formData={formData} setFormData={setFormData} />}

              {activeStep === 1 && <GroupCategories formData={formData} setFormData={setFormData} />}

              {activeStep === 2 && <Categories formData={formData} setFormData={setFormData}  />}
              {activeStep === 3 && <Categories2  formData={formData} setFormData={setFormData}/>}
              {activeStep === 4 && <SubCategories formData={formData} setFormData={setFormData} />}

              <div className="actionButton">
                <div>
                  <Button
                    className="BackButton"
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                </div>

                <div>
                  <Button className="nextButton" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </React.Fragment>
          )}
        </Box>
      </div>
    </div>
  );
}
