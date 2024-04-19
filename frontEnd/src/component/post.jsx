import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Post({ data }) {
  let date;
  useEffect(() => {
    date = new Date(data?.createdAt);
  }, []);

  return (
    <Card style={{ width: "100%", boxShadow: "0 0 5px 1px gray" }}>
      <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Card.Img
          style={{ objectFit: "cover", width: "300px", height: "300px" }}
          variant="top"
          src={data.image.url}
        />
      </div>
      <Card.Body>
        <div className="info d-flex align-items-center  justify-content-between border-bottom border-gray  border-2">
          <p
            style={{
              color: "green",
              fontWeight: "500",
              fontSize: "20px",
              marginBottom: "0",
            }}
          >
            Author :{" "}
            <span style={{ color: "black" }}>{data.user.username}</span>
          </p>
          <p style={{ color: "light-green", marginBottom: "0 " }}>{date}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between my-2">
          <h4>{data.title}</h4>
          <span
            style={{
              fontSize: "18px",
              backgroundColor: "#c2743e",
              padding: "5px",
              borderRadius: "20px",
              color: "#fff",
            }}
          >
            {data.caticory}
          </span>
        </div>
        <Card.Text>{data.description}</Card.Text>
        <Button className="w-100 bg-success border-0">Read More ...</Button>
      </Card.Body>
    </Card>
  );
}

export default Post;
