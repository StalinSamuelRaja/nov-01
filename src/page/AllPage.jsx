import MainBar from "../component/MainBar";

/* eslint-disable react/prop-types */
const AllPage = ()=>
{

  const data = [{
      name: "Top 10 High Paying Non-Coding Jobs in Data Science in 2023",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    },
    {
      name: "React vs Angular vs Vue: Choosing the Right Framework",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-React-vs-Angular-vs-Vue-Choosing-the-Right-Framework-1.webp",
     
    },
     {
      name: "Top Differences: Full Stack Developer vs Software Engineer 2023",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      
    }];
    
    return (
      <div className="app">
        {
        data.map((card,idx)=>(
          <MainBar key={idx}
          img={card.img} 
          name={card.name}
          />
        ))
      }
      </div>
    )
  }
  export default AllPage;
  
    
 
  



  
    