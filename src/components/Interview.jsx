

const Interview = () => (
    <div className="tab-content" data-tab-content="interview">
       <div className="grid-list">
         {/* Interview content */}
         <div className="interview-card img-holder" data-tilt="">
           <img
             src="/assets/interview-1.jpg"
             width={376}
             height={420}
             loading="lazy"
             alt="interview 1"
             className="img-cover"
           />
           <button className="btn btn:hover">Play</button>
         </div>
         <div className="interview-card img-holder" data-tilt="">
           <img
             src="/assets/interview-2.jpg"
             width={376}
             height={420}
             loading="lazy"
             alt="interview 1"
             className="img-cover"
           />
           <button className="btn btn:hover">Play</button>
         </div>
         <div className="interview-card img-holder" data-tilt="">
           <img
             src="/assets/interview-3.jpg"
             width={376}
             height={420}
             loading="lazy"
             alt="interview 1"
             className="img-cover"
           />
           <button className="btn btn:hover">Play</button>
         </div>
         {/* Additional interview cards */}
       </div>
    </div>
   );
   
   export default Interview;
   