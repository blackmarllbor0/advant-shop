import { FC, useRef, useState, useEffect, MouseEvent } from "react";

type prop = {
  imageList: string[];
  title: string;
  activeImage: string;
  setActiveImage: (img: string) => void;
};

const ImagesList: FC<prop> = ({
  imageList,
  title,
  activeImage,
  setActiveImage,
}) => {
  const slider = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<number>(0);

  const backDark = document.querySelector(".back-dark") as HTMLDivElement,
    absoluteImage = document.querySelector(".absolute-image") as HTMLDivElement,
    image = document.querySelector("img.img-absolute") as HTMLImageElement;

  useEffect(() => {
    slider.current!.style.left = `${offset}px`;
  }, [offset]);

  useEffect(() => {
    setOffset(0);
  }, [imageList]);

  const showDarkImage = () => {
    backDark.style.display = "block";
    absoluteImage.style.display = "block";
  };

  const movementDarkBlock = (event: MouseEvent<HTMLDivElement>) => {
    if (event.screenX < 540) {
      backDark.style.marginLeft = "0px";
      image.style.marginLeft = "70px";
    } else if (event.screenX > 610) {
      backDark.style.marginLeft = "70px";
      image.style.marginLeft = "0px";
    } else {
      backDark.style.marginLeft = "35px";
      image.style.marginLeft = "35px";
    }
  };

  const nextSlide = () => {
    if (offset === -(imageList.length * 118 - 118 * 2)) return;
    setOffset(offset - 118);
  };

  const backSlide = () => {
    if (offset === 0) return;
    setOffset(offset + 118);
  };

  const onMouseOutAbsolute = (event: MouseEvent) => {
    backDark.style.display = "none";
    absoluteImage.style.display = "none";
  };

  return (
    <>
      <div className="images">
        <img
          className="big"
          src={activeImage}
          alt={title}
          onMouseOver={showDarkImage}
        />
        <div className="absolute-image">
          <span>{title}</span>
          <div className="img-block">
            <img src={activeImage} alt={title} className="img-absolute" />
          </div>
        </div>
        <div
          className="back-dark"
          onMouseMove={(event) => movementDarkBlock(event)}
          onMouseLeave={onMouseOutAbsolute}
        />
        <div className="slider">
          <div
            className="images-list"
            ref={slider}
            style={{
              width: imageList.length * 118 - 18,
            }}
          >
            {imageList.map((item, i) => {
              return (
                <div
                  key={i}
                  className="border-image"
                  style={{
                    borderColor: activeImage === item ? "yellow" : "white",
                  }}
                  onClick={() => setActiveImage(item)}
                >
                  <img className="small" src={item} alt={title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <i
        className="fa-solid fa-angle-left back-btn-image"
        onClick={backSlide}
        style={{
          display: offset === 0 ? "none" : "block",
        }}
      />
      <i
        className="fa-solid fa-angle-right next-btn-image"
        onClick={nextSlide}
        style={{
          display:
            offset === -(imageList.length * 118 - 118 * 2) ? "none" : "block",
        }}
      />
    </>
  );
};

export default ImagesList;
