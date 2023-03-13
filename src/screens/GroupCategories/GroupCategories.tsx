import React, { useState } from "react";
import { useGroupCategoriesStyles } from "@/static/stylesheets/screens/groupcategoriesStyles";
import LogoEcBazaar from "@/static/images/placeholder.jpg";
import LogoDelete from "@/static/icons/ic_delete.png";
import LogoEdit from "@/static/icons/ic_edit.png";
import LogoAdd from "@/static/icons/ic_add.png";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import MuiTreeView from "@/components/atoms/MuiTreeView/MuiTreeView";
import { TreeView, TreeItem } from "@mui/lab";
import { AppService } from "@/service/AllApiData.service";
import { Alert } from "@/alert/Alert";

const GroupCategories = (props: {
  formData: any;
  setFormData: (arg0: any) => void;
}) => {
  const classes = useGroupCategoriesStyles();

const [ListGroups, setListGroups] = useState([]);
const [IDS, setIDS] = React.useState("");
const [HideTable, setHideTable] = React.useState(false);
const [firstTableHide, setFirstTableHide] = React.useState(false);


const [addData, setAddData] = React.useState({
  parent_category_name: "",
  parent_category_description: "",
  parent_category_active: "true",
  parent_category_updated_by: 2
  });

const detailIB = async (ID:any) =>{
const responseJson = await AppService.detailGroupCate(ID);
setIDS(responseJson.data.id);
console.log(responseJson.data);
setAddData({
    ...addData,
    parent_category_name: responseJson.data.parent_category_name,
  });
}

  const [inputFields, setInputFields] = useState([{
    fullName:'',
    image:'',
} ]);

const addInputField = ()=>{
    // setInputFields([...inputFields, {
    //     fullName:'',
    //     image:'',
    // } ])
    setHideTable(true);
  
}
const removeInputFields = (index: number)=>{
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
}
const handleChange = (index: string | number, evnt: React.ChangeEvent<HTMLInputElement>)=>{

const { name, value } = evnt.target;
const list = [...inputFields];
// list[index][name] = value
console.log(list);
setInputFields(list);
// props.setFormData({
//   ...props.formData,
//   bazaar_gorup_category: list,
// });
}


const [selectedImage, setSelectedImage] = useState();
const [selected, setSelected] = React.useState([]);
const [node, setNode] = React.useState("");

const imageChange = (e:any) => {
  if (e.target.files && e.target.files.length > 0) {
    console.log(e.target.files[0]);
    setSelectedImage(e.target.files[0]);
  }
};

const dataSave = (e:any) => {
  // console.log(e.target.value);
  // props.setFormData({
  //   ...props.formData,
  //   bazaar_gorup_category: [selectedImage, e.target.value],
  // });
}


const handleSelectedItems = (event:any, nodeId:any) => {
  console.log(nodeId);
  setHideTable(false);
  setFirstTableHide(true);
  setNode(nodeId);
  detailIB(nodeId);
  props.setFormData({
    ...props.formData,
    bazaar_gorup_category: [nodeId],
  });
}

const getAllLists = async () => {
    const responseJson = await AppService.listGroupCate();
    // console.log(responseJson.data.results);
    setListGroups(responseJson.data.results);

   
  };

  const deletes = async(id:any)=>{
    setFirstTableHide(true);
    const responseJson = await AppService.deleteGroupCate(id);
    console.log(responseJson.data);
    Alert("delete successfully");
    getAllLists();

  }
  const edit = async(id:any)=>{
    setFirstTableHide(true);
    const responseJson = await AppService.updateGroupCate(id, addData);
    console.log(responseJson.data);
    Alert("update successfully");
    getAllLists();
  }

  
const handleChangess = async (event:any) => {
  // alert(event.target.value);
  setAddData({
    ...addData,
    parent_category_name:event.target.value,
  });
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
      const responseJson = await AppService.addGroupCate(addData);
      // setIDS(responseJson.data);
      // console.log(responseJson.data);
      Alert("AddNew successfully");
      getAllLists();
      setHideTable(false);
      }


  return (



    
    <div className={classes.root}>
      <div className="container" style={{display: 'flex',
    gap: '80px'}}>
<div className="leftContainer" style={{height: '300px',
    width: '300px'}}>
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
        <TreeItem nodeId={items.id} label={items.parent_category_name}>
          {/* <TreeItem nodeId={items.id} label={items.parent_category_name} /> */}
        </TreeItem>
        ))}
       
      </TreeView>
        </div>
        <div className="rightContainer">  
      <table>
        <tr hidden={!firstTableHide}>
          <th>Image</th>
          <th>Group Category Name</th>
          <th></th>
        </tr>


        <tr hidden={!firstTableHide}>
          <td>
            <div className="brandLogo" style={{position:"relative"}}>
              {/* <img src={LogoEcBazaar} alt={"Logo"} /> */}
              {selectedImage ===undefined ? <img src={LogoEcBazaar} alt={"Logo"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '40px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={handleChanges}  name="image"  />
            </div>
          </td>
          <td>
            <div>
              <input 
                type="text" name="parent_category_name"
                value={addData.parent_category_name}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-full p-[15px] dark:border-[#EBEAED]"
                placeholder="Snacks" onChange={handleChangess}
              />
            </div>
          </td>
          <td>
            <div className="ActionLogo">
              <img src={LogoDelete} onClick={()=> deletes(IDS)} alt={"Logo"}/>
              <div className="dividor"></div>
              <img src={LogoEdit} onClick={()=> edit(IDS)} alt={"Logo"} />
              
            </div>
          </td>
        </tr>


<tr hidden={!HideTable}>
          <td>
            <div className="brandLogo" style={{position:"relative"}}>
              {/* <img src={LogoEcBazaar} alt={"Logo"} /> */}
              {selectedImage ===undefined ? <img src={LogoEcBazaar} alt={"Logo"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '40px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange}  name="image"  />
            </div>
          </td>
          <td>
            <div>
              <input 
                type="text" name="parent_category_name"
              
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-full p-[15px] dark:border-[#EBEAED]"
                placeholder="Snacks" onChange={handleChanges}
              />
            </div>
          </td>
          <td>
            <div className="ActionLogo">
              <img src={LogoDelete} onClick={()=> hideTabs(true)} alt={"Logo"}/>
              <div className="dividor"></div>
              <img src={LogoAdd} alt={"Logo"} onClick={()=> save()}/>
              
            </div>
          </td>
        </tr>

        
      </table>

      
      </div>

      
      <div>
        <div className="addButton" onClick={addInputField}>
          <img src={LogoAdd} alt={"Logo"} />
          <p>Add New Group Category</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GroupCategories;
