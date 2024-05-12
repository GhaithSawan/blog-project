import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"
function Post({ data }) {
  let date;
  useEffect(() => {
    date = new Date(data?.createdAt);
  }, []);

  return (
    <Card style={{ width: "100%", boxShadow: "0 0 5px 1px gray" }}>
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Card.Img
          style={{ objectFit: "cover", width: "300px", height: "300px" }}
          variant="top"
          src={data.image.url}
          className='imagePostHover'
        />
      </div>
      <Card.Body>
        <div className="info d-flex align-items-center  justify-content-between border-bottom border-gray  border-2">
          <Link to={`/profile/${data.user.id}`}>
            <p
              style={{
                color: "green",
                fontWeight: "500",
                fontSize: "20px",
                marginBottom: "0",
                cursor: "pointer"
              }}
            >
              Author :{" "}
              <span style={{ color: "black" }}>{data.user.username}</span>
            </p>
          </Link>

          <p style={{ color: "light-green", marginBottom: "0 " }}>{date}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between my-2">
          <h4>{data.title}</h4>
          <div>
            <Link to={`/catigoryPage/${data.caticory}`}>
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
            </Link>

          </div>
        </div>
        <Card.Text>{data.description}</Card.Text>
        <Link to={`/post/details/${data.id}`}>
          <Button className="w-100 bg-success border-0">Read More ...</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Post;
