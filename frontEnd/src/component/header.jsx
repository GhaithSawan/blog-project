import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPen } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { LuFileSignature } from "react-icons/lu";
import { FaRegPlusSquare } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { RiLoginBoxLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#0275d8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className=""
      >
        <Container
          fluid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Navbar.Brand
            href="#"
            className=" mx-lg-5"
            style={{ flex: "1", color: "#fff" }}
          >
            BLOG{" "}
            <FaPen
              style={{
                color: "#fff",
                fontSize: "20px",
                margin: "0px 0 5px 5px",
              }}
            />{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                fontSize: "20px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "25px",
              }}
              navbarScroll
            >
              <Link to="/" style={{ color: "#fff" }}>
                <IoHomeOutline style={{ margin: "0 5px 3px 0 " }} />
                Home
              </Link>
              <Link to="/posts" style={{ color: "#fff" }}>
                {" "}
                <LuFileSignature style={{ margin: "0 5px 3px 0 " }} />
                Posts
              </Link>
              <Link to="/create" style={{ color: "#fff" }}>
                <FaRegPlusSquare style={{ margin: "0 5px 3px 0 " }} />
                Create
              </Link>
              <Link to="/admin" style={{ color: "#fff" }}>
                <RiAdminLine style={{ margin: "0 5px 3px 0 " }} />
                Admin Dashboard
              </Link>
            </Nav>
            <div>
              <Button variant="light" style={{ margin: "5px" }}>
                <Link to="/login" style={{ color: "black" }}>
                  <RiLoginBoxLine style={{ margin: "0 5px 3px 0 " }} /> Login
                </Link>
              </Button>{" "}
              <Button variant="light" style={{ margin: "5px" }}>
                <Link to="/register" style={{ color: "black" }}>
                  <IoPersonAddOutline style={{ margin: "0 5px 3px 0 " }} />
                  Register
                </Link>
              </Button>{" "}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
