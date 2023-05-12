 
import icon1 from "../../assets/Icons/accounts 1.png"
import icon2 from "../../assets/Icons/business 1.png"
import icon3 from "../../assets/Icons/social-media 1.png"
import icon4 from "../../assets/Icons/chip 1.png"

const Jobcategory = () => {
    const categories = [
        {
            id:"1", type:"Account & Finance", jobs:"300", img: icon1
        },
        {
            id:"2", type:"Creative Design", jobs:"100+", img: icon2
        },
        {
            id:"3", type:"Marketing & Sales", jobs:"150", img: icon3
        },
        {
            id:"4", type:"Engineering Job", jobs:"223", img: icon4
        }
    ]
     
    return (
        <section className='jobCategory py-20 bg-gradient-to-r   from-white to-white'>
                <div className='mx-auto   max-w-7xl px-2 sm:px-6 lg:px-8 max-md:px-5'>
                    <div className="title py-10 text-center max-w-2xl m-auto">
                        <h2 className=' text-5xl font-black'>Job Category List</h2>
                        <p className='my-3 text-md max-md:text-base'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className='grid grid-cols-4 max-md:grid-cols-1 items-center gap-6'>

                        {
                            categories.map(category => 
                                
                                <div key={category.id} className='  bg-indigo-50 rounded-md  py-8 px-8'>
                                    <img className=" bg-indigo-100 p-4 rounded-md" src={category.img}  alt="" />
                                    <h3  className=' font-semibold text-lg mt-5'>{category.type}</h3>
                                    <span className='my-3 text-base max-md:text-base font-thin'>{category.jobs} Jobs Available</span>
                                </div>
                                
                            )
                        }
 
                        
                        

                    </div>
                </div>
            </section>
    );
};

export default Jobcategory;