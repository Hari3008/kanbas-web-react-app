import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export default function AssignmentsControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-2 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>

      <button id="wd-view-progress" className="btn btn-lg btn-secondary me-2 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
        </button>
        <div className="float-end me-5 " >
          <div className="input-group mt-1" style={{ width: '300px' }}>
            <span className="input-group-text" id="basic-addon1">
              <FaSearch />
            </span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search..." 
              aria-label="Search" 
              aria-describedby="basic-addon1" 
            />
          </div>
        </div>

    </div>
);}
