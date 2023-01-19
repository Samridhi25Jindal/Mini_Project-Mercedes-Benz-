import React from "react";
import Footer from "./Footer";
function Products()
{
    let limoArray = [ {name:"EQS" , price:"Starting from ₹ 1,55,00,000.00" , type:"Electric" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0W7qtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtlKStsd2HtcUfp8qXGEuiBJ0l3IrOB2NzObApRA9I5ux4uQC31SrkzNwL6m7jA6ohKV5SQ%25vqCv%25yLRzAHYax75prH1KM1n8wvT3oiZUbXM4FGKuTg90hE6PDBSbSeWAtRtsd5%25QcUfCmfXGEvTVJ0lLOqOB2azEbApHYXI5usoIQC3UC1kzNGJum7j0hShKVBHM%25vq8cXyr%25kWfDpJJ0lCrnOIJRdAbQO%25nyI5ue5JQC3PgwkzN5z9m7jCeohKVzXh%25vq7XFyLRl36YaxHahrH18Bln8520R%256d9lo24MA4F0wOoZ1qggDu63FmZ3MkNulKlO1OsxACeqUx4Wg3yZ3&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"} ,
    { name:"A-Class" , price:"Starting from ₹ 42,00,000.00" , type:"" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqaW7qtyO67PobzIr3eWsrrCsdRRzwQZYVHZbMw3SGtiKUtsd7vbcUfi%25kXGE5YrJbXSqxVFnn8wPbIoTnlR4M6oeIlTg9vzT6PKNCZnX2f3SNKE7sQwDkSW9wUUEVXqdYWqtyRV3H3k9kBF7v0wAFslUqoWq&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700" },
    {name:"C-Class" , price:"Starting from ₹ 57,20,000.00 " , type:"" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqaSFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtle9tsd2HVcUfpOkXGEubSJ0l3IrOB2NS1bApjI9I5uVKMQC31MrkzNwTVm7jZ7ZhKVFKh%25vq9vlyLRDG6YaxWbSrH1KHrn8wvVwoiZUbEM4FGSlTg90626PDBSqSeWzyRtsd7YNcUfKM6XGE4ySJ0lg0VOB2PWEbApe7yI5usKuQC3UvWkzNL6Sm%25kbFDZEttsdB%25ycJtj9GXOcAyjJ0l4DlOB2iMwbAp0ioI5uBeYQC3ASFkzNW2fm7jKeIhKVvsW%25vqLUayLRaARYaBEUVmMDZfrE8qYOfJxXr1RjiiF2MpwQ1pnIu2fzfXRXPq0Agjeq89iph1p&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"} ,
  
    {name:"E-Class LWB", price:"Starting from ₹ 72,50,000.00" , type:"" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqaYFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtlKStsd2HVcUfpOyXGEuTRJ0l36AOB2NzFbApRnyI5uxoMQC31SrkzNBzkm7jAGfhKV5YE%25vqCycyLRgcDYaxPXSrH1eMdn8wsocoiZUMdM4FnKJTg95x96PDCroSeWHmMtsd8s3cUfiFWXGE45mJ0lgCZOB2PzEbAp7oMIkbX1ZxWTTg9Ukm6tTuweSc6bm9tsdHHTcUfaLjXGEsGRJ0lUHtOB2GQnbApFfII5uCoMQC3zCOkzN7P9m7sDgubYwR9hDvQ9vkpj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1LfIVf&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"},
    {name:"S-Class" , price:"Starting from ₹ 1,64,50,000.00" , type:"" , image:"https://assets.oneweb.mercedes-benz.com/bbd/images/v1/4448/3/92/85982b548bb4c2e321f264d9359bd3bcd1f02.png?im=Crop,rect=(70,35,460,260);Resize,width=700"} ,
    {name:"Mercedes-Maybach S-Class" , price:"Starting from ₹ 2,57,00,000.00" , type:"" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbSFqtyO67PobzIr3eWsrrCsdRRzwQZv9IZbMw3SGtlKStsd2HtcUfp80XGEubYJ0l36xOB2NS5bApj7bI5uVKDQC31MrkzNwTbm7jZ6vhKVFKE%25vq9UTyLRDGmYaxWbSrH1KJtn8wvOyoiZLbgM4Fa4MTg9HvZ6PD8LmSeWiXRtsd4YTcUfgrcXGEzymJ0l7IVOB2KQObApvdyI5uLfJQC3akOkzNHmdm7jQ71hKVP0W%25vqeIDyLRsYWYaxCXhrH1zHdn8w7QwoiZKq1M4FvyFTg9L6O6PDaSoSeWHthtsd8BQcUfiAWXGEWbSJ0lCrnOIJtR1q9ooiZeIQM6o2xgTSMsQ26PDL7mSeWvK%25tsdPvQcUfercXGE1nwJ0lB0lOB2A81bA4wHEcmqN1IwCr1vWwpnIu2fzzjFm93Su9Q6DF1s1n2nvligKfLlCVz9Xu9&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"}
    ];
    let answer=limoArray.map(x=>
      <div id="limousine">
      <h5 style={{"textDecoration":"underline"}}>{x.name}</h5>
      <p>{x.price}</p>
      <p><img id="limo" src={x.image}/></p>
      </div>);
      
      let suvArray = [ {name:"GLB" , price:"Starting from ₹ 63,80,000.00" , type:"New" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyStsd2JQcUfpOyXGEuTRJ0lV0VOB2qM%25bApUAbI5uG4zQC30h7kzNBtum7j86ZhKViYN%25vq4yTyLRhAmYaxU0ErH1GCfn8w0hyoiZBJZM4FvIMTg9LtV6PDa%25mSeWHnRtsd8B3cUfiA1XGEWnjJ0lCorOB2znobQOcxwRDMM4FsQkTSMp1P6tTUkpSeWawMtsdLYqcUfeOyXGE1FyJ0lBHtOB2A85bAp5ToI5uCfJQCPFi2J%25xVZkF7Dg2oA3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"} ,
      { name:"GLC" , price:"Starting from ₹ 62,00,000.00" , type:"" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqaW7qtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtxyOtsd2vTcUfp8qXGEubYJ0l3CrOB2qr%25bApRnoI5uxoNQC31CQkzNwtnm7jA7mhKV5YL%25vqCuqyLRgcDYaxPXSrH1eHDn8wsTxoiZr7XM4FnslTg95zT6PDC7NSeWHmItsd8JGcUfiryXGE4TBJ0lg6ZOB2PbEbApe7RI5usKIQC3UvWkzNpTwm7ja7IhKVHXM%25vq8cXyr%25kWfDpJJ0lCrnOIJRdAbQOznRI5ueeIQC3PsXkzN5%25dm7jCyShKVvSM%25vqLtcyLRaLmYaxH0ErH18Cln8wioyoiZ4MIM4zuA1YtEWpTuP9pGb8FIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700" },
      {name:"GLE" , price:"Starting from ₹ 88,00,000.00 " , type:"" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqaY7qtyO67PobzIr3eWsrrCsdRRzwQZ63pZbMw3SGtAmOtsd8hQcUfiANXGE5YrJbXSqxVFnn8wPbIoTnlR4M6oeIlTg9vvO6PKNCZnX2f3SNKL7sT9DkSW9wUUEVXqdYWqtyRV3H3k9kBF7v0wAFslUqoWq&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"} ,
    
      {name:"GLS", price:"Starting from ₹ 1,19,00,000.00" , type:"" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqaSFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtlKUtsd2HdcUfp8qXGEubmJ0l3IrOB2NS1bApj79I5uxoYQC30CQkzNB%25dm7jAhShKViSF%25vq4tTyLRgOFYaxPrSrH1en%25n8wso3oiZr51M4FACMTg95zp6PDCruSeWHmMtsd8s3cUfiOqXGE4bBJ0lg6AOB2PzqbApe79I5usK2QC32MrkzNptYm7jaSthymI9WFlccUfAyYXOcVD0JbX5YVOB2gBEbAp4PxI5uBo2QC3AE3kzN7Tnm7jK63hKVvKQ%25vqLUkyL0fsjko9wdYf0AGglfRcYxqN88Zlo21Ix2rbpldCdcqcgVGB4NPVHF82mx2&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"},
      {name:"Mercedes-Maybach GLS" , price:"Starting from ₹ 2,92,00,000.00" , type:"" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq4EeqtyO67PobzIr3eWsrrCsdRRzwQZ6kvZbMw3SGtGyItsd2HVcUfp8lXGEubmJ0l3IrOB2NS1bApj79I5uxoYQC31MWkzNwznm7jZaShKV5SM%25vqCtkyLRzLyYax7oprH1KI%25n8wvQnoiZLMIM4FGIJTg90tT6PDBSbSeWAtMtsd5cxcUfSUuXGEtadJ0lcIhOB2a8RbApHPwI5usoYQC3UC1kzNGJKm7j0hShKVBHF%25vqA8lyLR5iVYaxVXSrH1qJrn8wP84oiZeIQM6oY2ulVkkzNL6Sm%25kFpKhymaSF%25vqBBTyLR0AWYaxvaprH1LBtn8waVwoiZ3qoM4Fg4FTg9Pzn6PDeLFSeWswRtsLV79MOuljcVLHv5dUdhcfWF002ROxEnfxXr1RjijhWh5DvaAFCDGp0xTfx&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"},
      {name:"EQB" , price:"Starting from ₹ 74,50,000.00" , type:"New" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq5JFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtGyStsd2sDcUfp8fXGEuiRJ0l3IhOB2NQObApjkoI5uVcZQC31C1kzNwtnm7jA7mhKV5XN%25vq4t9yLRgLFYaxPoqrH1eMqn8wsocoiZrb1M4FnKJTg95z36PDCLuSeWzQMtsd8htcUfiO1XGE4nXJ0lgorOB2PSFbApeIoI5usKxQC3UvWkzNp%25bm7juOrhKVHtc%25YhQDd92XXGE5YrJbXqWBOIJhrcbAp4TZI5uBmuQC3AhTkzN5ESm7jK7IhKVvsQ%25vqLrdyLRaOXYaxHNhrHAlGqhTWFEnlipEqEs1JnwxV449pTuZkwuoQ3pE7EJxJeRB5PVsRiD4u%25wu&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"} ,
      {name:"EQC" , price:"Starting from ₹ 99,50,000.00" , type:"New" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq5q3qtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm90M19Q6FjcBXBUuXGEZi3J0lFINOB29WjbApDtVI5uVeZQC3qhrkzNR%256m7jxyFhKV1XN%25vqwI9yLRZQRYaxFkErH19grn8wDPwoiZWeIM4FlIJTg92Qk6PDpkdSeWueStsd3HpcUfNOqXGEjnmJ0lVDtOB2qW1bApRd9I5uxKxQC31vQkzNwo6m7jA6ShKV5KV%25vqCUjyLRznDYax7o8rH1Kmln8wsOfoiZUbXM4FG4wTg90gE6PDBcmSeWAyItsd5cQcUfSUkXGEtadJ0lc4qOB2XQ%25bApJdlI5uOcJQC3bkOkzN4TZm7jgemhKVPp9%25vqAtTyLR5LDYaxC5drH1zItn8w7V4oiZK%25XM4FvyMTg9LYe6PDarqSeWHtMtsd8cDcUfiXyXGE45jJ0lgCJOB2Pz1bApe79I5ulouQC32EpkzNLTum7ja7IhKVH0h%25vq8JTyLRiOyYax4bJrH1gObnMr%25E2fNII5uKMTQmIwlzkhQvTwm7jqOvhKV0ph%25vqGBIyLRKL2Yaxv0SrH1LMun8waTboiZHkZM4F8QDTg9iRN6PD4I3SeWqmItsdRHxcUfG%25kXGE0yYJ0lB0VOB2ABcbAp5iXI5uC4ZQC3zsFkzN7mbm7sDgubYwR9hDv%259ycBj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1LfIVf&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"} ,
      {name:"GLC Coupé" , price:"Starting from ₹ 72,50,000.00" , type:"New" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqaW7qtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlajtsd2J%25cUfpMqXGEu5YJ0lVYhOB2qrnbApRn3I5ux5IQC31SrkzNBzNm7jAyvhKV5pV%25vq4t9yLRgc6YaxPoqrH1eIDn8wYAxoiZreEM4FACMTg95vk6PDakbSeWHXUtsd8Y%25cUfiM0XGE4TwJ0lgOfOB2PzqbApe7bI5usKDQC32M1kzNLtnm7jaSthymI9WFlccUfAyYXOcVD0JbX5YVOB2igSbAp0k9I5uBmMQC3AX7kzNWzum7jK6ohKVvKQ%25vqLUdyLRaYmYaBEUVmMDZfrE81fzcExXr1RjiiF2MpwQ1pnIu2fzfXRXPq0Agjeq89iph1p&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"} ,
      {name:"GLE Coupé" , price:"Starting from ₹ 1,63,50,000.00" , type:"New" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbELqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlaWtsd3hQcUfNUkXGEPGXJ0leOrOB2KBjbApvkbI5uLQYQC3bgpkzNI%25nm7jgeFhKVPbQ%25vqAtkyLR5LDYaxCo8rH1zmrn8w7hwoiZK%25gM4FvslTg9LUV6PDZkbSeW0eUtsdB%25ycJtTjqNwYYax4JOroYfV8nMrgOfoiZ7qZM4FzRETg9igV6PD41DSeWqD2tsdUvTcUfGL0XGE0idJ0lBIZOB2AWFbAp5tRI5uCQ2QC3SMFkze94pOy1qFm9eUP0N9NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"} ,
      {name:"GLA" , price:"Starting from ₹ 46,50,000.00" , type:"New" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZYVHZbMw3SGtGyItsd4vGcUfi%25kXGE5YrJbXSqxVFnn8wPbIoTnlR4M6oeIlTg9vt96PDVxkSevjzFoJpENtjUqKMkgWmtdDZGGlqJRfrdRcYxqN8NmDmA9KLBZ59U2GRMdR&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"} ,
      {name:"G-Class" , price:"Starting from ₹ 1,72,00,000.00" , type:"New" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9eW39Q6FjcBX5LNXGECnXJ0lCnJOB2znObAp7oMIkbX1ZxWTTg9Ukm6tTuweSc6GmutsdBFTcUfzA6XGE2XXJ0lp%25lOB2us%25bAp32oI5uE5ZQC3lXFkzN2Lwm7jpSohKVuhQ%25vq37TyLRNHVYax8oxrH1CJ1n8wTkboiZ6tEM4FSGwTg9C6O6PD4hoSeWg%25StsdR%25%25cUfxwyXGE1RBJ0lXzVOB2JO%25bApO0yI5uJQuQC3FhQkzN9tdm7jDtDhKVWkV%25vqdmcyLRrGDYaxNOhrHAlGqhTWFEnlkCE7Zl1JnwxV449pTuZkwuoQ3pE7EJxJeRB5PVsRiD4u%25wu&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"} 

    ];
  
      let answer1=suvArray.map(x=>
        <div id="suvcar">
        <h5 style={{"textDecoration":"underline"}}>{x.name}</h5>
        <p>{x.price}</p>
        <p><img id="suv" src={x.image}/></p>
        </div>);
  
         let hatchObj =  {name:"A-Class Hatchback" , price:"Starting from ₹ 83,80,000.00 " , type:"" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNpFqtyO67PobzIr3eWsrrCsdRRzwQZUOBZbMw3SGtlXMtsd2oVcUfN%25kXGEjiYJ0lVoxOB2srqbApUiCI5uG62QC30STkzNHmnm7jQyIhKVP09%25vqeIkyLR5c6YaxCaWrH1zIOn8w7oboiZKeNM4F1SrTg9Uhk6PDGmhSc6o3jux%25%25vq8cXyr%25WNaYny708rH1CM1n8w5VNoiZH6IM4FNxbTg9Pzn6PDe7NSeWsnutsLV79MOuljcVL2vyR7dhcfWF002ROxEnfxXr1RjijhWh5DvaAFCDGp0xTfx&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"};
         
         let answer2=[
          <div id="hatchback">
           <h5 style={{"textDecoration":"underline"}}>{hatchObj.name}</h5>
           <p>{hatchObj.price}</p>
           <p><img id="hatch" src={hatchObj.image}/></p>
           </div>
  
         ];
  
            let cabrObj =  {name:"E-Class Cabriolet" , price:"Starting from ₹ 1,30,00,000.00" , type:"New" , image:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqr8FqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtGyStsd2HVcUfpOyXGEuTRJ0l3OfOB2qrnbApRn3I5ux6YQC30MrkzNBlkm7jAhShKViSF%25vq4tTyLRgLFYaxPrSrH1yCtn8w0AxoiZB6EM4FAyrTg9LQT6PDaPpSeWHw9tsd8BQcUfiA1XGE5YrJbXSqxVFnn8wPbIoTnlR4M6oeIlTg9vtO6PDK1ASeWgKhtsdPHQcUfeOyXGE1FqJ0lBYrOB2A85bAp5k9I5uCQ2QCPFi2J%25xVZkF760yvx3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE040,DZO&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=700"};
            let answer3=[
              <div id="roadster">
           <h5 style={{"textDecoration":"underline"}}>{cabrObj.name}</h5>
           <p>{cabrObj.price}</p>
           <p><img id="road" src={cabrObj.image}/></p>
           </div>
            ]
    return(
    <>
       <h1 style={{"margin":"20px","color":"white"}}>Our Vehicles</h1>
      <hr/>
      <h3 id="h">Limousine</h3>
      <div id="x">
      {answer}
      </div>
      <h3 id="h">SUV Range</h3>
      <div id="x">
      {answer1} </div>
      <h3 id="h">HatchBack</h3>
      <div id="x">
      {answer2}
      </div>
      <h3 id="h">Cabriolets/Roadsters</h3>
      <div id="x">
      {answer3}
      </div>
      <div id="foot">
      <Footer></Footer>
      </div>
        </>
    )
}
export default Products;