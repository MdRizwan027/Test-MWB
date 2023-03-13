import { AxiosRequestConfig } from "axios";
import http from "./http-common";
export class AppService {


static login(username:string, password:string) {
	// const response = await axios.get(`${BASE_URL}/bazaar/`);
	// return http.post("/login/", {
	// 	username,
	// 	password,
	//   });

	return http.post("/login/", {
		username,
		password,
	  })
	  .then((response) => {
		if (response.data.access) {
		  localStorage.setItem("user", JSON.stringify(response.data));
		}
  
		return response.data;
	});

};

static getCurrentUser = () => {
	const userStr = localStorage.getItem("user");
	if (userStr) return JSON.parse(userStr);
  
	return null;
  };





  static authHeader() {
	const userStr = localStorage.getItem("user");
	let user = null;
	if (userStr)
	  user = JSON.parse(userStr);
  
	if (user && user.access) {
	  return { Authorization: 'Bearer ' + user.access }; // for Spring Boot back-end
	  // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
	} else {
	  return { Authorization: '' }; // for Spring Boot back-end
	  // return { 'x-access-token': null }; // for Node Express back-end
	}
  }




static getAllBazarList(datas:any) {
	return http.get("bazaar/data/?page="+datas, { headers: AppService.authHeader() });
};

static getAllBazarListLiveSerach(datas:any) {
	return http.get("bazaar/data/?search="+datas, { headers: AppService.authHeader() });
};

static getAllBazarListSearch(datas:any) {
	return http.get("bazaar/data/?search="+datas, { headers: AppService.authHeader() });
};
static getAllBazarListwholeseller(ID:any) {
	return http.get("bazaar/data/"+`${ID}`+"/wholesellers-list/", { headers: AppService.authHeader() });
};

static getAllBazarListwholesellerSearch(ID:any,items:any) {
	return http.get("bazaar/data/"+`${ID}`+"/wholesellers-list/?search="+`${items}`+"", { headers: AppService.authHeader() });
};
static getAllBazarAgentList(ID:any) {
	return http.get("bazaar/data/"+`${ID}`+"/agents-list/", { headers: AppService.authHeader() });
};

static getAllBazarAgentListSearch(ID:any,items:any) {
	return http.get("bazaar/data/"+`${ID}`+"/agents-list/?search="+`${items}`+"", { headers: AppService.authHeader() });
};

static getAllBazarProductListSearch(ID:any,items:any) {
	return http.get("bazaar/data/"+`${ID}`+"/products-list/?search="+`${items}`+"", { headers: AppService.authHeader() });
};
static getAllBazarProductList(ID:any) {
	return http.get("bazaar/data/"+`${ID}`+"/products-list/", { headers: AppService.authHeader() });
};

static getAllAgentList() {
	return http.get("agent/", { headers: AppService.authHeader() });
};
static getAllwholesellerList() {
	return http.get("wholeseller/", { headers: AppService.authHeader() });
};

static getAllSummerys(){
	return http.get("dashboard/summary/", { headers: AppService.authHeader() });
}

static getAllDashBazaarLists(){
	return http.get("dashboard/report/", { headers: AppService.authHeader() });
}
static getAllPlans(){
	return http.get("dashboard/plan/", { headers: AppService.authHeader() });
	
}
static getAllPlansData(){
	return http.get("dashboard/plan-list/", { headers: AppService.authHeader() });
	
}

static getAllStates(){
	return http.get("location/state/", { headers: AppService.authHeader() });
	
}
static getAllDistric(){
	return http.get("location/district/", { headers: AppService.authHeader() });
	
}

static getAllCity(){
	return http.get("location/city/", { headers: AppService.authHeader() });
}

static addBazars(data: any){
	return http.post("bazaar/data/", data, { headers: AppService.authHeader() });
}
static addGroupCate(data:any){
	return http.post("parentcategory/", data, { headers: AppService.authHeader() });
}
static detailGroupCate(data:any){
	return http.get("parentcategory/"+`${data}`+"/", { headers: AppService.authHeader() });
}
static deleteGroupCate(data:any){
	return http.delete("parentcategory/"+`${data}`+"/", { headers: AppService.authHeader() });
}
static updateGroupCate(ID:any, data:any){
	return http.put("parentcategory/"+`${ID}`+"/", data, { headers: AppService.authHeader() });
}
static listGroupCate(){
	return http.get("parentcategory/", { headers: AppService.authHeader() });
}

static addMainCate(data:any){
	return http.post("category/", data, { headers: AppService.authHeader() });
}
static detailMainCate(data:any){
	return http.get("category/"+`${data}`+"/", { headers: AppService.authHeader() });
}
static deleteMainCate(data:any){
	return http.delete("category/"+`${data}`+"/", { headers: AppService.authHeader() });
}
static updateMainCate(ID:any, data:any){
	return http.put("category/"+`${ID}`+"/", data, { headers: AppService.authHeader() });
}

static listMaincategory(){
	return http.get("category/", { headers: AppService.authHeader() });
}


static addSubCate(data:any){
	return http.post("subcategory/", data, { headers: AppService.authHeader() });
}
static detailSubCate(data:any){
	return http.get("subcategory/"+`${data}`+"/", { headers: AppService.authHeader() });
}
static deleteSubCate(data:any){
	return http.delete("subcategory/"+`${data}`+"/", { headers: AppService.authHeader() });
}
static updateSubCate(ID:any, data:any){
	return http.put("subcategory/"+`${ID}`+"/", data, { headers: AppService.authHeader() });
}

static listSubcategory(){
	return http.get("subcategory/", { headers: AppService.authHeader() });
}


static addPrdCate(data:any){
	return http.post("product/", data, { headers: AppService.authHeader() });
}
static detailPrdCate(data:any){
	return http.get("product/"+`${data}`+"/", { headers: AppService.authHeader() });
}
static deletePrdCate(data:any){
	return http.delete("product/"+`${data}`+"/", { headers: AppService.authHeader() });
}
static updatePrdCate(ID:any, data:any){
	return http.put("product/"+`${ID}`+"/", data, { headers: AppService.authHeader() });
}
static listPrdproducts(){
	return http.get("product/",  { headers: AppService.authHeader() });
}

}
