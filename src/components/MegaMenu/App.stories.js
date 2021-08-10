import React from "react";
import "./styles.css";
import { folders } from "./data";
import RecursiveFolder from "./RecursiveFolder";

export default {
  title: 'Mega Menu'
}
export const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [unfoldedIds, setUnfoldedIds] = React.useState([]);
  return (
    <div className="MegaMenu">
      <div>
        <div className="recursive-selector" style={{ color: isOpen ? '#ba5710' : '#495057'}}>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span> Content </span>
          </div>

            
        </div>
        {isOpen && folders.length && (
          <div className='wrapper'>
              {<div
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className='closemega'>x</div>}
            <div
              // <motion.div
              className="recursive-selector-collapsed "
              initial={{
                height: 0,
                opacity: 0
              }}
              // animate={{
              //   height: "auto",
              //   opacity: 1
              // }}
              exit={{
                height: 0,
                opacity: 0
              }}
            >

              <div className='check'>

              {folders
                .filter((dir) => !dir.parent_id)
                .map((parent) => (
                  <RecursiveFolder
                    className='RecursiveFolder'

                    folder={parent}
                    folders={folders}
                    tab={100}
                    unfoldedIds={unfoldedIds}
                    setUnfoldedIds={setUnfoldedIds}
                    className={`dir.className` + (unfoldedIds ? ' openmenu' : '')}
                  >
                    
</RecursiveFolder>
                ))}

            </div>

            </div>
            
            
          </div>
        )}
      </div>
    </div>
  );
}
