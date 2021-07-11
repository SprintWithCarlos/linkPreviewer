
export const Card = ({props}) => {
   const {favicon} = props
   console.log(favicon)
    return (
        
       <div className="card">
           {props.videoId ? 
           (<div className="video">
              <iframe title={props.title} id="player" type="text/html" 
           src={`https://www.youtube.com/embed/${props.videoId}?enablejsapi=1&origin=http://example.com`}
           frameBorder="0"></iframe>
           <section className="bottom">
              <h3>{props.title}</h3>
           <p className="truncate">
            {props.description}
            </p>
            </section>
              </div>)
           :
           ( <a href={props.url}>
            {!props.url.includes("instagram") && (props.image || props.image_OG || props.image_Twitter) && <img src={props.image || props.image_OG || props.image_Twitter} alt={props.title} /> }
 
           <section className="bottom">
              <div className="cardHeader">
                 {(props.favicon && props.favicon.substr(props.favicon.length - 3) !== "ico" )&& <img src={props.favicon} alt={props.title}/>}
              <h3>{props.title}</h3>
              </div>
           <p className="truncate">
            {props.description}
            </p>
           </section>
         </a>)
           }
       </div>
        
    )
}
// favicon.substring(favicon.length - 3