import {
    toast
} from "./toast.js";

class Call {
    async json(url, method, showToast, requestData) {
        try {
            const response = await fetch(url, {
                headers: {
                    "Content-Type": "Application/json"
                },
                method: method,
                body: JSON.stringify(requestData)
            });
            const data = await response.json();
            if (data.isSuccess == true) {
                if(showToast == false){
                    return {
                        success: true,
                        message:(data.message).replaceAll("\"",""),
                        data:data.data
                    }   
                }
                toast((data.message).replaceAll("\"",""), "success")
                return {
                    success: true,
                    message:(data.message).replaceAll("\"",""),
                    data:data.data
                }
            }
            if(showToast == false){
                return {
                    success: false,
                    message:(data.message).replaceAll("\"",""),
                    data:data.data
                }   
            }
            toast((data.message).replaceAll("\"",""), "error")
            return {
                success: false,
                message:(data.message).replaceAll("\"",""),
                data:data.data
            }
        } catch (error) {
            let errorMessage = "Something Went Wrong, Please Try Again Soon"
            console.error(error);
            if(showToast == false){
                return {
                    success: false,
                    message:errorMessage,
                    data:[]
                }   
            }
            toast(errorMessage, "error")
            return {
                success: false,
                message:errorMessage,
                data:[]
            }
        }
    }
    async formData(url, method, showToast, requestData) {
        try {
            const response = await fetch(url, {
                method: method,
                body: requestData
            });
            const data = await response.json();
            if (data.isSuccess == true) {
                if(showToast == false){
                    return {
                        success: true,
                        message:(data.message).replaceAll("\"",""),
                        data:data.data
                    }   
                }
                toast((data.message).replaceAll("\"",""), "success")
                return {
                    success: true,
                    message:(data.message).replaceAll("\"",""),
                    data:data.data
                }
            }
            if(showToast == false){
                return {
                    success: false,
                    message:(data.message).replaceAll("\"",""),
                    data:data.data
                }   
            }
            toast((data.message).replaceAll("\"",""), "error")
            return {
                success: false,
                message:(data.message).replaceAll("\"",""),
                data:data.data
            }
        } catch (error) {
            let errorMessage = "Something Went Wrong, Please Try Again Soon"
            console.error(error);
            if(showToast == false){
                return {
                    success: false,
                    message:errorMessage,
                    data:[]
                }   
            }
            toast(errorMessage, "error")
            return {
                success: false,
                message:errorMessage,
                data:[]
            }
        }
    }
}

export const call = new Call()