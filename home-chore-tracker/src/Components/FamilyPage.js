import React from "react";
import { Link } from "react-router-dom"


function FamilyPage() {
  return (
    <div>
      <h1 className="family-page">Welcome to family home chore tracker</h1>
      <div>
        <Link to="/ParentTaskList"><button>Assign Tasks</button></Link>
      </div>
      <div>
        <Link to="/ChildTaskList"><button>Child Task List</button></Link>
      </div>

    </div>
  );
}

export default FamilyPage;