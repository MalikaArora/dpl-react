import React, { useState, useRef } from "react";
import './styles.css';
// import { motion, AnimatePresence } from "framer-motion";
const RecursiveFolder = (props) => {
  const [isUnfolded, setIsUnfolded] = useState(false);
  const [key, setKey] = useState("selector-key-init");
  const children = props.folders
    ? props.folders.filter((folder) => folder.parent_id === props.folder.id)
    : [];

  const selectorRef = useRef(null);
  const selectorChildren = useRef(null);

  return (
    <div>
      <div
        ref={selectorRef}
        className={"recursive-selector-parent " + (props.folder.className ? props.folder.className : '') + (props.unfoldedIds?.includes(props.folder.id) ? ' openmenu' : '')}
        style={{ zIndex: props.tab }}
        data-parent-id={props.folder.parent_id}
        key={key}

        onClick={(e) => {
          e.stopPropagation();
          //props.setUnfoldedIds ? props.setUnfoldedIds([props.folder.id]) : null;
          props.setUnfoldedIds((unfolded) => [...unfolded, props.folder.id]);

          props.setUnfoldedIds((unfolded) =>
            unfolded.filter((f) => {
              // return (f !== props.folder.id)
              for (var keys = 0; keys < props.folders.length; keys++) {
                            console.log(props.folders[keys]);
                            if (props.folders[keys].id == f) {
                              console.log("props.folder[keys] ", props.folders[keys]);
                              var parentid = props.folders[keys].parent_id;
                              console.log("unfolded ", unfolded);
        
                              //  return ([...((parentid === props.folder.parent_id) && (f !== props.folder.id)),props.folder.id]);

                              // return ([...(((parentid !== props.folder.parent_id) && (f !== props.folder.id)) && {f}), props.folder.id]);
                              // return [...unfolded, props.folder.id];
                              if((parentid !== props.folder.parent_id) && (f !== props.folder.id))
                              {
                                console.log("pushed ", f);
                                props.setUnfoldedIds((unfolded) => [...unfolded, f]);

                              }
                              // return f;
                            }
        
            }
            props.setUnfoldedIds((unfolded) => [...unfolded, props.folder.id]);
            console.log(f);
                                          // return ([...(f), props.folder.id]);

          })

          );
        }}
        onMouseLeave={(e) => {
          // if (e.current && e.current.includes(selectorChildren))
          // e.stopPropagation();
          // Don't close the menu if entering the nested target
  
          // const hoveredElement = e.target?.closest("div[data-parent-id]");
          // const hoveredElementParentId = hoveredElement?.getAttribute(
          //   "data-parent-id"
          // );
          // if (
          //   hoveredElementParentId &&
          //   parseInt(hoveredElementParentId, 10) === props.folder.id
          // ) {
          //   return;
          // }
          // console.log("OUT!");
          // props.setUnfoldedIds((unfolded) =>
          //   unfolded.filter((f) => {
          //     for (var keys = 0; keys < props.folders.length; keys++) {
          //                   console.log(props.folders[keys]);
          //                   if (props.folders[keys].id == f) {
          //                     console.log("props.folder[keys] ", props.folders[keys]);
          //                     var parentid = props.folders[keys].parent_id;
          //                     console.log("unfolded ", unfolded);
        
          //                      return ((parentid != props.folder.parent_id) && (f !== props.folder.id));
          //                     // {
          //                     //   console.log("pushed ", f);
          //                     //   unfolded.push(f);
          //                     // }
          //                     // return f;
          //                   }
        
          //   }})
          // );
  
          //const newId = e.relatedTarget?.getAttribute("data-parent-id");
          //if (newId && parseInt(newId, 10) === props.folder.id) {
          // return;
          // }
          //props.setUnfoldedIds((unfolded) =>
          // unfolded.filter((f) => f !== props.folder.id)
          // );
          //setKey(uuid());
        }}

        // onMouseEnter={(e) => {
        //   e.stopPropagation();
        //   // props.setUnfoldedIds ? props.setUnfoldedIds([props.folder.id]) : null;
        //   props.setUnfoldedIds((unfolded) =>

        //     [
        //       // ...unfolded

        //       //           props.setUnfoldedIds((unfolded) =>
        //       //   unfolded.filter((f) => f !== props.folder.id)
        //       // );
        //       // () => {
        //       //     {
        //       //       console.log("here");
        //       //       var u_unfolded = {...unfolded};
        //       //   u_unfolded.filter((f) => {
        //       //     { console.log("f", f) }
        //       //     // console.log("folder length", props.folders.length);

        //       //     for (var keys = 0; keys < props.folders.length; keys++) {
        //       //       console.log(props.folders[keys]);
        //       //       if (props.folders[keys].id == f) {
        //       //         console.log("props.folder[keys] ", props.folders[keys]);
        //       //         var parentid = props.folders[keys].parent_id;
        //       //         console.log("unfolded ", unfolded);

        //       //         if (parentid != props.folder.parent_id)
        //       //         {
        //       //           console.log("pushed ", f);
        //       //           unfolded.push(f);
        //       //         }
        //       //         // return f;
        //       //       }


        //       //     }

        //       //     console.log("unfolded ", unfolded);
        //       //   } 

        //       //   )}}



        //       // return ((props.folders[keys].parent_id != props.folder.parent_id));



        //       // && unfolded.push(f) )  )

        //       //   return ((props.folder.id==f !== props.folder.id);
        //       // })) && unfolded)}
        //       // {...((unfolded.parent_id !== props.folder.parent_id) && unfolded)}
        //       // () => {
        //       //  console.log(unfolded.parent_id, props.folder.parent_id) 
        //       //  unfolded = {...unfolded}
        //       // unfolded = { ...(unfolded.parent_id !== props.folder.parent_id) }
        //       // }

        //       // return (...unfolded)} 
        //       ...unfolded

        //       , props.folder.id])

        //       props.setUnfoldedIds((unfolded) =>
        //           unfolded.filter((f) => f == props.folder.id)
        //         );
        //       // // {...unfolded};
        //       // // () => {
        //       // // unfolded = {...unfolded};
        //       // props.setUnfoldedIds((unfolded) =>{
        //       //   unfolded.filter((f) => {
        //       //     var val;
        //       //     // var val = (function(){
        //       //     console.log("f", f, "unfolded ", unfolded);
        //       //     for (var keys = 0; keys < props.folders.length; keys++) {
        //       //       console.log(props.folders[keys]);
        //       //       if (props.folders[keys].id == f) {
        //       //         console.log("props.folder[keys] ", props.folders[keys]);
        //       //         var parentid = props.folders[keys].parent_id;
        //       //         console.log("unfolded ", unfolded);

        //       //         val = (parentid != props.folder.parent_id);
        //       //         // return f;
        //       //       }
        //       //     }
        //       //     // })();
        //       //     return ((f === props.folder.id) && val);
        //       //   })
        //       //   {console.log("en ", unfolded);}}
        //       //   )



        // }}
      // onMouseLeave={(e) => {
      //   //if (e.current && e.current.includes(selectorChildren))
      //   //e.stopPropagation();
      //   // Don't close the menu if entering the nested target

      //   const hoveredElement = e.relatedTarget?.closest("div[data-parent-id]");
      //   const hoveredElementParentId = hoveredElement?.getAttribute(
      //     "data-parent-id"
      //   );
      //   if (
      //     hoveredElementParentId &&
      //     parseInt(hoveredElementParentId, 10) === props.folder.id
      //   ) {
      //     return;
      //   }
      //   console.log("OUT!");
      //   props.setUnfoldedIds((unfolded) =>
      //     unfolded.filter((f) => f !== props.folder.id)
      //   );

      //   //const newId = e.relatedTarget?.getAttribute("data-parent-id");
      //   //if (newId && parseInt(newId, 10) === props.folder.id) {
      //   // return;
      //   // }
      //   //props.setUnfoldedIds((unfolded) =>
      //   // unfolded.filter((f) => f !== props.folder.id)
      //   // );
      //   //setKey(uuid());
      // }}
      >
        <div>
          <span>{props.folder ? props.folder.name : ""}</span>
        </div>


      </div>

      <div>


        {props.unfoldedIds?.includes(props.folder.id) &&
          //isUnfolded

          children.length > 0 && (
            <div>
              <div>


                <div
                  className={"recursive-selector-children"}
                  ref={selectorChildren}
                  style={{ zIndex: props.tab - 1 }}
                  initial={{
                    width: 0,
                    opacity: 0,
                    transform: "rotateY(180)"
                  }}
                  exit={{
                    width: 0
                  }}
                  data-parent-id={props.folder.parent_id}

                >
                  {/* <div className='closemega'>X</div> */}
                  <div className="inner-child">

                  {children.map((el, index) => (
                    <div >

                      <RecursiveFolder
                        folder={el}
                        folders={props.folders}
                        tab={props.tab - 2}
                        unfoldedIds={props.unfoldedIds}
                        setUnfoldedIds={props.setUnfoldedIds}
                      >
                    </RecursiveFolder>

                    </div>
                  ))}
                  </div>

                  {/* {!isUnfolded && props.folder.id == props.unfoldedIds[props.unfoldedIds.length - 1] ? <div
                    onClick={(e) => {
                      props.setUnfoldedIds((unfolded) =>
                        unfolded.filter((f) => f !== props.folder.id)
                      );
                    }}
                    className='closemega'>X</div> : <></>} */}
                  {console.log("length " + props.unfoldedIds[props.unfoldedIds.length - 1])}

                </div>
              </div>
            </div>

          )}
      </div>

    </div >

  );
};

export default RecursiveFolder;
