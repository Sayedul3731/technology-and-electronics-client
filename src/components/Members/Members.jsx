
import { useEffect, useState } from "react";
import Member from "../Member/Member";


const Members = () => {

    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('https://technology-and-electronics-server-ctbe8l6px-ate-yours-projects.vercel.app/member')
            .then(res => res.json())
            .then(data => {
                setMembers(data)
            })
    }, [members])

  
   
    return (
        <div className="my-20">

            <h1 className="text-5xl font-semibold text-center">Our Team Members</h1>
          <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {
                members.map(member => <Member key={member._id} member={member}></Member>)
            }
          </div>
            
        </div>
    );
};

export default Members;