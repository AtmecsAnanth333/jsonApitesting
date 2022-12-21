import { test, chromium, expect,ElementHandle,Page, request } from "@playwright/test";

test("create an Incident",async({request,baseURL})=> {
    const response=await request.post('${baseURL}',{


        data:{"status":"success","data":{"id":1,"employee_name":"Tiger Nixon","employee_salary":320800,"employee_age":61,"profile_image":""},"message":"Successfully! Record has been fetched."
        }
    
    })
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
})
