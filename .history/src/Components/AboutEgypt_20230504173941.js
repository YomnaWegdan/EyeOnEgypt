import React , {Fragment} from 'react'
import img from '../images/2020082405030838.jpg'
import imag from '../images/shutterstock_1257009283.png'
import image from '../images/pyramids-2371501_1280.jpg'
import img1 from '../images/loc.PNG'
import img3 from '../images/currency.PNG'
import img2 from '../images/lang.PNG'
import img4 from '../images/terr.PNG'
import image1 from '../images/Downtown-Cairo-Zamalek-the-Nile-river.jpg'
import image2 from '../images/2b1f01ee6f5303287e41261aaf55762e.jpg'
import image3 from '../images/_Luxor .jpg'
import image4 from '../images/Things-to-do-in-Aswan.jpg.optimal.jpg'
import image5 from '../images/istockphoto-1146931869-170667a.jpg'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'


const AboutEgypt = () => {
  const navigate = useNavigate();

  return (
    <Fragment>            
    <div style={{marginTop:'20px' ,  fontSize:'18px' , overflowX:'hidden'}}> 
    <div className='my-3' >
  <BsArrowLeftCircleFill onClick={() => navigate(-1)}
  style={{width:'40px' , height:'40px'  , color: '#FFE8BD' ,cursor:'pointer', marginLeft:'9%' }}/>
  <span style={{color: 'rgba(100, 79, 10, 0.65)' , fontWeight:'700' , marginInline:'10px'}}>About Egypt</span>
  </div>
  <div className='image '>
  <div>
  <img src={img} alt=''   style={{width:'17%', height:'240px', float:'right', marginTop:'70px'  , marginRight:'10%' , display:'block' }}/>
  <img src={imag} alt=''  height={240} style={{width:'17%', float:'right', marginTop:'70px'  , marginRight:'1%' , display:'block' }}/>
  </div>
  <img src={image} alt=''  height={260} style={{width:'35%', float:'right', marginTop:'21%',  marginRight:'-35%' 
}}/>


  {/*  <img src={image} alt=''  height={260} style={{width:'540px', float:'right', marginTop:'340px'  , marginRight:'-35.5%' }}/>*/}
  </div>
 

    
          
            <div className='text' style={{marginLeft:'10%' , width:'38%',}}>
            <h3  style={{color:'#FFAE0C'}} > Egypt History</h3>    
            <p style={{marginTop:'20px' }}>Egypt is without a doubt of the greatest civilization ever created.
            The history of Egypt dated back to 40,000 BC years but all the glory
            is focused on the last 5170 years when Egypt took its first step and became
            a unified country under the rule of one king called Narmer, the founder of
            the first dynasty. Through the years, Egypt established her repudiation
            as a powerful kingdom thanks to the annual river flood that acted as 
            the bloodstream and the life bringer of Egypt as the ancient Greek 
            historian Herodotus stated: 'Egypt is the Gift of the Nile'. 
            For the next three millennia, many great pharaohs of strong men and women 
            worked on driving the country to new heights of wealth and power.
            During this time many great monuments all over the county were constructed
            and countless beautiful artifacts were created to protect their 
            achievements from oblivion and immortalize their legacy for many
            generations to come. After the end of the last native dynasty by 
            the hand of the Persians in 341 BC and soon enough came the Greek, 
            Romans and Byzantines then finally came the Arabs who introduced
            the religion of Islam and the current language Arabic during the 
            7th century under the leadership of the Mamluks and the Fatimid 
            who filled the city of Cairo with countless mosques and schools 
            such as Al-Azhar which was the second largest university in history. 
            The country then became under the rule of the Ottoman empire in 1517 until the 
            empire fell and the country under British rule in 1882 until it gained its independence in 1922.</p>   
  
  {/*<p style={{marginTop:'20px' }}>Egypt, Um-El-Dunya, literally translated as Mother of the World, is an Arabic expression which Egyptians and others have used over history in reference to the country’s ancient civilization, superlatives and achievements making it a unique tourist destination. The “Mother of the World” houses a plethora of unrivaled tourist and historical attractions and thrives with archaeological treasures and wonders rendering it a classic vintage of history and civilization. Tourists travel far and wide to explore the Pyramids and the Sphinx and trace remnants of the ancient Egyptian civilization kaleidoscope of Islamic, Coptic, Roman, Greek and Pharaonic colors.

  Egypt is the cradle of ancient civilization nesting art and temples. The beautiful stretches of picturesque beaches are a magnet for sun-lovers. Every city casts its own spell, some harbor old temples while others boast of immaculate handicrafts. However, they never fail to radiate history, culture and dynamism.
  
  Egypt is the throbbing heart of the Arab world amalgamated in beauty, fused with warmth and sanctified by holiness. It is literally a global historical archive, giving rise to civilizations and bewildering a great many people celebrating it. It is indeed the capital of art, life, culture, science and religion.</p>
  */}    

 
  </div>



        <h2 style={{textAlign:'center', marginTop:'50px' , color:'#FFAE0C'}}>General Information</h2>
        <div className="row text-center d-flex justify-content-center pt-3 ">
                    <div className="col-md-2 mx-3 ">
                    <div><img src={img1} alt='' style={{width:'50px', height:'50px'}}/></div>
                        <h6 className='font-weight-bolder mt-2'>
                        Capital: <div className=' mt-1' style={{color:'#B99214'}} >Cairo</div> 
                        </h6>
                    </div>
                    <div className="col-md-2 mx-3">
                    <div><img src={img2} alt='' style={{width:'50px', height:'50px'}}/></div>
                        <h6 className=" font-weight-bold mt-2">
                        Official language: <div className=' mt-1'  style={{color:'#B99214'}}>Arabic</div>	
                        </h6>
                    </div>
                    <div className="col-md-2 mx-3">
                    <div><img src={img3} alt='' style={{width:'50px', height:'50px'}}/></div>
                        <h6 className=" font-weight-bold mt-2">
                        Currency: <div className=' mt-1'  style={{color:'#B99214'}}>Egyptian pound	</div>	
                        </h6>
                    </div>
                    <div className="col-md-2 mx-5">
                    <div><img src={img4} alt='' style={{width:'50px', height:'50px'}}/></div>
                        <h6 className=" font-weight-bold mt-2">
                        Territory:<div className=' mt-1'  style={{color:'#B99214'}}>1 001 450 km²</div> 

                        </h6>
                    </div>
         
         
        </div>
        <h2 style={{textAlign:'center', marginTop:'50px' , color:'#FFAE0C'}}>What See and Where ?</h2>
        <div className='mt-5 ' >
        <div style={{ display:'inline-block'  , width:'38%' , marginLeft:'10%'}}>
        <h3 style={{color:'#d08c11'}}>Cairo</h3>
        <p> 
        Start exploring the country from Cairo, the capital of Egypt. This city is of special importance to the Islamic world. It's often called the city of thousands of minarets. It's home to about ten million people. In Cairo, the branches of history are intertwined: modern skyscrapers do not create dissonance with ancient mosques. Cairo is roughly divided into two parts: historical and contemporary. The old city is located on the east bank of the Nile. There are practically no new buildings on its territory; it is an area of ancient mosques. But the modern part of Cairo does not differ from the usual urban landscapes. There are government buildings and office skyscrapers made of glass and concrete.         </p>
        </div>
        <img src={image1} alt='' style={{ width:'38%' , height:'260px', marginTop:'50px', marginRight:'10%' , float:'right' }}/>
      </div>
      <div className='mt-5 ' >
        <div style={{ display:'inline-block'  , width:'38%' , marginLeft:'10%'}}>
        <h3 style={{color:'#d08c11'}}>Giza</h3>
        <p> 
        When we hear about Giza, the imagination immediately draws the outlines of the Great Sphinx as well as the well-known pyramids: Cheops, Khafre, and Menkaure. The place is exciting because of the great history of ancient Egyptian burials. Not only the pharaohs, but also all their closest circle were buried here: wives, brothers, sisters, children, and servants. It's also worth coming here to see the Village of the Pharaohs. The tour starts with a barge ride along the canals. Moreover, Giza offers the largest zoo in Egypt, where the natural habitat for animals is created.         </p>
        </div>
        <img src={image5} alt='' style={{ width:'38%' , height:'260px', marginRight:'10%' ,  marginTop:'50px', float:'right' }}/>
      </div> 

      <div className='mt-5 ' >
        <div style={{ display:'inline-block'  , width:'38%' , marginLeft:'10%'}}>
        <h3 style={{color:'#d08c11'}}>Alexandria</h3>
        <p> 
        Alexandria is the largest port city in Egypt, combining ancient Egyptian architectural structures and buildings in the Victorian colonial style. Comfortable beaches allow you to have a rest for the body, and rich culture offers attractions for the soul. Start exploring the city by visiting the National Museum, which is located in the center. The exhibits represent four historical eras: ancient, Greco-Roman, Coptic, and Islamic. Be sure to visit the catacombs of Kom el-Shouqafa. An unusual structure stores a whole network of funerary halls. The Pompey's Pillar — a famous monument of ancient times — is also popular with tourists. You should also admire the extraordinary architecture of the Egyptian Khedive's palace, the Abu al-Abbas al-Mursi Mosque and the Citadel of Qaitbay, built on the ruins of the lighthouse in Alexandria. 
        </p>
        </div>
        <img src={image2} alt='' style={{ width:'38%' , height:'260px', marginRight:'10%' ,  marginTop:'50px', float:'right' }}/>
      </div> 

      <div className='mt-5 ' >
        <div style={{ display:'inline-block'  , width:'38%' , marginLeft:'10%'}}>
        <h3 style={{color:'#d08c11'}}>Luxor</h3>
        <p> 
        Luxor is the city that once housed the capital of Ancient Egypt, Thebes. The city contains numerous treasures and architectural monuments included in the UNESCO World Heritage List. The territory of the city is roughly divided into "City of the Living" and "City of the Dead". The "City of the Living" is a typical residential area, which occupies the right bank of the Nile. Tourists come here to see how ordinary Egyptians live and how the Luxor's temple looks like. "The City of the Dead" is located on the opposite side of the Nile. The wide diversity of archaeological sites beckons tourists. But you should mind that the climate here is hot enough, precipitation is a rare phenomenon, which is most often manifested in the form of dew.        </p>
        </div>
        <img src={image3} alt='' style={{ width:'38%' , height:'260px', marginRight:'10%' ,  marginTop:'50px', float:'right' }}/>
      </div> 
      <div className='mt-5 ' >
      <div style={{ display:'inline-block'  , width:'38%' , marginLeft:'10%'}}>
      <h3 style={{color:'#d08c11'}}>Aswan</h3>
      <p> 
      Nile islands around the city extended from the high dam to the north of Edfu, some people of the Nubian villages and islands counts on farming and handmade items as a source of living and  some already took place in governmental jobs, not only the main city of Aswan that has full services but also, the surrounding islands provided by hospitals, schools, and transportations, some of the islands are uninhabited because it's considered to be an archaeological areas like the crocodile island and elephantine island which was a region linking the South and the North in the trade between  Egypt and the rest of Africa. Aswan also considered as the main gate of southern Egypt beside Luxor city and a huge economical source for the country     
      </p> </div>
      <img src={image4} alt='' style={{ width:'38%' , height:'260px', marginRight:'10%' ,  marginTop:'50px', float:'right' }}/>
    </div> 
    <Footer/>


        {/*    <video style={{marginLeft:'10%', width:'38%' }} controls>
            <source src={require('../images/video.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
          </video>

          <div style={{marginLeft:'10%' , width:'38%', display:'inline-block'}}>

          <h2>The main cities in Egypt</h2>
          <p> 

          Cairo is the main city as it is the capital, but other cities like Alexandria, Aswan, Luxor, Sharm El Sheikh, Dahab, Gouna, and Hurghada are also main cities for tourist attractions and the economy too.
          </p>
          </div>
          <div style={{marginLeft:'10%' , textAlign:'center' , width:'38%' , marginTop:'40px' }}>

         <h2>Is Egypt safe?</h2> 
 
<p>
Egypt is safe to travel to. The new government has implemented very strict rules on sexual harassment and the crime rate is very low and even though you will feel safe if traveling on your own, for the language purpose Egypt is best enjoyed with the presence of a tour guide who knows the area and can speak Egyptian Arabic.
</p>  </div> */}  </div>       </Fragment>
  )
}

export default AboutEgypt
