export default function Friend ({friend}){
console.log(friend);
// console.log(address);

const {name , email ,id,company}=friend
    return (
        <div>
            <p>ID:{id} </p>
            <h4>Name: {name} </h4>
            <h4>Email:{email} </h4>
         <p>{friend.address.street}</p>
            {/* <p>{company}</p> */}
            {/* <h6>Address:{address} </h6> */}
        </div>
    )
}