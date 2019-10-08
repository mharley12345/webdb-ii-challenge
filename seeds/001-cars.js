
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate().del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: "5J6TF1H59EL756296", make:'Buick',model:'Coachbuiler',mileage:'36430',transmission_type:'auto',title_type:'clean'},
        {vin: "1N6AF0KY8FN661452", make:'Nissan',model:'Frontier',mileage:'96798',transmission_type:'manual',title_type:'salvage'},
        {vin: "WA1DGBFE2CD099603", make:'Toyta',model:'Armada',mileage:'157545',transmission_type:'auto',title_type:'clean'},
        {vin:"WAUEL74FX6N848982",make:"Chrysler",model:"300",mileage:171617      ,transmission_type:"auto",title_type:"clean"},
        {vin:"4JGDF2EE0DA933960",make:"GMC",model:"Sierra 2500",mileage:34467,transmission_type:"auto",title_type:"clean"},
        {vin:"3C63DRJLXCG953661",make:"Subaru",model:"Legacy",mileage:185469,transmission_type:"auto",title_type:"clean"},
        {vin:"JH4NA21684T006097",make:"Ford",model:"E150",mileage:26451,transmission_type:"auto",title_type:"clean"},
        {vin:"19UUA65586A601084",make:"Infiniti",model:"QX56",mileage:122723,transmission_type:"auto",title_type:"clean"},
        {vin:"1FAHP2DW9CG030575",make:"Toyota",model:"Highlander",mileage:194474,transmission_type:"auto",title_type:"clean"},
        {vin:"WAUPEAFM2DA366250",make:"Ford",model:"Thunderbird",mileage:161954,transmission_type:"auto",title_type:"clean"},
        {vin:"2HNYD18646H006341",make:"Hyundai",model:"Scoupe",mileage:169894,transmission_type:"auto",title_type:"clean"},
        {vin:"WAUEL74FX5N874867",make:"Saab",model:"9-5",mileage:152453,transmission_type:"auto",title_type:"clean"},
        {vin:"WAUAF78E76A573280",make:"Chevrolet",model:"Corvette",mileage:135749,transmission_type:"auto",title_type:"clean"},
        {vin:"5J8TB4H36DL805701",make:"Ford",model:"Tempo",mileage:180024   ,transmission_type:"auto",title_type:"clean"},
        {vin:"1G6AZ5SX4E0107838",make:"Chevrolet",model:"Camaro",mileage:4648,transmission_type:"auto",title_type:"clean"},
        {vin:"1GKS2FFJ3BR500601",make:"Chevrolet",model:"Colorado",mileage:134371,transmission_type:"auto",title_type:"clean"},
        {vin:"2GKALMEK8C6701530",make:"Toyota",model:"Highlander",mileage:104327,transmission_type:"auto",title_type:"clean"},
        {vin:"1G6AB5SX1F0493012",make:"Audi",model:"S6",mileage:109180,transmission_type:"auto",title_type:"clean"},
        {vin:"1G4GA5EC2AF474571",make:"Ford",model:"Windstar",mileage:123931,transmission_type:"auto",title_type:"clean"},
        {vin:"WVGAV7AXXCW526420",make:"Mazda",model:"626",mileage:134144,transmission_type:"auto",title_type:"clean"},
        {vin:"5N1AA0NC2FN629125",make:"Infiniti",model:"G37",mileage:191462,transmission_type:"auto",title_type:"clean"},
        {vin:"WAUBH78E66A811084",make:"Ford",model:"F-Series",mileage:108621,transmission_type:"auto",title_type:"clean"},
        {vin:"3D73M3HL3AG195659",make:"Hyundai",model:"Azera",mileage:169656,transmission_type:"auto",title_type:"clean"},
        {vin:"WBAUN1C59BV952725",make:"Volkswagen",model:"Vanagon",mileage:155281,transmission_type:"auto",title_type:"clean"},
        {vin:"WAUVT58E95A754510",make:"GMC",model:"Envoy XUV",mileage:127197,transmission_type:"auto",title_type:"clean"},
        {vin:"WAUCFAFR5DA630021",make:"Mitsubishi",model:"Eclipse",mileage:62976,transmission_type:"auto",title_type:"clean"},
        {vin:"WAUKH94F66N285753",make:"Cadillac",model:"DeVille",mileage:120686,transmission_type:"auto",title_type:"clean"},
        {vin:"3VWKX8AJXBM083783",make:"Lexus",model:"RX Hybrid",mileage:16731,transmission_type:"auto",title_type:"clean"},
        {vin:"WAULC58E75A606332",make:"GMC",model:"Yukon",mileage:20842       ,transmission_type:"auto",title_type:"clean"},
        {vin:"WAUJC58EX3A030658",make:"Lincoln",model:"Town Car",mileage:24627,transmission_type:"auto",title_type:"clean"},
        {vin:"WP0AA2A95BS903827",make:"Volkswagen",model:"Eos",mileage:4459,transmission_type:"auto",title_type:"clean"},
        {vin:"5N1AN0NW9DN297809",make:"Nissan",model:"Quest",mileage:26902,transmission_type:"auto",title_type:"clean"},
        {vin:"1FTEX1CWXAF512965",make:"Ford",model:"Escort",mileage:28933,transmission_type:"auto",title_type:"clean"},
        {vin:"SCFEBBBC2AG942886",make:"Volvo",model:"XC90",mileage:155096       , transmission_type:"auto",title_type:"clean"}
       ]);
    });
};
