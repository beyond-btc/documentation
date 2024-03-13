import React from "react"
import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"
import beyondBanner from "../../../static/img/beyond-banner.png" // Adjust the path as necessary

function CardContainer({ href, children }) {
  return (
    <a href={href} className={clsx("card padding--lg", styles.cardContainer)}>
      {children}
    </a>
  )
}

function CardLayout({ href, icon, title, description }) {
  return (
    <CardContainer href={href}>
      <img src={beyondBanner} style={{ width: "100%", display: "block" }} />
      <br />
      <Heading
        as="h2"
        className={clsx("text--truncate", styles.cardTitle)}
        title={title}
      >
        {title} <span className={styles.iconStyle}>{icon}</span>
      </Heading>
      {description && (
        <p
          className={clsx("text--truncate", styles.cardDescription)}
          title={description}
        >
          {description}
        </p>
      )}
    </CardContainer>
  )
}

function CardLink({ item }) {
  return (
    <CardLayout
      href={item.href}
      icon={"↓"}
      title={item.label}
      description={item.description}
    />
  )
}

const brandItems = [
  {
    label: "Logos",
    description: "Folder containing .svg and .png files",
    href: "/download/brand-assets.zip",
  },
  {
    label: "Banners",
    description: "Folder containing .svg and .png files",
    href: "/download/brand-assets.zip",
  },
]

export default function DownloadCardList({ type }) {
  let items
  if (type === "brand") items = brandItems
  else throw new Error("Invalid type specified for DownloadCardList")

  return (
    <section className="row">
      {items.map((item, index) => (
        <article key={index} className="col col--6 margin-bottom--lg">
          <CardLink item={item} />
        </article>
      ))}
    </section>
  )
}
