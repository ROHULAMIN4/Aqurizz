import React from "react";
import "./RightAquriam.css";
const RightAquarium = () => {
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
            src="https://i.postimg.cc/cJKyH7bp/image-11-copyright-840x405.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p className="deils-info">
            Commodo sit, risus et elit, sem non eros morbi, magna amet arcu
            rutrum, vivamus cursus lectus et. Phasellus suspendisse, sit
            sapiente, vitae maecenas ipsum, sit sed. Malesuada diam volutpat.
            Leo dolor vestibulum elementum nunc integer, venenatis dictumst
            pulvinar, ac dignissim montes parturient sit. Varius ipsum congue
            praesent, vitae mauris nec quis per dignissim rhoncus, consequat
            quis pretium arcu, suscipit suspendisse ullamco ante sed in,
            dignissim a morbi imperdiet ullamcorper accumsan varius. In libero
            vitae eget dui. Amet eu morbi, ipsum et in nunc dui sed, nibh
            accumsan blandit morbi pede ut vestibulum. Et id nunc eget pulvinar
            mi, pellentesque pellentesque, duis aliquam lectus facilisis sodales
            metus, ligula amet nullam amet cras duis. Condimentum nunc pede,
            nunc cursus metus nibh porttitor mi, vitae lectus nunc id mauris,
            tellus mi diam lacus leo, tellus nulla molestie aliquam sit mi.
            Risus et in arcu erat, dictumst ipsum aliquam sit velit libero
            venenatis. Class libero, elementum varius ac augue gravida, aliquet
            mattis est, amet ligula ac ante viverra est amet. A nam, amet
            bibendum pretium diam, laoreet aliquam duis, velit quisque pulvinar
            vestibulum, tellus ac. Elit a lacinia tellus, at fusce, erat et pede
            arcu eget, fermentum sit id ipsum. Vehicula quisque sit nullam,
            ligula donec in cupiditate. Ante fusce phasellus elementum nec
            phasellus, sed ultrices metus, odio sit, sed donec sit quia sed,
            integer nibh nunc quis. Etiam est sint nullam praesent, donec nullam
            tincidunt quam eu tristique urna, a aenean sed fusce in et, mauris
            nulla ullamcorper.
          </p>
        </div>
        {/* similer */}

        <div className="similar-img row">
          <h3 className="siilar">Similar</h3>
          <div className="col-lg-3 col-sm-12 col-md-6">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcBgHxNq3-TW8z9hHya-DXxMVOz2W2fX9ow&usqp=CAU"
              alt=""
            />
            <h4>Neon Tetra</h4>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            {" "}
            <img
              src="https://5.imimg.com/data5/AZ/AD/DZ/ANDROID-41237049/product-jpeg-500x500.jpg"
              alt=""
            />
            <h4>Bristlenose Pleco</h4>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <img
              src="https://static.toiimg.com/thumb/msid-77483440,width-1200,height-900,resizemode-4/.jpg"
              alt=""
            />{" "}
            <h4>Betta Fish</h4>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcBgHxNq3-TW8z9hHya-DXxMVOz2W2fX9ow&usqp=CAU"
              alt=""
            />{" "}
            <h4>Zebra Danio</h4>
          </div>
        </div>
      </div>
      {/* Author */}
      <div className="author">
        <div>
          <img
            src="https://i.postimg.cc/1RF8VdXM/portrait-stylish-corporate-executive-smiling-260nw-256367677.jpg"
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

export default RightAquarium;
