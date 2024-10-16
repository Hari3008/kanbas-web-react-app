import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsPlus } from "react-icons/bs";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span className="rounded-pill border border-light text-dark p-2 me-2">40% of Total</span>
      <BsPlus/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
