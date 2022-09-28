
    import { Injectable } from '@angular/core';  
    import { HttpClient,HttpHeaders }    from '@angular/common/http';  
    @Injectable({  
      providedIn: 'root'  
    })  
      
    export class ServiceService {  
      
    constructor(private http: HttpClient) { }  
      httpOptions = {  
        headers: new HttpHeaders({  
          'Content-Type': 'application/json'  
        })  
      }    
      getData(){  
           
        return this.http.get('https://localhost:44368/api/Employee');  //https://localhost:44352/ webapi host url  
      }  
      
      postData(formData : any){  
        return this.http.post('https://localhost:44368/api/Employee',formData);  
      }  
      
      putData(id: number,formData : any){  
        return this.http.put('https://localhost:44368/api/Employee/'+id,formData);  
      }  
       deleteData(id:number){  
        return this.http.delete('https://localhost:44368/api/Employee/'+id);  
      }  
        
    }  
