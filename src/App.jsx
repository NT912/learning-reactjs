import { useState } from "react";
import "./App.css";

function SetName(props) {
  return (
    <div>
      <input
        type="text"
        value={props.name}
        onChange={(event) => props.setName(event.target.value)}
        placeholder="Nhập tên của bạn..."
      />

      <p>Gõ vào ô trên để thấy tên thay đổi tức thì!</p>
    </div>
  );
}

function LikeButton() {
  const [like, setLike] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          const newLike = like + 1;
          setLike(newLike);
          if (newLike > 10) {
            alert("WOW!!!");
          }
        }}
      >
        👍 Thích: {like}
      </button>
      <button
        onClick={() => {
          setLike(0);
          alert("Đã xóa hết lượt thích!");
        }}
      >
        Reset
      </button>
    </div>
  );
}

function UserInfo(props) {
  return (
    <div>
      <span>👤</span>
      <strong>{props.userName}</strong>
    </div>
  );
}

function PostContent(props) {
  return (
    <div>
      <p>{props.content}</p>
    </div>
  );
}

function App() {
  const [name, setName] = useState("Nhật Trường");
  const [friends, setFriends] = useState(["Nguyen Van A", "Le Thi B"]);

  const handleAddFriend = () => {
    setFriends([...friends, name]);
    setName("");
  };

  return (
    <div>
      <SetName name={name} setName={setName} />
      <button onClick={handleAddFriend}>Thêm bạn</button>
      
      <UserInfo userName={name} />

      <hr />
      <h3>Danh sách bạn bè:</h3>
      {friends.map((fName, index) => (
        <UserInfo key={index} userName={fName} />
      ))}
    </div>
  );
}

export default App;
