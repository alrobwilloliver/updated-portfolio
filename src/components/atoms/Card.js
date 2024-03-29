import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink, codeLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore &#8680;
        </a>
        <div style={{padding: "10px"}}/>
        {codeLink ? 
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Code &#8680;
        </a>
          : 
        <div/>
        }
      </div>
    </div>
  )
}

export default Card
