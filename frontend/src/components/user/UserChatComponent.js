import "../../chats.css";
const UserChatComponent = () => {
    return (
        <>
            <input type="checkbox" id="check" />
            <label className="chat-btn" htmlFor="check">
                <i className="bi bi-chat-dots comment"></i>
                {/* <svg width="1em" height="1em" viewBox="0 0 16 16" className="position-absolute top-100 start-50 translate-middle mt-1" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg> */}


                <i className="bi bi-x-circle close"></i>
            </label>
            <div className="chat-wrapper">
                <div className="chat-header">
                    <h6>Lets chat - Online</h6>
                </div>
                <div className="chat-form">
                    <div className="cht-msg">{
                        Array.from({ length: 20 }).map((_, id) => (
                            <div key={id} >
                            <p>
                            <b>You wrote:</b> Hello,world! This is a toast Message.
                        </p>
                        <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                            <b>Support wrote:</b>Hello,world! This is a toast Message.
                        </p>
                        </div>
                        )) }

                         
                        
                    </div>
                    <textarea
                        id="clientChatMsg"
                        className="form-control"
                        placeholder="Your Text Message"
                    ></textarea>
                    <button className="btn btn-success
                    btn-block">Submit</button>

                </div>
            </div>
        </>
    )
}
export default UserChatComponent; 