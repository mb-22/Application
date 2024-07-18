
export class Contact {

    
    constructor()
    {
        
    }

    sendMail() {
        var params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email_user").value,
          message: document.getElementById("message").value,
        };
      
        const serviceID = "service_8szvyxd";
        const templateID = "template_brk5qco";
      
          emailjs.send(serviceID, templateID, params)
          .then(res=>{
              document.getElementById("name").value = "";
              document.getElementById("email_user").value = "";
              document.getElementById("message").value = "";
              console.log(res);
              alert("Your message sent successfully!!")
      
          })
          .catch(err=>console.log(err));
      
    }
      

}



