import React from "react";
import "./RightAquriam.css";
const Lipsome = () => {
  return (
    <>
      <div className="product-detilas row">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,160L26.7,144C53.3,128,107,96,160,106.7C213.3,117,267,171,320,202.7C373.3,235,427,245,480,250.7C533.3,256,587,256,640,240C693.3,224,747,192,800,192C853.3,192,907,224,960,240C1013.3,256,1067,256,1120,240C1173.3,224,1227,192,1280,176C1333.3,160,1387,160,1413,160L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            src="https://i.postimg.cc/Xvx8TtL3/image-6-copyright-840x405.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p className="deils-info">
            Varius lobortis, at et, morbi massa at praesent lectus, leo diam.
            Sodales nulla, diam ante ac ac eleifend, nunc sociosqu ac orci sit
            lorem orci, tincidunt nullam, vestibulum a eu quis. Augue suscipit
            pede accumsan auctor nunc, pretium non ut, nec non, sit ligula
            ullamcorper purus arcu pariatur placerat. Ultricies venenatis,
            ultrices aliquam auctor venenatis libero amet parturient, ut a
            ligula massa. Pellentesque in donec. Placerat tristique elit
            placerat ipsum dolor pede, eget vitae gravida, neque nulla felis
            lacinia felis exercitation fermentum, tincidunt curae felis sed
            nunc. Erat scelerisque mauris sodales sagittis. Amet magna dolor
            pede. A sodales ultricies leo natoque felis turpis, adipiscing
            turpis amet wisi massa, accumsan consectetuer integer sit feugiat,
            ac vehicula elit, volutpat nonummy porta dapibus. Risus in iaculis
            dui montes sed, viverra libero quam, id orci erat arcu, lorem nibh
            fermentum etiam sem, fermentum sit euismod proin id. Sociis litora
            duis tristique morbi, ac turpis etiam a eget cras. Quis dolor dolor.
            Penatibus pariatur dolor luctus et sem. Dolor vulputate, elit mauris
            in, nunc sociosqu odio laoreet, ut luctus. Dis suspendisse a
            praesent inceptos, eu etiam. A sit facilisi maecenas cras lacus dui,
            eget volutpat, aptent eu a luctus adipiscing nonummy vulputate,
            imperdiet vestibulum adipiscing eget velit nam sit, erat elementum
            varius. Massa augue, sed morbi diam, porttitor per maecenas etiam,
            sociis feugiat euismod mi blandit nam.
          </p>
        </div>
        <div className="similar-img row">
          <h3 className="siilar">Similar</h3>
          <div className="col-lg-3 col-sm-12 col-md-6">
            {" "}
            <img
              src="https://image.shutterstock.com/image-photo/butterfly-koi-fish-260nw-1202149084.jpg"
              alt=""
            />
            <h4>Oscar Cichlids</h4>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            {" "}
            <img
              src="https://media.istockphoto.com/photos/capture-the-moving-moment-of-siamese-fighting-fish-two-betta-fish-on-picture-id1146878795?k=20&m=1146878795&s=170667a&w=0&h=uIDsFcHqdFIizfeeGON9JhRFGq599V2Yxi5sEP0Xdy8="
              alt=""
            />
            <h4>Bristlenose Pleco</h4>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpoIXBwV7Tf8CicxlagNOsiZ-NZ6MlgLYpg&usqp=CAU"
              alt=""
            />{" "}
            <h4>Tiger Barb</h4>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34zCa7rGvtMrr98Bv_qI1E1y76Hh8STfJZnhfkKmVndByUq92yX5qN306_9mt0FCfFYg&usqp=CAU"
              alt=""
            />{" "}
            <h4>Cherry Barb</h4>
          </div>
        </div>
      </div>
      {/* author */}
      <div className="author">
        <div>
          <img
            src="https://i.postimg.cc/m2GtYSF4/smiling-successful-man-suit-portrait-smiling-successful-bearded-businessman-formal-suit-standing-aga.jpg"
            alt=""
          />{" "}
        </div>
        <p>
          <span className="text-author">Author</span> <br /> Sed ut
          perspiciatis, unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt,
          explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur
          aut odit aut fugit, sed quia consequuntur magni dolores eos, qui
          ratione voluptatem sequi nesciunt, neque porro quisquam est, qui
          dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt, ut labore et dolore
          magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </>
  );
};

export default Lipsome;
