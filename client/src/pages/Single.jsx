import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {

  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`} >
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>

        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis amet consequatur sapiente, dicta at illo excepturi culpa iure quos sed corporis quia esse est minima nesciunt sequi. Nostrum, ea quos?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quod harum rem at deserunt distinctio inventore debitis magni, consequatur temporibus eligendi tempora reprehenderit veritatis, praesentium autem molestiae nobis a dolore!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione enim beatae nemo dolores ullam iusto dolorum? Sunt exercitationem magnam neque laboriosam, in eligendi veniam ad inventore ea cumque eum commodi?
          <br /><br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore odio eligendi corporis suscipit reiciendis. Amet saepe, facere labore laudantium, facilis voluptas id ex earum commodi adipisci numquam praesentium fuga iste!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque odit fugiat architecto esse et fugit accusamus, ducimus quia inventore, debitis, distinctio ut facere veritatis illo dolorem qui iste. Deserunt!
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus nostrum labore eveniet. Eum quidem labore vero, officia sint aspernatur iste voluptate esse similique harum, numquam suscipit accusantium veritatis eveniet.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit sequi corrupti, perferendis in ut nesciunt possimus! Totam fugiat sed fuga, fugit ut id odit minima debitis nisi! Inventore, quo.
        </p>
      </div>
      <Menu />

    </div>
  );

};

export default Single;
