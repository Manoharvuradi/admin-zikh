export const browseByState = [
   {
    label: "Add state",
    type: "select",
    name: "stateName",
    required: true,
    options:[
        {
            label: "select",
            value: ""
        },
        {
            label:"Andra Pradesh",
            value:"andraPradesh"
        },
        {
            label:"Arunachal Pradesh",
            value:"arunachalPradesh"
        },
        {
            label:"Assam",
            value:"assam"
        },
        {
            label:"Bihar",
            value:"bihar"
        },
        {
            label:"Chhattisgarh",
            value:"chhattisgarh"
        },
        {
            label:"Goa",
            value:"goa"
        },
        {
            label: "Telangana",
            value: "telangana"
        }
    ]
   },
   {
    label:"Lattitude",
    type:"text",
    name:"latitude",
    required:true
   },
   {
    label:"Longitude",
    type:"text",
    name:"longitude",
    required:true
   }
]